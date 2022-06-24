import axios from 'axios'
import Grid from "@mui/material/Grid";

import SearchBar from "../components/search-filter/SearchBar";
import FilterMenu from "../components/search-filter/FilterMenu";
import CountryCard from "../components/card/CountryCard";
import CountryCardContainer from '../components/card/CountryCardContainer';

const HomePage = (props) => {
    const { countryInfo } = props
    
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

    const countryInfo = []

    data.forEach((d) => {
        let obj = {
            image: '',
            pop: 0,
            region: '',
            capital: '',
            name: ''
        }
        
        obj.image = d.flags.svg || null
        obj.pop = d.population || 0
        obj.region = d.region || null
        obj.capital = d.capital || null
        obj.name = d.name.official || null

        countryInfo.push(obj)
    })

    return {
        props: {
            countryInfo: countryInfo
        }
    }
}

export default HomePage;
