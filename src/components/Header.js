import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Blinker from "./blinker";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const useStyles = makeStyles((theme) => ({
  header: {
    height: "54px",
    padding: "0 30px 0px 30px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: "0px",
    left: "0px",
    right: "0",
    // fontSize: "11px",
    textAlign: "center",
    backgroundColor: "#212121",
    zIndex: "10000",
    [theme.breakpoints.down("xs")]: {
      padding: "0 20px 0px 2px",
      height: "54px",
      top: "0",
      left: "0",
      // fontSize: "9px",
    },
  },
  index: {
    opacity: "1",
    display: "flex",
    alignItems: "center",
  },
  nav: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
  },
  isActive: {},
  linkMarker: {
    content: '""',
    width: "100%",
    height: "2px",
    backgroundColor: "#000000",
    opacity: "1",
    position: "absolute",
    bottom: "0",
    left: "0",
    transform: "translate(0, 100%)",
  },
  showLinkMarker: {},
  logoImage: {
    height: "40%",
    [theme.breakpoints.up("sm")]: {},
    "& > img": {
      height: "100%",
    },
  },
}));

const Header = (props) => {
  const [activeSection, setActiveSection] = useState("/");
  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <header className={classes.header}>
      <a href="/" className={classes.link}>
        <div className={classes.logoImage}>
          <img src={require("../assets/images/ma-logo.svg")} alt="logo" />
        </div>
      </a>
    </header>
  );
};

export default Header;
