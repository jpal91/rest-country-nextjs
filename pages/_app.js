import { CssBaseline } from "@mui/material";
import { ThemeContextProvider } from "../helpers/context";
import Container from "@mui/material/Container";

import ThemeParent from "../components/theme/ThemeParent";
import NavBar from "../components/navbar";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeContextProvider>
            <ThemeParent>
                <CssBaseline />
                <Container
                    fluid
                    sx={{
                        width: "100%",
                        flexDirection: "column",
                        m: "auto",
                        p: 0,
                    }}
                >
                    <NavBar />
                    <Component {...pageProps} />
                </Container>
            </ThemeParent>
        </ThemeContextProvider>
    );
}

export default MyApp;
