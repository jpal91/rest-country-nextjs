import React, { useContext } from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from 'next/router'
import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";

import { getDetailedData } from "../../helpers/dataobj";
import CountryDetail from "../../components/CountryDetail";
import LoadingContext from "../../helpers/loadingcontext";

//shows specific country card that is clicked on and outputs details for chosen path
const ShowCountry = (props) => {
    const router = useRouter()
    const loadingCtx = useContext(LoadingContext);
    const { countryInfo } = props;

    if (!countryInfo) {
        return <p>Loading...</p>;
    }

    if (router.isFallback) {
        return <p>Loading...</p>;
    }

    const handleGoBack = () => {
        loadingCtx.changeLoadingState();
        router.back();
    };

    return (
        <React.Fragment>
            <Head>
                <title>{`${countryInfo.name}`}</title>
                <meta name='description' content={`Information about ${countryInfo.name}`} />
            </Head>
            <Grid
                container
                sx={{
                    width: "100%",
                    maxWidth: 1440,
                    alignItems: "center",
                    p: { xs: 0, lg: 2 },
                    mt: 5,
                }}
            >
                <Grid
                    item
                    xs={12}
                    sx={{ justifyContent: "flex-start", ml: { xs: 2, lg: 0 } }}
                >
                    <Paper sx={{ backgroundColor: "background.secondary" }}>
                        <Button variant="outlined" onClick={handleGoBack}>
                            <ArrowBackIcon
                                fontSize="small"
                                sx={{ mr: 1, color: "primary.text" }}
                            />
                            <Typography sx={{ color: "primary.text" }}>
                                Back
                            </Typography>
                        </Button>
                    </Paper>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    sx={{
                        flexDirection: { xs: "column", lg: "row" },
                        flexWrap: { xs: "nowrap", lg: "wrap" },
                        mt: 5,
                    }}
                >
                    <Grid item xs={12} lg={6}>
                        <Box sx={{ width: "100%" }}>
                            <Image
                                src={countryInfo.image}
                                layout="responsive"
                                priority="true"
                                width={400}
                                height={300}
                                alt={`Flag of ${countryInfo.name}`}
                            />
                        </Box>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        lg={6}
                        sx={{
                            p: 5,
                            justifyContent: "flex-start",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            alignItems: "flex-start",
                        }}
                    >
                        <CountryDetail countryInfo={countryInfo} />
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

//see notes below for getStaticPaths
export const getStaticProps = async (context) => {
    const { params } = context;
    const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${params.countryid}`
    );
    const { data, error } = response;

    if (!data || error) {
        return {
            notFound: true,
        };
    }

    let formattedData = getDetailedData(data[0]);

    return {
        props: {
            countryInfo: formattedData,
        },
    };
};

//pre-generates the first 30 countries that would appear on the main page so these
//will load quickly if clicked
//obviously not enough data on most chosen countries, so went with this as it's the most
//logical for now
export const getStaticPaths = async () => {
    const response = await axios.get(`https://restcountries.com/v3.1/all`);
    const { data } = response;

    const paramMap = data.slice(0, 30).map((p) => {
        return {
            params: { countryid: p.cca3 },
        };
    });
    return {
        paths: [...paramMap, { params: { countryid: "usa" } }],
        fallback: true,
    };
};

export default ShowCountry;
