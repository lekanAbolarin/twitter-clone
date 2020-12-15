import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar } from "@material-ui/core";
import Button from "./Button";

const useStyles = makeStyles((theme) => ({
  tweet: {
    width: "100%",
  },
  columner: {
    flex: "1",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  userAlias: {
    whiteSpace: "nowrap",
    color: "rgb(15, 20, 25)",
    cursor: "pointer",
    "&:hover": {
      textDecorationLine: "underline",
    },
  },
  fade: {
    color: "rgb(91, 112, 131)",
    fontWeight: "400",
  },
  date: {
    cursor: "pointer",
    "&:hover": {
      textDecorationLine: "underline",
    },
  },
  article: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.03)",
    },
  },
}));

const Tweet = (props) => {
  const classes = useStyles();
  const tweet = props.tweet;
  return (
    <div className={classes.tweet}>
      <article
        role="article"
        className={classes.article}
        style={{
          width: "100%",
          padding: "0 15px",
          outlineStyle: "none",
          curor: "pointer",
        }}
      >
        <div className={classes.columner}>
          <div />
          <div style={{ width: "100%", display: "flex" }}>
            <div
              style={{
                flexBasis: "49px",
                marginRight: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <a>
                <Avatar
                  src={tweet.imagePath}
                  style={{ width: "49px", height: "49px" }}
                />
              </a>
            </div>
            <div
              classname={classes.columner}
              style={{ flex: "1", paddingBottom: "10px", flexBasis: "0px" }}
            >
              <Typography
                variant="h6"
                style={{
                  marginBottom: "2px",
                  flex: "1",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "15px",
                }}
              >
                <span>
                  <span
                    className={classes.userAlias}
                    style={{ fontWeight: "700px" }}
                  >
                    {tweet.userAlias}
                  </span>
                  <span className={classes.fade}>
                    {" "}
                    {tweet.user} ·{" "}
                    <span className={classes.date}>{tweet.since}</span>
                  </span>
                </span>
                <span>
                  <Button icon>
                    <svg viewBox="0 0 24 24" style={{ width: "18.75px" }}>
                      <g>
                        <path d="M19.39 14.882c-1.58 0-2.862-1.283-2.862-2.86s1.283-2.862 2.86-2.862 2.862 1.283 2.862 2.86-1.284 2.862-2.86 2.862zm0-4.223c-.75 0-1.362.61-1.362 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36zM12 14.882c-1.578 0-2.86-1.283-2.86-2.86S10.42 9.158 12 9.158s2.86 1.282 2.86 2.86S13.578 14.88 12 14.88zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.362 1.36 1.362 1.36-.61 1.36-1.36-.61-1.363-1.36-1.363zm-7.39 4.223c-1.577 0-2.86-1.283-2.86-2.86S3.034 9.16 4.61 9.16s2.862 1.283 2.862 2.86-1.283 2.862-2.86 2.862zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36z" />
                      </g>
                    </svg>
                  </Button>
                </span>
              </Typography>
              <Typography
                variant="h6"
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: "400",
                  color: "rgb(15, 30, 25)",
                  fontSize: "15px",
                  overflowWrap: "break-word",
                  lineHeight: "1.3125",
                  position: "relative",
                }}
              >
                <span>{tweet.message}</span>
              </Typography>
              <div
                style={{
                  width: "100%",
                  height: "285.18px",
                  marginTop: "10px",
                  flex: "1",
                  display: "flex",
                  borderRadius: "12px",
                }}
              >
                <a>
                  <div style={{ backgroundColor: "rgb(151, 96, 63)" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Tweet;
