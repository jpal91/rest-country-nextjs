import { createTheme } from "@mui/material";

import typography from "./base/typography";
import colors from "./base/colors";
import breakpoints from "./base/breakpoints";
import borders from "./base/borders";
import card from "./components/card";
import container from "./components/container";
import grid from "./components/grid";
import inputOutlined from "./components/inputoutline";
import menu from "./components/paper";
import inputlabel from "./components/inputlabel";
import cardcontent from "./components/cardcontent";

export default createTheme({
  typography: { ...typography },
  palette: { ...colors },
  breakpoints: { ...breakpoints },
  borders: { ...borders },
  components: {
    MuiCard: { ...card },
    MuiContainer: { ...container },
    MuiGrid: { ...grid },
    MuiOutlinedInput: { ...inputOutlined },
    MuiMenu: { ...menu },
    MuiInputLabel: { ...inputlabel },
    MuiCardContent: { ...cardcontent }
  }
});
