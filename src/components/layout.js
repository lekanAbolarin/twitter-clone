import React from "react";
// import '../assets/scss/main.scss';
import { ThemeProvider } from "@material-ui/styles";
import theme from "../theme";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./Header";
import graphikRegular from "../assets/fonts/Graphik-Regular-Web.woff2";

const styles = (theme) => ({
  body: {
    width: "100vw",
    maxWidth: "100vw",
    padding: "10vh 8vw",
    top: "0",
    left: "0",
    [theme.breakpoints.up("sm")]: {
      padding: "10vh 15vw",
    },
  },
  isLoading: {
    display: "none",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100vw',
    // height: '100vh',
    // padding: '10vh 8vw',
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      // padding: '10vh 15vw',
    },
  },
  "@global": {
    html: {
      width: "100vw",
      // maxWidth: '100vw',
      // margin: '0',
      overflowX: "hidden",
    },
    body: {
      width: "100vw",
      height: "100vh",
      color: "#000000",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      // maxWidth: '100vw',
      // margin: '0',
      // position: 'relative',
      // background: theme.palette.background.default,
      overflowX: "hidden",
      overflow: "hidden",
      // overflowY: 'scroll',

      "&.is-loading": {},
    },
    section: {},
    a: {
      color: "#000000",
      textDecoration: "none",

      "&:hover": {
        borderBottomColor: "transparent !important",
        color: theme.palette.primary.main,
      },
    },
    "@font-face": [
      {
        fontFamily: "Typ",
        src: `url(${graphikRegular})`,
      },
      {
        fontFamily: "Display",
        src: `url(${require("../assets/fonts/Graphik-Bold-Web.woff2")})`,
      },
    ],
    "@keyframes infiniteRotate": {
      "0%": {
        transform: "rotate(0deg)",
      },
      "100%": {
        transform: "rotate(360deg)",
      },
    },
  },
}));

const Baseline = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      showBorder: false,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { children, classes } = this.props;
    const page = (
      <Baseline>
        <Header />
        {children}
      </Baseline>
    );

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {page}
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(Layout);
