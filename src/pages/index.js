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

const useStyles = makeStyles((theme) => ({}));

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

      <main style={{ width: "100%", position: "fixed" }}></main>
    </Layout>
  );
};

export default Homepage;
