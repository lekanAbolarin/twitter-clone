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
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    flex: "1",
  },
  columnar: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "auto",
    alignItems: "stretch",
  },
  tItem: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.03)",
    },
  },
  blueLink: {
    color: "rgb(27, 149, 224)",
    cursor: "pointer",
    "&:hover": {
      textDecorationLine: "underline",
    },
  },
  greyLink: {
    marginTop: "2px",
    marginBottom: "2px",
    color: "rgb(91, 112, 131)",
    cursor: "pointer",
    fontSize: "13px",
    lineHeight: "19.6875px",
    "&:hover": {
      color: "rgb(91, 112, 131)",
      textDecorationLine: "underline",
    },
  },
  subHeader: {
    flex: "1",
    display: "flex",
    color: "rgb(91, 112, 131)",
    lineHeight: "19.6875px",
    fontWeight: "400",
    fontSize: "13px",
  },
  tText: {
    margin: "2px 0",
    fontWeight: "800",
    fontSize: "15px",
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
        className={classes.main}
        style={{
          width: !isMobile ? "990px" : "100vw",
          backfaceVisibility: "hidden",
          position: "relative",
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
              width: !isMobile ? "600px" : "100vw",
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
                width: !isMobile ? "598px" : "100%",
                height: "54px",
                position: "fixed",
                top: "0",
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
                height: "54px",
                display: !isMobile ? "block" : "none",
              }}
            />
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
                                padding: "10px 0",
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
                        <div style={{}}>
                          <div
                            style={{
                              padding: "0 5px 10px",
                              display: "flex",
                              justifyContent: "flexStart",
                              alignItems: "center",
                            }}
                          >
                            <Button noPadding>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  lineHeight: "1",
                                }}
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  style={{
                                    fill: "rgb(29, 161, 242 )",
                                    width: "19.5px",
                                    margin: "5px 6px 5px 5px",
                                  }}
                                >
                                  <g>
                                    <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zM9.047 5.9c-.878.484-1.22.574-1.486.858-.263.284-.663 1.597-.84 1.712-.177.115-1.462.154-1.462.154s2.148 1.674 2.853 1.832c.706.158 2.43-.21 2.77-.142.342.07 2.116 1.67 2.324 2.074.208.404.166 1.748-.038 1.944-.204.196-1.183 1.09-1.393 1.39-.21.3-1.894 4.078-2.094 4.08-.2 0-.62-.564-.73-.848-.11-.284-.427-4.012-.59-4.263-.163-.25-1.126-.82-1.276-1.026-.15-.207-.552-1.387-.527-1.617.024-.23.492-1.007.374-1.214-.117-.207-2.207-1.033-2.61-1.18-.403-.145-.983-.332-.983-.332 1.13-3.652 4.515-6.318 8.52-6.38 0 0 .125-.018.186.14.11.286.256 1.078.092 1.345-.143.23-2.21.99-3.088 1.474zm11.144 8.24c-.21-.383-1.222-2.35-1.593-2.684-.23-.208-2.2-.912-2.55-1.09-.352-.177-1.258-.997-1.267-1.213-.01-.216 1.115-1.204 1.15-1.524.056-.49-1.882-1.835-1.897-2.054-.015-.22.147-.66.31-.81.403-.36 3.19.04 3.556.36 2 1.757 3.168 4.126 3.168 6.873 0 .776-.18 1.912-.282 2.18-.08.21-.443.232-.595-.04z" />
                                  </g>
                                </svg>
                                <Typography
                                  variant="caption"
                                  style={{
                                    marginRight: "5px",
                                    fontSize: "13px",
                                    fontWeight: "700",
                                    lineHeight: "1.13125",
                                    textAlign: "center",
                                  }}
                                >
                                  <span
                                    style={{
                                      color: "rgb(29, 161, 242 )",
                                    }}
                                  >
                                    Everyone can reply
                                  </span>
                                </Typography>
                              </div>
                            </Button>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "100%",
                            height: "1px",
                            backgroundColor: "rgb(235, 238, 240)",
                          }}
                        />
                        <div
                          style={{
                            margin: "10px 2px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                            }}
                          >
                            <Button icon style={{ marginLeft: "-10px" }}>
                              <svg
                                viewBox="0 0 24 24"
                                style={{
                                  width: "22.5px",
                                  fill: "rgb(29, 161, 242)",
                                }}
                              >
                                <g>
                                  <path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z" />
                                  <circle cx="8.868" cy="8.309" r="1.542" />
                                </g>
                              </svg>
                            </Button>
                            <Button icon>
                              <svg
                                viewBox="0 0 24 24"
                                style={{
                                  width: "22.5px",
                                  fill: "rgb(29, 161, 242)",
                                }}
                              >
                                <g>
                                  <path d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z" />
                                  <path d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z" />
                                </g>
                              </svg>
                            </Button>
                            <Button icon>
                              <svg
                                viewBox="0 0 24 24"
                                style={{
                                  width: "22.5px",
                                  fill: "rgb(29, 161, 242)",
                                }}
                              >
                                <g>
                                  <path d="M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z" />
                                </g>
                              </svg>
                            </Button>
                            <Button icon>
                              <svg
                                viewBox="0 0 24 24"
                                style={{
                                  width: "22.5px",
                                  fill: "rgb(29, 161, 242)",
                                }}
                              >
                                <g>
                                  <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z" />
                                  <path d="M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z" />
                                  <circle cx="14.738" cy="9.458" r="1.478" />
                                  <circle cx="9.262" cy="9.458" r="1.478" />
                                </g>
                              </svg>
                            </Button>
                            <Button icon>
                              <svg
                                viewBox="0 0 24 24"
                                style={{
                                  width: "22.5px",
                                  fill: "rgb(29, 161, 242)",
                                }}
                              >
                                <g>
                                  <path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z" />
                                  <path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z" />
                                  <path d="M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z" />
                                  <path d="M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z" />
                                </g>
                              </svg>
                            </Button>
                          </div>
                          <div>
                            <Button variant="filled">
                              <span style={{ padding: "0 5px" }}>Tweet</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "10px",
                  borderTopWidth: "1px",
                  borderTopStyle: "solid",
                  borderTopColor: "rgb(235, 238, 240)",
                  backgroundColor: "rgb(247, 249, 250)",
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderBottomColor: "rgb(235, 238, 240)",
                  display: !isMobile ? "block" : "none",
                }}
              />
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
        <div
          className={classes.columnar}
          style={{
            width: "350px",
            height: "100%",
            marginRight: "10px",
            backfaceVisibility: "hidden",
            pointerEvents: "auto",
            position: "relative",
          }}
        >
          <div
            className={classes.columnar}
            style={{
              padding: "10px 0 59px 0",
              position: "sticky",
              top: "-200px",
            }}
          >
            <div
              style={{
                width: "350px",
                minHeight: "30px",
                height: "53px",
                marginBottom: "10px",
                zIndex: "2",
                display: "flex",
                alignItems: "center",
                position: "fixed",
                top: "0",
                backgroundColor: "rgb(255, 255, 255)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexBasis: "0",
                  flexGrow: "1",
                  flexShrink: "1",
                  backgroundColor: "rgb(235, 238, 240)",
                  borderRadius: "9999px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <svg
                      viewBox="0 0 24 24"
                      style={{
                        width: "40px",
                        height: "1.25em",
                        position: "relative",
                        paddingLeft: "10px",
                        color: "rgb(91, 112, 131)",
                        minWidth: "30px",
                        verticalAlign: "textBottom",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                      </g>
                    </svg>
                  </div>
                </div>
                <form
                  style={{
                    fontWeight: "400",
                    color: "rgb(15, 20, 25)",
                    fontSize: "15px",
                    overflowWrap: "break-word",
                    lineHeight: "1.3125",
                    flexGrow: "1",
                  }}
                >
                  <input
                    placeholder="Search Twitter"
                    style={{
                      textAlign: "left",
                      fontSize: "inherit",
                      fontFamily: "inherit",
                      color: "inherit",
                      resize: "none",
                      appearance: "none",
                      outlineStyle: "none",
                      width: "100%",
                      borderRadius: "0",
                      borderWidth: "0",
                      padding: "10px",
                      fontSize: "15px",
                      margin: "0",
                      backgroundColor: "transparent",
                      height: "40px",
                    }}
                  />
                </form>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "53px",
              }}
            />
            <div
              className={classes.columnar}
              style={{
                marginBottom: "15px",
                backgroundColor: "rgb(247, 249, 250)",
                borderColor: "rgb(247, 249, 250)",
                borderRadius: "16px",
                overflow: "hidden",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <section role="region" className={classes.columnar}>
                <div className={classes.columnar}>
                  <div
                    style={{
                      borderBottom: "1px solid rgb(235, 238, 240)",
                      outlineStyle: "none",
                      display: "block",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "space-between",
                        padding: "10px 15px",
                      }}
                    >
                      <Typography
                        variant="h2"
                        style={{
                          fontWeight: "800",
                          overflowWrap: "break-word",
                          lineHeight: "1.3125",
                          fontSize: "19px",
                        }}
                      >
                        What's happening
                      </Typography>
                    </div>
                  </div>
                  <div
                    className={classes.tItem}
                    style={{
                      borderBottom: "1px solid rgb(235, 238, 240)",
                      outlineStyle: "none",
                      display: "block",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "space-between",
                        padding: "10px 15px",
                      }}
                    >
                      <div
                        style={{ display: "flex", alignItems: "flex-start" }}
                      >
                        <div
                          className={classes.columnar}
                          style={{ marginRight: "10px" }}
                        >
                          <Typography
                            variant="body1"
                            style={{
                              flex: "1",
                              display: "flex",
                              color: "rgb(91, 112, 131)",
                              lineHeight: "19.68px",
                              fontWeight: "400",
                              fontSize: "13px",
                            }}
                          >
                            <span>COVID-19</span> <span> · </span>
                            <span> 1 hour ago</span>
                          </Typography>
                          <Typography
                            variant="h6"
                            style={{
                              margin: "2px 0",
                              fontWeight: "800px",
                              fontSize: "15px",
                            }}
                          >
                            Chinese citizen journalist Zhang Zhan jailed for
                            reporting on early COVID-19 outbreak in Wuhan
                          </Typography>
                          <Typography
                            variant="caption"
                            style={{
                              marginTop: "5px",
                              flex: "1",
                              display: "flex",
                              color: "rgb(91, 112, 131)",
                              lineHeight: "19.6875px",
                              fontWeight: "400",
                              fontSize: "13px",
                            }}
                          >
                            <span>Trending with </span>
                            <span className={classes.blueLink}>
                              _Zhang Zhan
                            </span>
                          </Typography>
                        </div>
                        <div>
                          <div
                            style={{
                              width: "69px",
                              height: "69px",
                              backgroundColor: "grey",
                              borderRadius: "8px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={classes.tItem}
                  style={{
                    borderBottom: "1px solid rgb(235, 238, 240)",
                    outlineStyle: "none",
                    display: "block",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "space-between",
                      padding: "10px 15px",
                      position: "relative",
                    }}
                  >
                    <Typography className={classes.subHeader}>
                      <span>Celebrities · </span>
                      <span> Trending</span>
                    </Typography>
                    <Typography className={classes.tText}>
                      <span>Paris Hilton</span>
                    </Typography>
                    <Typography className={classes.subHeader}>
                      <span> 1,369 Tweets</span>
                    </Typography>
                    <div
                      style={{
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                      }}
                    >
                      <Button>
                        <svg
                          viewBox="0 0 24 24"
                          style={{
                            height: "18.75px",
                          }}
                        >
                          <g>
                            <path d="M19.39 14.882c-1.58 0-2.862-1.283-2.862-2.86s1.283-2.862 2.86-2.862 2.862 1.283 2.862 2.86-1.284 2.862-2.86 2.862zm0-4.223c-.75 0-1.362.61-1.362 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36zM12 14.882c-1.578 0-2.86-1.283-2.86-2.86S10.42 9.158 12 9.158s2.86 1.282 2.86 2.86S13.578 14.88 12 14.88zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.362 1.36 1.362 1.36-.61 1.36-1.36-.61-1.363-1.36-1.363zm-7.39 4.223c-1.577 0-2.86-1.283-2.86-2.86S3.034 9.16 4.61 9.16s2.862 1.283 2.862 2.86-1.283 2.862-2.86 2.862zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36z" />
                          </g>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  className={classes.tItem}
                  style={{
                    borderBottom: "1px solid rgb(235, 238, 240)",
                    outlineStyle: "none",
                    display: "block",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "space-between",
                      padding: "10px 15px",
                      position: "relative",
                    }}
                  >
                    <Typography className={classes.subHeader}>
                      <span>Hip hop · </span>
                      <span> Trending</span>
                    </Typography>
                    <Typography className={classes.tText}>
                      <span>Davido</span>
                    </Typography>
                    <Typography className={classes.subHeader}>
                      <span> Trending with</span>{" "}
                      <span className={classes.blueLink}>_Burna</span>
                    </Typography>
                    <div
                      style={{
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                      }}
                    >
                      <Button>
                        <svg
                          viewBox="0 0 24 24"
                          style={{
                            height: "18.75px",
                          }}
                        >
                          <g>
                            <path d="M19.39 14.882c-1.58 0-2.862-1.283-2.862-2.86s1.283-2.862 2.86-2.862 2.862 1.283 2.862 2.86-1.284 2.862-2.86 2.862zm0-4.223c-.75 0-1.362.61-1.362 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36zM12 14.882c-1.578 0-2.86-1.283-2.86-2.86S10.42 9.158 12 9.158s2.86 1.282 2.86 2.86S13.578 14.88 12 14.88zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.362 1.36 1.362 1.36-.61 1.36-1.36-.61-1.363-1.36-1.363zm-7.39 4.223c-1.577 0-2.86-1.283-2.86-2.86S3.034 9.16 4.61 9.16s2.862 1.283 2.862 2.86-1.283 2.862-2.86 2.862zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36z" />
                          </g>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  className={classes.tItem}
                  style={{
                    borderBottom: "1px solid rgb(235, 238, 240)",
                    outlineStyle: "none",
                    display: "block",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "space-between",
                      padding: "10px 15px",
                      position: "relative",
                    }}
                  >
                    <Typography className={classes.subHeader}>
                      <span>NFL · </span>
                      <span> This morning</span>
                    </Typography>
                    <Typography className={classes.tText}>
                      <span>Titans at Packers</span>
                    </Typography>
                    <Typography className={classes.subHeader}>
                      <span> Trending with </span>
                      <span className={classes.blueLink}>
                        _Davante adams, AJ Dillon
                      </span>
                    </Typography>
                    <div
                      style={{
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                      }}
                    >
                      <Button>
                        <svg
                          viewBox="0 0 24 24"
                          style={{
                            height: "18.75px",
                          }}
                        >
                          <g>
                            <path d="M19.39 14.882c-1.58 0-2.862-1.283-2.862-2.86s1.283-2.862 2.86-2.862 2.862 1.283 2.862 2.86-1.284 2.862-2.86 2.862zm0-4.223c-.75 0-1.362.61-1.362 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36zM12 14.882c-1.578 0-2.86-1.283-2.86-2.86S10.42 9.158 12 9.158s2.86 1.282 2.86 2.86S13.578 14.88 12 14.88zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.362 1.36 1.362 1.36-.61 1.36-1.36-.61-1.363-1.36-1.363zm-7.39 4.223c-1.577 0-2.86-1.283-2.86-2.86S3.034 9.16 4.61 9.16s2.862 1.283 2.862 2.86-1.283 2.862-2.86 2.862zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36z" />
                          </g>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  className={classes.tItem}
                  style={{
                    borderBottom: "1px solid rgb(235, 238, 240)",
                    outlineStyle: "none",
                    display: "block",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "space-between",
                      padding: "10px 15px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      <div
                        className={classes.columnar}
                        style={{ marginRight: "10px" }}
                      >
                        <Typography
                          variant="body1"
                          style={{
                            flex: "1",
                            display: "flex",
                            color: "rgb(91, 112, 131)",
                            lineHeight: "19.68px",
                            fontWeight: "400",
                            fontSize: "13px",
                          }}
                        >
                          <span>MLBCOVID-19</span> <span> · </span>
                          <span> 5 hours ago</span>
                        </Typography>
                        <Typography
                          variant="h6"
                          style={{
                            margin: "2px 0",
                            fontWeight: "800px",
                            fontSize: "15px",
                          }}
                        >
                          Padres reach deal to acquire Blake Snell from the
                          Rays, ESPN reports
                        </Typography>
                        <Typography
                          variant="caption"
                          style={{
                            marginTop: "5px",
                            flex: "1",
                            display: "flex",
                            color: "rgb(91, 112, 131)",
                            lineHeight: "19.6875px",
                            fontWeight: "400",
                            fontSize: "13px",
                          }}
                        >
                          <span>Trending with </span>
                          <span className={classes.blueLink}>
                            _NL West, Blake Snell
                          </span>
                        </Typography>
                      </div>
                      <div>
                        <div
                          style={{
                            width: "69px",
                            height: "69px",
                            backgroundColor: "grey",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={classes.tItem}
                  style={{
                    outlineStyle: "none",
                    display: "block",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "space-between",
                      padding: "10px 15px",
                    }}
                  >
                    <span className={classes.blueLink}>Show more</span>
                  </div>
                </div>
              </section>
            </div>

            {/* Who To Follow */}
            <div
              className={classes.columnar}
              style={{
                marginBottom: "15px",
                backgroundColor: "rgb(247, 249, 250)",
                borderColor: "rgb(247, 249, 250)",
                borderRadius: "16px",
                overflow: "hidden",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <section role="region" className={classes.columnar}>
                <div className={classes.columnar}>
                  <div
                    style={{
                      borderBottom: "1px solid rgb(235, 238, 240)",
                      outlineStyle: "none",
                      display: "block",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "space-between",
                        padding: "10px 15px",
                      }}
                    >
                      <Typography
                        variant="h2"
                        style={{
                          fontWeight: "800",
                          overflowWrap: "break-word",
                          lineHeight: "1.3125",
                          fontSize: "19px",
                        }}
                      >
                        Who to follow
                      </Typography>
                    </div>
                  </div>
                  <div
                    className={classes.tItem}
                    style={{
                      flex: "1",
                      borderBottom: "1px solid rgb(235, 238, 240)",
                      outlineStyle: "none",
                      display: "block",
                    }}
                  >
                    <div
                      style={{
                        flex: "1",
                        justifyContent: "space-between",
                        padding: "10px 15px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Avatar />
                        <div
                          className={classes.columnar}
                          style={{ flex: "1", marginRight: "10px" }}
                        >
                          <div
                            className={classes.columnar}
                            style={{ marginRight: "10px", marginLeft: "10px" }}
                          >
                            <Typography
                              style={{
                                flex: "1",
                                display: "flex",
                                lineHeight: "1.3125",
                                fontWeight: "700",
                                fontSize: "15px",
                                overflowWrap: "break-word",
                              }}
                            >
                              <span>Huawei</span>
                            </Typography>
                            <Typography
                              style={{
                                color: "rgb(91, 112, 131)",
                                fontWeight: "400",
                                fontSize: "15px",
                                overflowWrap: "break-word",
                              }}
                            >
                              <span>@Huawei</span>
                            </Typography>
                            <div style={{ marginTop: "5px", display: "flex" }}>
                              <svg
                                viewBox="0 0 24 24"
                                style={{
                                  height: "15px",
                                  marginRight: "5px",
                                  color: "rgb(91, 112, 131)",
                                  fill: "rgb(91, 112, 131)",
                                }}
                              >
                                <g>
                                  <path d="M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z" />
                                </g>
                              </svg>
                              <Typography
                                style={{
                                  fontSize: "13px",
                                  fontWeight: "400",
                                  color: "rgb(91, 112, 131)",
                                }}
                              >
                                <span>Promoted</span>
                              </Typography>
                            </div>
                          </div>
                        </div>
                        <div>
                          <Button variant="outline" noPadding>
                            <span
                              style={{
                                height: "30px",
                                margin: "0 1em",
                                verticalAlign: "center",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              Follow
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={classes.tItem}
                  style={{
                    flex: "1",
                    borderBottom: "1px solid rgb(235, 238, 240)",
                    outlineStyle: "none",
                    display: "block",
                  }}
                >
                  <div
                    style={{
                      flex: "1",
                      justifyContent: "space-between",
                      padding: "10px 15px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Avatar />
                      <div
                        className={classes.columnar}
                        style={{ flex: "1", marginRight: "10px" }}
                      >
                        <div
                          className={classes.columnar}
                          style={{ marginRight: "10px", marginLeft: "10px" }}
                        >
                          <Typography
                            style={{
                              flex: "1",
                              display: "flex",
                              lineHeight: "1.3125",
                              fontWeight: "700",
                              fontSize: "15px",
                              overflowWrap: "break-word",
                            }}
                          >
                            <span>Jayde Pierce</span>
                          </Typography>
                          <Typography
                            style={{
                              color: "rgb(91, 112, 131)",
                              fontWeight: "400",
                              fontSize: "15px",
                              overflowWrap: "break-word",
                            }}
                          >
                            <span>@JaydePierce</span>
                          </Typography>
                        </div>
                      </div>
                      <div>
                        <Button variant="outline" noPadding>
                          <span
                            style={{
                              height: "30px",
                              margin: "0 1em",
                              verticalAlign: "center",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Follow
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={classes.tItem}
                  style={{
                    flex: "1",
                    borderBottom: "1px solid rgb(235, 238, 240)",
                    outlineStyle: "none",
                    display: "block",
                  }}
                >
                  <div
                    style={{
                      flex: "1",
                      justifyContent: "space-between",
                      padding: "10px 15px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Avatar />
                      <div
                        className={classes.columnar}
                        style={{ flex: "1", marginRight: "10px" }}
                      >
                        <div
                          className={classes.columnar}
                          style={{ marginRight: "10px", marginLeft: "10px" }}
                        >
                          <Typography
                            style={{
                              flex: "1",
                              display: "flex",
                              lineHeight: "1.3125",
                              fontWeight: "700",
                              fontSize: "15px",
                              overflowWrap: "break-word",
                            }}
                          >
                            <span>Ayuba Olashile</span>
                          </Typography>
                          <Typography
                            style={{
                              color: "rgb(91, 112, 131)",
                              fontWeight: "400",
                              fontSize: "15px",
                              overflowWrap: "break-word",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span>@wealthm...</span>
                            <span
                              style={{
                                marginLeft: "5px",
                                padding: "0 5px",
                                lineHeight: "19.687px",
                                fontSize: "13px",
                                backgroundColor: "rgba(0, 0, 0, 0.1)",
                                borderRadius: "4px",
                                fontWeight: "400",
                              }}
                            >
                              Follows you
                            </span>
                          </Typography>
                        </div>
                      </div>
                      <div>
                        <Button variant="outline" noPadding>
                          <span
                            style={{
                              height: "30px",
                              margin: "0 1em",
                              verticalAlign: "center",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Follow
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={classes.tItem}
                  style={{
                    outlineStyle: "none",
                    display: "block",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "space-between",
                      padding: "10px 15px",
                    }}
                  >
                    <span className={classes.blueLink}>Show more</span>
                  </div>
                </div>
              </section>
            </div>
            {/* nav */}
            <div style={{ marginBottom: "15px" }}>
              <nav
                style={{ flexWrap: "wrap", display: "flex", padding: "0 15px" }}
              >
                <a
                  className={classes.greyLink}
                  style={{ paddingRight: "10px" }}
                >
                  Terms of Service
                </a>
                <a
                  className={classes.greyLink}
                  style={{ paddingRight: "10px" }}
                >
                  Privacy Policy
                </a>
                <a
                  className={classes.greyLink}
                  style={{ paddingRight: "10px" }}
                >
                  Cookie Policy
                </a>
                <a
                  className={classes.greyLink}
                  style={{ paddingRight: "10px" }}
                >
                  Ads info
                </a>
                <a
                  className={classes.greyLink}
                  style={{ paddingRight: "10px" }}
                >
                  More{" "}
                  <svg
                    viewBox="0 0 24 24"
                    style={{ height: "1em", fill: "currentcolor" }}
                  >
                    <g>
                      <path d="M19.39 14.882c-1.58 0-2.862-1.283-2.862-2.86s1.283-2.862 2.86-2.862 2.862 1.283 2.862 2.86-1.284 2.862-2.86 2.862zm0-4.223c-.75 0-1.362.61-1.362 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36zM12 14.882c-1.578 0-2.86-1.283-2.86-2.86S10.42 9.158 12 9.158s2.86 1.282 2.86 2.86S13.578 14.88 12 14.88zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.362 1.36 1.362 1.36-.61 1.36-1.36-.61-1.363-1.36-1.363zm-7.39 4.223c-1.577 0-2.86-1.283-2.86-2.86S3.034 9.16 4.61 9.16s2.862 1.283 2.862 2.86-1.283 2.862-2.86 2.862zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36z" />
                    </g>
                  </svg>
                </a>
                <a
                  style={{
                    marginTop: "2px",
                    marginBottom: "2px",
                    paddingRight: "10px",
                    fontSize: "13px",
                    color: "rgb(91, 112, 131)",
                    lineHeight: "19.6875px",
                  }}
                >
                  © 2020 Twitter, Inc
                </a>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Homepage;
