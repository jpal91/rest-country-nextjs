import { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from "@mui/material/Grid";
import useSWR from 'swr'

import { getData } from '../helpers/dataobj';
import SearchBar from "../components/search-filter/SearchBar";
import FilterMenu from "../components/search-filter/FilterMenu";
import CountryCard from "../components/card/CountryCard";
import CountryCardContainer from '../components/card/CountryCardContainer';

const HomePage = (props) => {
    const { countryInfo } = props
    // const [countryData, setCountryData] = useState(countryInfo)
    // const fetcher = (url) => axios.get(url).then((res) => res.data)
    // const { data, error } = useSWR('https://restcountries.com/v3.1/all', fetcher)

    // useEffect(() => {
    //     if (data) {
    //         const countryInfo = getData(data)
    //         setCountryData(countryInfo)
    //         return
    //     }
    // }, [data])

    // if (!data || error) {
    //     return <p>Loading...</p>
    // }

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
                <FilterMenu />
            </Grid>
            <Grid
                container
                item
                xs={12}
                sx={{ width: '100%', mt: 5}}
            >
                <CountryCardContainer countryInfo={countryInfo} />
            </Grid>
        </Grid>
    );
};

export const getStaticProps = async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all')
    const { data } = response

    if (!data) {
        return {
            notFound: true,
        }
    }

    const countryInfo = getData(data)
    const preRendCountryInfo = countryInfo.slice(0, 30)

    return {
        props: {
            countryInfo: preRendCountryInfo
        }
    }
}


export default HomePage;
