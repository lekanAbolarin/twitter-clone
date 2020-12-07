import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  centeredContainerRow: {
    height: "100%",
    padding: "12% 12%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredContainerColumn: {
    height: "100%",
    padding: "12% 12%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: "100%",
    padding: "12% 12%",
    overflow: "hidden",
  },
  bottom: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    overflow: "hidden",
  },
  sides: {
    width: "100%",
    height: "100%",
    padding: "0 12%",
  },
  noTopBottom: {
    height: "100%",
    padding: "0 12%",
    overflow: "hidden",
  },
  noTop: {
    height: "100%",
    padding: "0 12% 12%",
    overflow: "hidden",
  },
  noBottom: {
    height: "100%",
    padding: "12% 12% 0",
  },
  noTopBottomLeft: {
    height: "100%",
    padding: "0 12% 0 0",
  },
  noTOpBottomRight: {
    height: "100%",
    padding: "0 0 0 12%",
  },
}));

const Container = (props) => {
  const classes = useStyles();
  let column = props.column ? true : false;
  if (props.row) {
    column = false;
  }
  return (
    <div
      className={
        props.center
          ? column
            ? classes.centeredContainerColumn
            : classes.centeredContainerRow
          : props.bottom
          ? classes.bottom
          : props.sides
          ? classes.sides
          : props.noTopBottom
          ? classes.noTopBottom
          : props.noTop
          ? classes.noTop
          : props.noBottom
          ? classes.noBottom
          : props.noTopBottomLeft
          ? classes.noTopBottomLeft
          : props.noTopBottomRight
          ? classes.noTopBottomRight
          : classes.container
      }
      style={{ overflow: props.overflow ? "" : "hidden" }}
    >
      {props.children}
    </div>
  );
};

export default Container;
