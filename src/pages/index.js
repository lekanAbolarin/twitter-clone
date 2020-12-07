import React, { useState, useLayoutEffect, useRef } from "react";
import SEO from "../components/seo";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { gsap } from "gsap";

import Layout from "../components/layout";
import Container from "../components/container";
import Footer from "../components/footer";
import { randomSelection } from "../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  collector: {},
  game: {
    width: "100%",
    maxHeight: "80vh",
    marginTop: "80px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "60px",
    },
  },
  gradient: {
    backgroundColor: "linear-gradient(to right, #f05a28, #ec008c, #fo5a28)",
  },
  paper: {
    maxWidth: "90%",
    marginTop: "40px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "20px",
    background:
      "linear-gradient(180deg, #363636 0%, rgba(54, 54, 54, 0) 41.19%), linear-gradient(0deg, #222222, #222222)",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "32%",
    },
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.secondary.main,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  entry: {
    backgroundColor: "#dddddd",
    "&:hover": {
      backgroundColor: "#dddddd",
    },
  },
  therm: {
    width: "90%",
    margin: "0 auto 0 auto",
    position: "relative",
    "& > svg": {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "35%",
    },
  },
  mecury: {
    height: "20%",
    width: "0",
    position: "absolute",
    top: "50%",
    left: "12%",
    transform: "translate3d(0, -90%, 0)",
    backgroundColor: "#c1272d",
    zIndex: "-1",
    [theme.breakpoints.up("sm")]: {
      transform: "translate3d(0, -65%, 0)",
    },
  },
  marker: {
    width: "4px",
    height: "50px",
    position: "absolute",
    left: "calc(52% - 2px)",
    bottom: "0",
    backgroundColor: "#ffffff",
  },
}));

const Homepage = (props) => {
  const [choice, setChoice] = useState(randomSelection([...Array(101).keys()]));
  const choiceChanger = () => {
    setChoice(randomSelection([...Array(101).keys()]));
  };
  return <Game choice={choice} choiceChanger={choiceChanger} />;
};

const Game = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const mecury = useRef(null);
  const caption = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);
  const [status, setStatus] = useState(
    <Typography ref={caption} variant="caption" align="center" component="p">
      <span style={{ color: "white" }}>Waiting for your guess!</span>
    </Typography>
  );

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue < 0 || inputValue > 100) {
      setInputError(true);
      return;
    }
    setInputError(false);
    setStatus(comparator(inputValue, props.choice));
  };

  const comparator = (guess, choice) => {
    const difference = guess - choice;
    gsap.to(mecury.current, { width: `${40 + (difference / 100) * 40}%` });
    if (difference > 0 && difference < 50) {
      return (
        <Typography
          ref={caption}
          variant="caption"
          align="center"
          component="p"
        >
          <span style={{ color: "red" }}>Hotter!</span>
        </Typography>
      );
    }
    if (difference < 0 && difference > -50) {
      return (
        <Typography
          ref={caption}
          variant="caption"
          align="center"
          component="p"
        >
          <span style={{ color: "teal" }}>Colder!</span>
        </Typography>
      );
    }
    if (difference >= 50) {
      return (
        <Typography
          ref={caption}
          variant="caption"
          align="center"
          component="p"
        >
          <span style={{ color: "red" }}>Burning Hot!</span>
        </Typography>
      );
    }
    if (difference <= -50) {
      return (
        <Typography
          ref={caption}
          variant="caption"
          align="center"
          component="p"
        >
          <span style={{ color: "teal" }}>Freezing Cold!</span>
        </Typography>
      );
    }
    if (difference === 0) {
      return (
        <Typography
          ref={caption}
          variant="caption"
          align="center"
          component="p"
        >
          <span style={{ color: "white" }}>Perfect!</span>
        </Typography>
      );
    }
    return (
      <Typography ref={caption} variant="caption" align="center" component="p">
        <span style={{ color: "white", textAlign: "center" }}>
          {difference}
        </span>
      </Typography>
    );
  };

  useLayoutEffect(() => {}, [isMobile]);

  const siteTitle = "Hot or Cold";
  return (
    <Layout>
      <SEO title={siteTitle} />

      <main style={{ width: "100%", position: "fixed" }}>
        <section id="game" className={classes.game}>
          <div className={classes.collector}>
            <Typography variant="body1" align="center" color="secondary">
              Guess the secret number by entering an integer number between 0
              and 100
            </Typography>
            <Paper className={classes.paper}>
              <Container>
                <Typography variant="h6" color="secondary" align="center">
                  Your Guess
                </Typography>
                <form
                  className={classes.inputs}
                  noValidate
                  autoComplete="off"
                  onSubmit={onSubmit}
                >
                  <TextField
                    required
                    id="guessInput"
                    label=""
                    variant="filled"
                    inputProps={{
                      className: classes.entry,
                      value: inputValue,
                      onChange: handleInputChange,
                    }}
                    error={inputError}
                    helperText={
                      inputError ? "Please, match the specified format" : ""
                    }
                  />
                  <div>
                    <Button
                      color="primary"
                      className={classes.submitButton}
                      type="submit"
                    >
                      SUBMIT
                    </Button>
                    <Button
                      color="primary"
                      className={classes.newGame}
                      onClick={() => {
                        setInputValue("");
                        gsap.to(mecury.current, { width: 0, duration: 0.8 });
                        setStatus(
                          <Typography
                            ref={caption}
                            variant="caption"
                            align="center"
                            component="p"
                          >
                            <span style={{ color: "white" }}>
                              Waiting for your guess!
                            </span>
                          </Typography>
                        );
                        props.choiceChanger();
                      }}
                    >
                      NEW GAME
                    </Button>
                  </div>
                </form>
                {status}
              </Container>
            </Paper>
          </div>
          <div>
            <div className={classes.therm}>
              <svg viewBox="0 0 375.64 49.48">
                <path
                  style={{
                    fill: "none",
                    stroke: "#dddddd",
                    strokeMiterLimit: "10",
                  }}
                  d="M24.74,49a24.24,24.24,0,1,1,21.71-35,4.8,4.8,0,0,0,4.31,2.64H366.7a8.33,8.33,0,0,1,8.42,7.62A8.15,8.15,0,0,1,367,32.9H50.76a4.81,4.81,0,0,0-4.32,2.65A24.23,24.23,0,0,1,24.74,49Z"
                />
                <circle
                  style={{
                    fill: "#c1272d",
                  }}
                  cx="24.71"
                  cy="24.74"
                  r="22.05"
                />
              </svg>
              <div ref={mecury} className={classes.mecury} />
              <div className={classes.marker} />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </Layout>
  );
};

export default Homepage;
