import React from "react";
// import '../assets/scss/main.scss';
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Header from "./Header";
import graphikRegular from "../assets/fonts/Graphik-Regular-Web.woff2";

const useStyles = makeStyles((theme) => ({
  root: {},
  "@global": {
    html: {
      width: "100vw",
      // maxWidth: '100vw',
      // margin: '0',
      overflowX: "hidden",
    },
    body: {
      width: "100vw",
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
        <div
          style={{
            width: "100vw",
            minHeight: "100vh",
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <div
            style={{ flexGrow: "1", display: "flex", alignItems: "flex-end" }}
          >
            <Header />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flexShrink: "1",
              flexGrow: "1",
            }}
          >
            {children}
          </div>
        </div>
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
          <Header />
          {children}
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
