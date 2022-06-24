import colors from '../base/colors'

const { background, primary } = colors

const inputOutlined = {
    styleOverrides: {
      root: {
        color: `${primary.text} !important`
      },
      notchedOutline: {
        borderColor: background.default
      },
      input: {
        color: `${primary.text} !important`
      }
    },
  };
  
  export default inputOutlined;


