import React, { useState, useLayoutEffect, useRef } from "react";
import SEO from "../components/seo";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { gsap } from "gsap";
import tweets from "../content/tweets.json";
import Tweet from "../components/Tweet";
import Layout from "../components/layout";
import Container from "../components/container";
import Footer from "../components/footer";
import { randomSelection } from "../utils";

const useStyles = makeStyles((theme) => ({}));

const Homepage = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  useLayoutEffect(() => {}, []);

  const siteTitle = "Twitter clone: by Mike Abolarin";
  return (
    <Layout>
      <SEO title={siteTitle} />

      <main role="main" style={{ flex: "1", width: "100%" }}>
        <div
          style={{
            flex: "1",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            borderRightWidth: "1px",
            borderRightWidth: "1px",
          }}
        >
          <div
            style={{
              flex: "1",
              width: "100%",
              paddingBottom: "99px",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
            }}
          >
            <section
              role="region"
              style={{
                flex: "1",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
              }}
            >
              <div
                ariaLabel="Timeline: Your Home Timeline"
                style={{
                  flex: "1",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                }}
              >
                <div
                  style={{
                    flex: "1",
                    width: "100%",
                    minHeight: "75641px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                  }}
                >
                  <h1>Tweets!</h1>
                  {tweets.content.map((tweet) => (
                    <Tweet key={tweet.id} tweet={tweet} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Homepage;
