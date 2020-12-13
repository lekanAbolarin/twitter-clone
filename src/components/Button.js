import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  filled: {
    padding: "10px",
    color: "white",
    backgroundColor: theme.palette.primary.light,
    borderRadius: "9999px",
    display: "flex",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  outline: {
    padding: "10px",
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "9999px",
    display: "flex",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(29, 161, 242, 0.1)",
    },
  },
  icon: {
    fill: theme.palette.primary.main,
    borderRadius: "50%",
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: "rgba(29, 161, 242, 0.1)",
    },
  },
  text: {
    padding: "10px",
    borderRadius: "9999px",
    display: "flex",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
      fill: theme.palette.primary.main,
      backgroundColor: "rgba(29, 161, 242, 0.1)",
    },
  },
}));

const Button = (props) => {
  const classes = useStyles();
  const style = props.noPadding ? { padding: "0" } : { padding: "10px" };
  return props.variant === "filled" ? (
    <div role="button" className={classes.filled} style={style}>
      {props.children}
    </div>
  ) : props.variant === "outline" ? (
    <div role="button" className={classes.outline} style={style}>
      {props.children}
    </div>
  ) : props.variant === "icon" ? (
    <div role="button" className={classes.icon} style={style}>
      {props.children}
    </div>
  ) : (
    <div role="button" className={classes.text} style={style}>
      {props.children}
    </div>
  );
};

export default Button;
