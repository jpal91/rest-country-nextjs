import { useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../../assets/theme";
import darkTheme from "../../assets/theme-dark";
import ThemeContext from "../../helpers/themecontext";

//since I needed to access the context of the ThemeContextProvider
//I had to create a "dummy" component that only outputs the ThemeProvider from MUI
//this way I can access the context object I created and pass the info to the
//ThemeProvider (see _app.js page)
const ThemeParent = (props) => {
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkMode ? darkTheme : theme;

  return <ThemeProvider theme={currentTheme}>{props.children}</ThemeProvider>;
};

export default ThemeParent;
