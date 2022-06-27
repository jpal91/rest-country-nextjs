import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";

const SearchBar = () => {
    const router = useRouter()
    const [searchText, setSearchText] = useState("");
    const [dbSearchText, setDBSearchText] = useState('')
    const handleTextChange = (event) => setSearchText(event.target.value);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDBSearchText(searchText)
        }, 1000)

        return () => {
            
            clearTimeout(timerId)
        }
    }, [searchText])

    useEffect(() => {
        if (!dbSearchText) {
            return
        }
        console.log(dbSearchText)
        router.push(`/search/${dbSearchText}`)
    }, [dbSearchText])

    return (
        <Grid item xs={12} lg={6} sx={{ justifyContent: "flex-start", flexDirection: { xs: 'column', lg: 'row' }, width: '100%', maxWidth: 400, px: { xs: 1, lg: 0} }}>
            <Paper sx={{ width: '100%'}}>
                <TextField
                    id="search-country-textfield"
                    placeholder="Search for a country"
                    onChange={handleTextChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
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
