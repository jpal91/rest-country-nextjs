import colors from '../base/colors'

const { primary, background } = colors

const menu = {
    defaultProps: {
      disableAutoFocusItem: true,
    },
  
    styleOverrides: {
      paper: {
        color: primary.text,
        textAlign: "left",
        backgroundColor: `${background.default} !important`,
      },
      list: {
        color: primary.text
      }
    },
  };
  
  export default menu;