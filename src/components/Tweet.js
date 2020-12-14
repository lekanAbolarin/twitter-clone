import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tweet: {
    width: "100%",
    backgroundColor: "rgb(235, 238, 240)",
  },
  columner: {
    flex: "1",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
}));

const Tweet = (props) => {
  const classes = useStyles();
  const tweet = props.tweet;
  return (
    <div className={classes.tweet}>
      <article
        role="article"
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
            {tweet.user}
            {tweet.message}
            {tweet.retweets}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Tweet;
