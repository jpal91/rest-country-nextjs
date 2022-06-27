import colors from '../base/colors'

const { primary } = colors

// const typography = {
//   fontWeightBold: 800,
//   fontWeightMedium: 600,
//   fontWeightRegular: 300,
//   fontSize: 16,
//   fontFamily: '"Nunito Sans", sans-serif'
// };

const baseProperties = {
  fontWeightBold: 800,
  fontWeightMedium: 600,
  fontWeightRegular: 300,
  color: primary.text,
  fontFamily: '"Nunito Sans", sans-serif'
};

const typography = {
  ...baseProperties,
  h5: {
    fontWeight: baseProperties.fontWeightBold,
    fontFamily: baseProperties.fontFamily,
    color: baseProperties.color,
    fontSize: 22
  },
  h6: {
    fontWeight: baseProperties.fontWeightBold,
    fontFamily: baseProperties.fontFamily,
    color: baseProperties.color,
    fontSize: 20
  },
  body1: {
    fontWeight: baseProperties.fontWeightMedium,
    fontFamily: baseProperties.fontFamily,
    color: baseProperties.color,
    fontSize: 16
  },
  body2: {
    fontWeight: baseProperties.fontWeightRegular,
    fontFamily: baseProperties.fontFamily,
    color: baseProperties.color,
    fontSize: 12
  }
}

export default typography;
