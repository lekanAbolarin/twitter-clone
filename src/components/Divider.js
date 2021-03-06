import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  divider: {
    width: "100%",
    height: "1px",
    margin: "2px 0",
    backgroundColor: "rgb(235, 238, 240)",
  },
}));

const Divider = (props) => {
  const classes = useStyles();
  return <div className={classes.divider} />;
};

export default Divider;
