import { ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";

import theme from "../assets";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
