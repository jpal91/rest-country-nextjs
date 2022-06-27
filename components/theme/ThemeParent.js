import { useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../../assets/theme";
import darkTheme from "../../assets/theme-dark";
import ThemeContext from "../../helpers/themecontext";


const ThemeParent = (props) => {
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkMode ? darkTheme : theme;

  return <ThemeProvider theme={currentTheme}>{props.children}</ThemeProvider>;
};

export default ThemeParent;
