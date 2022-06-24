import colors from '../base/colors'

const { primary } = colors

const baseDisplayProperties = {
  color: primary.main
}

const typography = {
  fontWeightBold: 800,
  fontWeightMedium: 600,
  fontWeightRegular: 300,
  fontSize: 16,
  fontFamily: '"Nunito Sans", sans-serif',

  body2: {
    fontSize: 16,
    ...baseDisplayProperties
  }
};

export default typography;
