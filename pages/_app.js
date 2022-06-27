import { CssBaseline } from "@mui/material";
import { ThemeContextProvider } from "../helpers/themecontext";
import Container from "@mui/material/Container";

import ThemeParent from "../components/theme/ThemeParent";
import NavBar from "../components/navbar";
import { LoadingContextProvider } from '../helpers/loadingcontext';

function MyApp({ Component, pageProps }) {
    
    //two separate contexts are passed here
    //ThemeContext is pertaining to switching between light/dark theme
    //LoadingContext controls showing loading spinner or not
    return (
        <ThemeContextProvider>
            <ThemeParent>
                <CssBaseline />
                <Container
                    fluid='true'
                    sx={{
                        width: "100%",
                        flexDirection: "column",
                        m: "auto",
                        p: 0,
                    }}
                >
                    <NavBar />
                    <LoadingContextProvider>
                        <Component {...pageProps} />
                    </LoadingContextProvider>
                </Container>
            </ThemeParent>
        </ThemeContextProvider>
    );
}

export default MyApp;
