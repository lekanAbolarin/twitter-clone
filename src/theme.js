import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const legacyBackground = "#e7eff6";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1da1f2",
    },
    secondary: {
      main: "#ffffff",
    },
    error: {
      main: "#ff3333",
    },
    text: {
      primary: "#152025",
      secondary: "#5b7079",
    },
    background: {
      paper: "#ffffff",
      default: "#ffffff",
    },
  },
  typography: {
    h1: {
      // marginBottom: "30px",
      // fontFamily: "Display",
    },
    h2: {
      // marginBottom: "20px",
      // fontFamily: "Display",
    },
    h3: {
      // marginBottom: "20px",
      // fontFamily: "Display",
    },
    h4: {
      // marginBottom: "20px",
      // fontFamily: "Display",
    },
    h5: {
      // marginBottom: "20px",
      // fontFamily: "Display",
    },
    h6: {
      // marginBottom: "20px",
      // fontFamily: "Display",
      fontSize: "19px",
      fontWeight: "700",
      lineHeight: "1.3125",
    },
    subtitle1: {
      // marginBottom: "20px",
      // fontFamily: "Typ",
    },
    subtitle2: {
      // marginBottom: "20px",
      // fontFamily: "Typ",
    },
    body1: {
      // marginBottom: "20px",
      // fontFamily: "Typ",
    },
    body2: {
      // marginBottom: "20px",
      // fontFamily: "Typ",
    },
    button: {
      // fontFamily: "Typ",
    },
    caption: {
      // marginBottom: "20px",
      // fontFamily: "Typ",
    },
    overline: {
      // fontFamily: 'Typ',
    },
  },
});

export default theme;
