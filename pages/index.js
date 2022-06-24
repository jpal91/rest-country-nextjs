import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavBar from "../components/navbar";

import SearchBar from "../components/search-filter/SearchBar";

const HomePage = () => {
    return (
        <Container fluid sx={{ width: "100%", flexDirection: 'column', m: 'auto', p: 0 }}>
            <NavBar />
            <Grid
                container
                sx={{
                    width: "100%",
                    maxWidth: 1440,
                    alignItems: "center",
                    p: 2,
					mt: 5
                }}
            >
				<Grid container item xs={12}>
					<SearchBar />
					<Grid item xs={6} lg={6}>
						
					</Grid>
				</Grid>
				
			</Grid>
        </Container>
    );
};

export default HomePage;
