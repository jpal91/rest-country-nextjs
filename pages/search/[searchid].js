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
import CircularProgress from '@mui/material/CircularProgress';


//when a keyword is searched, user is routed to this page
const SearchCountry = () => {
    const router = useRouter()
    const { searchid } = router.query
    const [countryData, setCountryData] = useState([])
    const loadingCtx = useContext(LoadingContext)

    //pulls data based on the specific keyword searched instead of static generated content
    const fetcher = (url) => axios.get(url).then((res) => res.data)
    const { data, error } = useSWR(`https://restcountries.com/v3.1/name/${searchid}`, fetcher)
    
    //makes sure "loading" state is turned off once new data
    //arrives on page
    useEffect(() => {
        if (!loadingCtx.loading) {
            return
        }

        loadingCtx.changeLoadingState()
    }, [countryData])

    //sets the data to local state to help tracking loading above and 
    //also rendering the new data below
    useEffect(() => {
        if (!data || error) {
            return
        }

        setCountryData(getData(data))
    }, [data])

    if (error) {
        return <p>There was an issue</p>
    }

    //render is essentially same as HomePage but filtered for search term
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
                {loadingCtx.loading ? <CircularProgress sx={{ zIndex: 1000, fontSize: 100, color: 'primary.text' }}/> : <CountryCardContainer countryInfo={countryData} />}
            </Grid>
        </Grid>
    );
}

export default SearchCountry