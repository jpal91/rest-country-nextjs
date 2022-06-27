import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import LoadingContext from "../../helpers/loadingcontext";

const FilterMenu = (props) => {
    const [region, setRegion] = useState(props.selectedRegion || '');
    const loadingCtx = useContext(LoadingContext)
    const router = useRouter()
    const handleRegionChange = (event) => {
        event.preventDefault()
        loadingCtx.changeLoadingState()
        setRegion(event.target.value)
        router.push(`/filter/${event.target.value}`)
    }

    useEffect(() => {
        if (region.length > 0) {
            let firstLetter = region[0].toUpperCase()
            let theRest = region.slice(1)

            setRegion(`${firstLetter}${theRest}`)
        }
    }, [region])

    return (
        <Grid item xs={12} lg={6} sx={{ justifyContent: "flex-end", flexDirection: { xs: 'column', lg: 'row' }, mt: { xs: 5, lg: 0 }, ml: { xs: 1, lg: 0}, pr: 2}} >
            <Paper sx={{ width: '100%', maxWidth: 250 }}>
                <FormControl
                    sx={{ width: '100%', maxWidth: 250, backgroundColor: "background.secondary" }}
                >
                    <InputLabel sx={{ color: "primary.text" }}>
                        Filter by Region
                    </InputLabel>
                    <Select
                        value={region}
                        label="Filter by Region"
                        onChange={handleRegionChange}
                    >
                        <MenuItem value={"Africa"}>Africa</MenuItem>
                        <MenuItem value={"Americas"}>Americas</MenuItem>
                        <MenuItem value={"Asia"}>Asia</MenuItem>
                        <MenuItem value={"Europe"}>Europe</MenuItem>
                        <MenuItem value={"Oceania"}>Oceania</MenuItem>
                    </Select>
                </FormControl>
            </Paper>
        </Grid>
    );
};

export default FilterMenu;


