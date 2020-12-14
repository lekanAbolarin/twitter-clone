import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  footerRoot: {
    width: "100%",
    padding: "16px",
    marginTop: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  typoRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "26px",
    [theme.breakpoints.up("sm")]: {
      width: "32px",
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  return (
    <footer className={classes.footerRoot} id="footer">
      <Typography
        color="secondary"
        variant="caption"
        className={classes.typoRoot}
        component="div"
        align="center"
      >
        <div>Copyright © 2020</div>
        <div>
          Made with ❤️ by{" "}
          <strong>
            <a
              href="https://mikeabolarin.netlify.app"
              target="__blank"
              style={{ color: "#ffffff" }}
            >
              Mike Abolarin
            </a>
          </strong>
        </div>
      </Typography>
    </footer>
  );
};

export default Footer;
