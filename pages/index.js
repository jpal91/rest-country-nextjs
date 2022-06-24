import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavBar from "../components/navbar";

import SearchBar from "../components/search-filter/SearchBar";
import FilterMenu from "../components/search-filter/FilterMenu";

const HomePage = () => {
    return (

            <Grid
                container
                sx={{
                    width: "100%",
                    maxWidth: 1440,
                    alignItems: "center",
                    p: { xs: 0, lg: 2 },
					mt: 5
                }}
            >
				<Grid container item xs={12} sx={{ flexDirection: { xs: 'column', lg: 'row' }, width: '100%'}}>
					<SearchBar />
					<FilterMenu />
				</Grid>
				
			</Grid>

    );
};

export default HomePage;
