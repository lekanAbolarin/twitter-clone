import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "../components/Button";
import Avatar from "@material-ui/core/Avatar";
import Nav from "./Nav";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: "100%",
    flexGrow: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
    position: "static",
    zIndex: "3",
  },
  twitterIcon: {
    width: "47px",
    height: "47px",
    margin: "1px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&>svg": {
      width: "47px",
      height: "30px",
      fill: theme.palette.primary.main,
    },
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    "&>a": {
      padding: "7px 0",
    },
  },
  mobileHeader: {
    width: "100%",
    height: "54px",
    position: "relative",
    zIndex: "3",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [activePath, setActivePath] = useState("index");
  const [drawerVisibility, setDrawerVisibility] = useState(false);
  const activeStyle = {
    display: "flex",
    color: theme.palette.primary.main,
    fill: theme.palette.primary.main,
  };

  useEffect(() => {}, []);

  return !isMobile ? (
    <header className={classes.header}>
      <div style={{ width: "276px", height: "100%" }}>
        <div
          style={{
            height: "100%",
            padding: "0 10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Button variant="icon">
              <Typography variant="h6">
                <a href="/">
                  <div className={classes.twitterIcon}>
                    <svg viewBox="0 0 24 24">
                      <g>
                        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                      </g>
                    </svg>
                  </div>
                </a>
              </Typography>
            </Button>
            <nav className={classes.nav}>
              <a>
                <Button>
                  <div
                    style={
                      activePath === "index"
                        ? activeStyle
                        : { display: "flex", color: "inherit" }
                    }
                  >
                    <svg style={{ width: "24px", height: "26.25px" }}>
                      <g>
                        <path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z" />
                      </g>
                    </svg>
                  </div>
                  <div
                    style={
                      activePath === "index"
                        ? activeStyle
                        : { display: "flex", color: "inherit" }
                    }
                  >
                    <Typography
                      variant="h6"
                      color="inherit"
                      style={{ height: "26.25px", margin: "0 15px 0 20px" }}
                    >
                      Home
                    </Typography>
                  </div>
                </Button>
              </a>
              <a>
                <Button>
                  <div
                    style={
                      activePath === "explore"
                        ? activeStyle
                        : { color: "inherit" }
                    }
                  >
                    <svg style={{ width: "26.25px", height: "26.25px" }}>
                      <g>
                        <path d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z" />
                      </g>
                    </svg>
                  </div>
                  <div
                    style={
                      activePath === "explore"
                        ? activeStyle
                        : { display: "flex", color: "inherit" }
                    }
                  >
                    <Typography
                      variant="h6"
                      color="inherit"
                      style={{ height: "24px", margin: "0 15px 0 20px" }}
                    >
                      Explore
                    </Typography>
                  </div>
                </Button>
              </a>
              <a>
                <Button>
                  <div
                    style={
                      activePath === "notifications"
                        ? activeStyle
                        : { display: "flex", color: "inherit" }
                    }
                  >
                    <svg style={{ width: "26.25px", height: "26.25px" }}>
                      <g>
                        <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z" />{" "}
                      </g>
                    </svg>
                  </div>
                  <div
                    style={
                      activePath === "notifications"
                        ? activeStyle
                        : { display: "flex", color: "inherit" }
                    }
                  >
                    <Typography
                      variant="h6"
                      color="inherit"
                      style={{ height: "24px", margin: "0 15px 0 20px" }}
                    >
                      Notifications
                    </Typography>
                  </div>
                </Button>
              </a>
              <a>
                <Button>
                  <div
                    style={
                      activePath === "messages"
                        ? activeStyle
                        : { display: "flex", color: "inherit" }
                    }
                  >
                    <svg style={{ width: "26.25px", height: "26.25px" }}>
                      <g>
                        <path d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z" />
                      </g>
                    </svg>
                  </div>
                  <div
                    style={
                      activePath === "messages"
                        ? activeStyle
                        : { display: "flex", color: "inherit" }
                    }
                  >
                    <Typography
                      variant="h6"
                      color="inherit"
                      style={{ height: "24px", margin: "0 15px 0 20px" }}
                    >
                      Messages
                    </Typography>
                  </div>
                </Button>
              </a>
              <a>
                <Button>
                  <div
                    style={
                      activePath === "bookmarks"
                        ? activeStyle
                        : { display: "flex", color: "inherit" }
                    }
                  >
                    <svg style={{ width: "26.25px", height: "26.25px" }}>
                      <g>
                        <path d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z" />
                      </g>
                    </svg>
                  </div>
                  <div
                    style={
                      activePath === "bookmarks"
                        ? activeStyle
                        : { display: "flex", color: "inherit" }
                    }
                  >
                    <Typography
                      variant="h6"
                      color="inherit"
                      style={{ height: "24px", margin: "0 15px 0 20px" }}
                    >
                      Bookmarks
                    </Typography>
                  </div>
                </Button>
              </a>
              <a>
                <Button>
                  <div
                    style={
                      activePath === "lists"
                        ? activeStyle
                        : { display: "flex", color: "inherit" }
                    }
                  >
                    <svg style={{ width: "26.25px", height: "26.25px" }}>
                      <g>
                        <path d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z" />
                        <path d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z" />
                      </g>
                    </svg>
                  </div>
                  <div
                    style={
                      activePath === "lists"
                        ? activeStyle
                        : { display: "flex", color: "inherit" }
                    }
                  >
                    <Typography
                      variant="h6"
                      color="inherit"
                      style={{ height: "24px", margin: "0 15px 0 20px" }}
                    >
                      Lists
                    </Typography>
                  </div>
                </Button>
              </a>
              <a>
                <Button>
                  <div
                    style={
                      activePath === "profile"
                        ? activeStyle
                        : { display: "flex", color: "inherit" }
                    }
                  >
                    <svg style={{ width: "26.25px", height: "26.25px" }}>
                      <g>
                        <path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z" />
                      </g>
                    </svg>
                  </div>
                  <div
                    style={
                      activePath === "profile"
                        ? activeStyle
                        : { color: "inherit" }
                    }
                  >
                    <Typography
                      variant="h6"
                      color="inherit"
                      style={{
                        display: "flex",
                        height: "24px",
                        margin: "0 15px 0 20px",
                      }}
                    >
                      Profile
                    </Typography>
                  </div>
                </Button>
              </a>
              <a>
                <Button>
                  <div
                    style={
                      activePath === "more"
                        ? activeStyle
                        : { display: "flex", color: "inherit" }
                    }
                  >
                    <svg style={{ width: "26.25px", height: "26.25px" }}>
                      <g>
                        <path d="M16.5 10.25c-.965 0-1.75.787-1.75 1.75s.784 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.786-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.966 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75 1.75-.786 1.75-1.75-.784-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.965 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.787-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75z" />
                        <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z" />
                      </g>
                    </svg>
                  </div>
                  <div
                    style={
                      activePath === "more" ? activeStyle : { color: "inherit" }
                    }
                  >
                    <Typography
                      variant="h6"
                      color="inherit"
                      style={{ height: "24px", margin: "0 15px 0 20px" }}
                    >
                      More
                    </Typography>
                  </div>
                </Button>
              </a>
            </nav>
            <div
              style={{
                width: "90%",
                margin: "15px 0",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button variant="filled" noPadding>
                <a
                  style={{
                    minWidth: "100%",
                    minHeight: "49px",
                    padding: "0 30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <Typography variant="body1" align="center">
                    Tweet
                  </Typography>
                </a>
              </Button>
            </div>
          </div>
          <div
            style={{
              margin: "10px 0",
            }}
          >
            <Button>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                  fill: "black",
                }}
              >
                <Avatar style={{ width: "39px", height: "39px" }} />
                <div>
                  <div
                    style={{
                      padding: "0px 10px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h6"
                      style={{ fontSize: "15px", fontWeight: "700" }}
                    >
                      MikeIdeal
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="caption"
                      style={{ fontSize: "15px", lineHeight: "1.3125" }}
                    >
                      @micolekz
                    </Typography>
                  </div>
                </div>
                <div
                  style={{
                    flexGrow: "1",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    style={{ color: "rgb(15, 20, 15)" }}
                    height="1.25rem"
                  >
                    <g>
                      <path d="M19.39 14.882c-1.58 0-2.862-1.283-2.862-2.86s1.283-2.862 2.86-2.862 2.862 1.283 2.862 2.86-1.284 2.862-2.86 2.862zm0-4.223c-.75 0-1.362.61-1.362 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36zM12 14.882c-1.578 0-2.86-1.283-2.86-2.86S10.42 9.158 12 9.158s2.86 1.282 2.86 2.86S13.578 14.88 12 14.88zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.362 1.36 1.362 1.36-.61 1.36-1.36-.61-1.363-1.36-1.363zm-7.39 4.223c-1.577 0-2.86-1.283-2.86-2.86S3.034 9.16 4.61 9.16s2.862 1.283 2.862 2.86-1.283 2.862-2.86 2.862zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36z" />
                    </g>
                  </svg>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  ) : (
    <header className={classes.mobileHeader}>
      <div style={{ width: "100%", height: "54px" }} />
      <div
        style={{
          width: "100%",
          height: "54px",
          zIndex: "2",
          position: "fixed",
          top: "0.5px",
          left: "0",
          borderBottom: "1px solid rgb(196, 207, 214)",
        }}
      >
        <div
          style={{
            height: "100%",
            padding: "0 15px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div onClick={() => setDrawerVisibility(!drawerVisibility)}>
            <Avatar
              style={{ width: "30px", height: "30px", marginRight: "29px" }}
            />
          </div>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            {activePath === "index" ? "Home" : activePath}
          </Typography>
          <div style={{ width: "37px", marginLeft: "20px" }}>
            <Button variant="icon" noPadding>
              <div
                style={{
                  width: "37px",
                  height: "37px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="1.5em"
                  height="1.5em"
                  style={{
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
      </div>
      <Nav
        drawerVisibility={drawerVisibility}
        setDrawerVisibility={setDrawerVisibility}
        activePath={activePath}
        setActivePath={setActivePath}
      />
    </header>
  );
};

export default Header;
