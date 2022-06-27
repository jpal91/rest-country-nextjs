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
        <AppBar sx={{ backgroundColor: "background.secondary", position: 'sticky', maxWidth: '100%' }}>
            <Grid
                container
                sx={{
                    width: "100%",
                    maxWidth: 1440,
                    flexWrap: "nowrap",
                    alignItems: "center",
                    p: 2,
                    ml: { xs: 0, lg: 0 },
					
                }}
            >
                <Grid
                    item
                    xs={6}
                    lg={6}
                    sx={{ justifyContent: "flex-start", ml: { xs: 0, lg: 5 } }}
                >
                    <Typography

                        variant='h6'
                    >
                        Where in the world?
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={6}
                    lg={6}
                    sx={{ justifyContent: "flex-end", mr: { xs: 0, lg: 5 }}}
                >
					<IconButton onClick={() => themeCtx.changeTheme()}>
                    <ModeNightIcon sx={{ fontSize: 16, mr: 0.5, color: 'primary.text' }}/>
					<Typography
                        variant="h6"

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
