import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";

const NavBar = () => {
  return (
    <AppBar color="default">
      <Grid container sx={{ width: "100%", maxWidth: 1440 }}>
        <Grid item xs={6} sx={{ justifyContent: "flex-start", ml: 5 }}>
          <Typography
            variant="h3"
            sx={{
              color: "primary.text"
            }}
          >
            Where in the world?
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ justifyContent: "flex-end", mr: 5 }}>
          <Typography
            variant="body2"
            sx={{
              color: "primary.text"
            }}
          >
            Dark Mode
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default NavBar;
