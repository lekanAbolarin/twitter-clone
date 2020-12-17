import React, { useState, useLayoutEffect, useRef } from "react";
import SEO from "../components/seo";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Button from "../components/Button";
import Avatar from "@material-ui/core/Avatar";
import tweets from "../content/tweets.json";
import Tweet from "../components/Tweet";
import Layout from "../components/layout";
import Container from "../components/container";
import Footer from "../components/footer";
import { randomSelection } from "../utils";

const useStyles = makeStyles((theme) => ({
  columnar: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "auto",
    alignItems: "stretch",
  },
}));

const Homepage = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  useLayoutEffect(() => {}, []);

  const siteTitle = "Twitter clone: by Mike Abolarin";
  return (
    <Layout>
      <SEO title={siteTitle} />

      <main
        role="main"
        className={classes.columnar}
        style={{
          width: "990px",
          backfaceVisibility: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className={classes.columnar}
          style={{
            flexDirection: "row",
            alignItem: "stretch",
            flex: "1",
          }}
        >
          <div
            className={classes.columnar}
            style={{
              flex: "1",
              width: "600px",
              maxWidth: "600px",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              position: "relative",
              borderWidth: "0 1px 0 1px",
              borderLeftWidth: "1px",
              borderRightWidth: "1px",
              borderColor: "rgb(235, 238, 240)",
              borderStyle: "solid",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "54px",
                position: "sticky",
                top: "0px",
                display: !isMobile ? "block" : "none",
                backgroundColor: "rgba(255, 255, 255, 1.00)",
                borderBottomWidth: "1px",
                borderBottomColor: "rgb(235, 238, 240)",
                borderBottomStyle: "solid",
                backfaceVisibility: "hidden",
                zIndex: "3",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "0 15px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    fontize: "19px",
                    fontWeight: "800",
                  }}
                >
                  Home
                </Typography>
                <Button variant="icon" noPadding>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      style={{
                        width: "22.5px",
                        margin: "7.25px",
                        color: "rgba(29, 161, 242, 1)",
                        fill: "currentcolor",
                      }}
                    >
                      <g>
                        <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z" />
                      </g>
                    </svg>
                  </div>
                </Button>
              </div>
            </div>
            <div
              style={{
                flex: "1",
                width: "100%",
                paddingBottom: "99px",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                zIndex: "1",
              }}
            >
              <div
                style={{
                  zIndex: "1",
                  backgroundColor: "rgba(255, 255, 255, 1.00)",
                  display: !isMobile ? "block" : "none",
                }}
              >
                <div style={{ paddingBottom: "5px" }}>
                  <div
                    role="progressbar"
                    ariaValuemax="100"
                    ariaValuemin="0"
                    valuenow="0"
                    style={{
                      width: "100%",
                      height: "3px",
                      borderTopRightRadius: "4px",
                      borderTopLeftRadius: "4px",
                      zIndex: "0",
                      position: "absolute",
                      userSelect: "none",
                      overflow: "hidden",
                    }}
                  >
                    {
                      //progress bar goes here
                    }
                  </div>
                  <div
                    className={classes.columnar}
                    style={{ padding: "5px 0" }}
                  >
                    <div style={{ padding: "0 15px", display: "flex" }}>
                      <Avatar style={{ marginRight: "20px" }} />
                      <div
                        className={classes.columnar}
                        style={{ flex: "1", paddingTop: "5px" }}
                      >
                        <div
                          className={classes.columnar}
                          style={{ flex: "1", zIndex: "1" }}
                        >
                          <div
                            className={classes.columnar}
                            style={{
                              flex: "1",
                              borderWidth: "2px",
                              borderRadius: "4px",
                            }}
                          >
                            <Typography
                              variant="body1"
                              style={{
                                fontSize: "19px",
                                fontWeight: "300",
                                color: "#5B7083",
                              }}
                            >
                              What's happening?
                            </Typography>
                          </div>
                        </div>
                        {
                          //Everyone can reply
                        }
                        <div style={{ display: "block" }}>
                          <div style={{ width: "auto" }}>
                            <Button>
                              <div>
                                <svg
                                  viewBox="0 0 24 24"
                                  style={{
                                    width: "13.5px",
                                    marginRight: "6.px",
                                  }}
                                >
                                  <g>
                                    <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zM9.047 5.9c-.878.484-1.22.574-1.486.858-.263.284-.663 1.597-.84 1.712-.177.115-1.462.154-1.462.154s2.148 1.674 2.853 1.832c.706.158 2.43-.21 2.77-.142.342.07 2.116 1.67 2.324 2.074.208.404.166 1.748-.038 1.944-.204.196-1.183 1.09-1.393 1.39-.21.3-1.894 4.078-2.094 4.08-.2 0-.62-.564-.73-.848-.11-.284-.427-4.012-.59-4.263-.163-.25-1.126-.82-1.276-1.026-.15-.207-.552-1.387-.527-1.617.024-.23.492-1.007.374-1.214-.117-.207-2.207-1.033-2.61-1.18-.403-.145-.983-.332-.983-.332 1.13-3.652 4.515-6.318 8.52-6.38 0 0 .125-.018.186.14.11.286.256 1.078.092 1.345-.143.23-2.21.99-3.088 1.474zm11.144 8.24c-.21-.383-1.222-2.35-1.593-2.684-.23-.208-2.2-.912-2.55-1.09-.352-.177-1.258-.997-1.267-1.213-.01-.216 1.115-1.204 1.15-1.524.056-.49-1.882-1.835-1.897-2.054-.015-.22.147-.66.31-.81.403-.36 3.19.04 3.556.36 2 1.757 3.168 4.126 3.168 6.873 0 .776-.18 1.912-.282 2.18-.08.21-.443.232-.595-.04z" />
                                  </g>
                                </svg>
                                <Typography
                                  variant="cption"
                                  style={{
                                    fontSize: "15px",
                                    fontWeight: "800",
                                  }}
                                >
                                  Everyone can reply
                                </Typography>
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                    {tweets.content.map((tweet) => (
                      <Tweet key={tweet.id} tweet={tweet} />
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Homepage;
