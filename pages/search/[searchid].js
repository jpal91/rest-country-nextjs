import { useState, useEffect, useContext } from 'react'
import axios from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";
import Grid from '@mui/material/Grid'

import { getData } from '../../helpers/dataobj';
import SearchBar from '../../components/search-filter/SearchBar';
import FilterMenu from '../../components/search-filter/FilterMenu';
import CountryCardContainer from '../../components/card/CountryCardContainer';
import LoadingContext from '../../helpers/loadingcontext';

const SearchCountry = () => {
    const router = useRouter()
    const { searchid } = router.query
    const [countryData, setCountryData] = useState([])
    //const [loading, setLoading] = useState(true)
    const loadingCtx = useContext(LoadingContext)
    const fetcher = (url) => axios.get(url).then((res) => res.data)
    const { data, error } = useSWR(`https://restcountries.com/v3.1/name/${searchid}`, fetcher)
    
    useEffect(() => {
        loadingCtx.changeLoadingState()
    }, [searchid])

    useEffect(() => {
        if (!data || error) {
            return
        }

        setCountryData(getData(data))
        //setLoading(false)
    }, [data])

    if (error) {
        return <p>There was an issue</p>
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
                <FilterMenu selectedRegion={''}/>
            </Grid>
            <Grid
                container
                item
                xs={12}
                sx={{ width: '100%', mt: 5}}
            >
                {loadingCtx.loading ? <p>Loading...</p> : <CountryCardContainer countryInfo={countryData} />}
            </Grid>
        </Grid>
    );
}

export default SearchCountry