import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const FilterMenu = () => {
    const [region, setRegion] = useState("");
    const handleRegionChange = (event) => setRegion(event.target.value);

    return (
        <Grid item xs={12} lg={6} sx={{ justifyContent: "flex-end", flexDirection: { xs: 'column', lg: 'row' }, mt: { xs: 5, lg: 0 }, ml: { xs: 1, lg: 0} }}>
            <Paper sx={{ width: '100%', maxWidth: 300 }}>
                <FormControl
                    sx={{ width: '100%', maxWidth: 300, backgroundColor: "background.secondary" }}
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
                        <MenuItem value={"America"}>America</MenuItem>
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


