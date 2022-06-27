import { useEffect, useContext } from 'react'
import { useRouter } from "next/router";
import axios from "axios";
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'

import { getData } from '../../helpers/dataobj';
import SearchBar from "../../components/search-filter/SearchBar";
import FilterMenu from '../../components/search-filter/FilterMenu'
import CountryCardContainer from "../../components/card/CountryCardContainer";
import LoadingContext from '../../helpers/loadingcontext';

//path responds based on selected filter region
const FilteredRegion = (props) => {
    const router = useRouter()
    const loadingCtx = useContext(LoadingContext)
    const { regionid } = router.query
    
    const { countryInfo } = props

    //makes sure loading state is turned off
    useEffect(() => {
        if (!loadingCtx.loading) {
            return
        }

        loadingCtx.changeLoadingState()
    }, [regionid])

    if (!countryInfo) {
        return <p>Loading...</p>
    }

    //if path hasn't been generated per getStaticPaths, will extend loading state
    //while new page is generated 
    if (router.isFallback) {
        return <CircularProgress sx={{ fontSize: 100, zIndex: 1000, color: 'primary.text' }}/>
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
                <FilterMenu selectedRegion={regionid}/>
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
}

//pre-generates the paths for the specific regions
//since these are set, static generation seemed like a good choice
export const getStaticProps = async (context) => {
    const regionID = context.params.regionid
    const response = await axios.get(`https://restcountries.com/v3.1/region/${regionID}`)
    const { data } = response

    if (!data) {
        return {
            notFound: true
        }
    }

    const countryInfo = getData(data)

    return {
        props: {
            countryInfo: countryInfo
        },
        revalidate: 3600
    }
}

//paths are pre-set since they will not change, making static generation easy for this case
export const getStaticPaths = () => {
    const pathList = ['Africa','Americas','Asia','Europe','Oceania']

    const paths = pathList.map((p) => {
        return {
            params: { regionid: p }
        }
    })

    return {
        paths: paths,
        fallback: true
    }
}

export default FilteredRegion