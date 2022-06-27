import { useContext } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";

import { getData } from "../helpers/dataobj";
import SearchBar from "../components/search-filter/SearchBar";
import FilterMenu from "../components/search-filter/FilterMenu";
import CountryCardContainer from "../components/card/CountryCardContainer";
import LoadingContext from "../helpers/loadingcontext";
import CircularProgress from "@mui/material/CircularProgress";

//main page where all countries are listed
//starting point to all other sub-components
const HomePage = (props) => {
    const { countryInfo } = props;
    const loadingCtx = useContext(LoadingContext);

    //returns the grid or a loading state based on the LoadingContext
    //LC is controlled by lower components
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
            <Grid
                container
                item
                xs={12}
                sx={{
                    flexDirection: { xs: "column", lg: "row" },
                    width: "100%",
                }}
            >
                <SearchBar />
                <FilterMenu selectedRegion={""} />
            </Grid>
            <Grid container item xs={12} sx={{ width: "100%", mt: 5 }}>
                {loadingCtx.loading ? (
                    <CircularProgress
                        sx={{
                            zIndex: 1000,
                            fontSize: 100,
                            color: "primary.text",
                        }}
                    />
                ) : (
                    <CountryCardContainer countryInfo={countryInfo} />
                )}
            </Grid>
        </Grid>
    );
};

export const getStaticProps = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const { data } = response;

    if (!data) {
        return {
            notFound: true,
        };
    }

    const countryInfo = getData(data);

    return {
        props: {
            countryInfo: countryInfo,
        },
    };
};

export default HomePage;
