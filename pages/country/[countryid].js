import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { getDetailedData } from "../../helpers/dataobj";
import CountryDetail from "../../components/CountryDetail";

const ShowCountry = (props) => {
    const router = useRouter()
    
    const { countryInfo } = props;

    if (!countryInfo) {
        return <p>Loading...</p>;
    }

    if (router.isFallback) {
        return <p>Loading...</p>
    }

    return (
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
            <Grid item xs={12} sx={{ justifyContent: "flex-start" }}>
                <Paper>
                    <Button variant="outlined" onClick={() => router.back()}>
                        <ArrowBackIcon fontSize="small" sx={{ mr: 1 }} />
                        Back
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
                    mt: 5
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
    );
};

export const getStaticProps = async (context) => {
    const { params } = context;
    const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${params.countryid}`
    );
    const { data } = response;

    if (!data) {
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

export const getStaticPaths = async () => {
    return {
        paths: [{ params: { countryid: "usa" } }],
        fallback: true,
    };
};

export default ShowCountry;
