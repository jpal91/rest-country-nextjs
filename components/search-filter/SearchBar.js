import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";

const SearchBar = () => {
    const [searchText, setSearchText] = useState("");
    const handleTextChange = (event) => setSearchText(event.target.current);

    return (
        <Grid item xs={12} lg={6} sx={{ justifyContent: "flex-start", flexDirection: { xs: 'column', lg: 'row' }, width: '100%', maxWidth: 400, px: { xs: 1, lg: 0} }}>
            <Paper sx={{ width: '100%'}}>
                <TextField
                    id="search-country-textfield"
                    placeholder="Search for a country"
                    onChange={handleTextChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment>
                                <SearchIcon
                                    sx={{ mr: 0.5, color: "primary.text" }}
                                />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ width: '100%', backgroundColor: "background.secondary" }}
                />
            </Paper>
        </Grid>
    );
};

export default SearchBar;