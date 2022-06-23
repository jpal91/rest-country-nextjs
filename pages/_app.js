import { CssBaseline } from "@mui/material";

import { ThemeContextProvider } from "../helpers/context";
import ThemeParent from "../components/theme/ThemeParent";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <ThemeParent>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeParent>
    </ThemeContextProvider>
  );
}

export default MyApp;
