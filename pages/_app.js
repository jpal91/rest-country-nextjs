import React from 'react'
import Head from 'next/head'
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
        <React.Fragment>
        <Head>
            <title>Where in the World?</title>
        </Head>
        <ThemeContextProvider>
            <ThemeParent>
                <CssBaseline />
                <Container
                    fluid='true'
                    sx={{
                        width: { xs: '100%', lg: 1200 },
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
        </React.Fragment>
    );
}

export default MyApp;
