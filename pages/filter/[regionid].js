import { useRouter } from "next/router";
import axios from "axios";
import Grid from '@mui/material/Grid'

import { getData } from '../../helpers/dataobj';
import SearchBar from "../../components/search-filter/SearchBar";
import FilterMenu from '../../components/search-filter/FilterMenu'
import CountryCardContainer from "../../components/card/CountryCardContainer";

const FilteredRegion = (props) => {
    const router = useRouter()
    const { regionid } = router.query
    
    const { countryInfo } = props

    if (!countryInfo) {
        return <p>Loading...</p>
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