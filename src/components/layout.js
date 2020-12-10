import React from "react";
// import '../assets/scss/main.scss';
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
import Grid from "@material-ui/core/Grid";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Header from "./Header";
import graphikRegular from "../assets/fonts/Graphik-Regular-Web.woff2";

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
      color: "inherit",
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

const Layout = (props) => {
  const { children } = props;
  const _theme = useTheme();
  const isMobile = useMediaQuery(_theme.breakpoints.down("xs"));
  const page = (
    <Baseline>
      {!isMobile ? (
        <Grid container>
          <Grid item xs={4} sm={4} style={{ height: "100vh" }}>
            <Header />
          </Grid>
          <Grid item xs={8} sm={8}>
            {children}
          </Grid>
        </Grid>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            poition: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flexGrow: "1" }}>{children}</div>
          <div style={{ height: "54px" }}>
            <Header />
          </div>
        </div>
      )}
    </Baseline>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {page}
    </ThemeProvider>
  );
};

export default Layout;
