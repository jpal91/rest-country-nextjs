import { useContext } from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ModeNightIcon from '@mui/icons-material/ModeNight';

import ThemeContext from "../../helpers/context";

const NavBar = () => {
    const themeCtx = useContext(ThemeContext);

    return (
        <AppBar sx={{ backgroundColor: "background.secondary" }}>
            <Grid
                container
                sx={{
                    width: "100%",
                    maxWidth: 1440,
                    flexWrap: "nowrap",
                    alignItems: "center",
                    p: 2,
                    ml: 10,
                }}
            >
                <Grid
                    item
                    xs={6}
                    lg={6}
                    sx={{ justifyContent: "flex-start", ml: 10 }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            color: "primary.text",
                            fontWeight: 800,
                        }}
                    >
                        Where in the world?
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={6}
                    lg={6}
                    sx={{ justifyContent: "flex-end", mr: 10 }}
                >
					<IconButton onClick={() => themeCtx.changeTheme()}>
                    <ModeNightIcon sx={{ fontSize: 16, mr: 0.5, color: 'primary.text' }}/>
					<Typography
                        variant="body2"
                        sx={{
                            color: "primary.text",
                            fontWeight: 600,
                        }}
                    >
                        Dark Mode
                    </Typography>
					</IconButton>
                </Grid>
            </Grid>
        </AppBar>
    );
};

export default NavBar;
