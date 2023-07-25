import tokens from "./token";

export const themeSettings = {
  mode: {},
  // PALETTE
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[100],
      dark: tokens.primary[900],
    },
    secondary: {
      main: tokens.secondary[500],
      light: tokens.secondary[100],
      dark: tokens.secondary[900],
    },
  },
  // TYPOGRAPHY
  typography: {
    h1: {
      fontSize: 21,
      fontFamily: "Inter",
    },
    h2: {},
    h3: {},
    h4: {},
  },
};

// import { tokens } from './token';
// // mui theme settings
// export const themeSettings = {
//   palette: {
//     primary: {
//       ...tokens.primary,
//       main: tokens.primary[500],
//       light: tokens.primary[400],
//     },
//     secondary: {
//       ...tokens.secondary,
//       main: tokens.secondary[500],
//     },
//     tertiary: {
//       ...tokens.tertiary,
//     },
//     grey: {
//       ...tokens.grey,
//       main: tokens.grey[500],
//     },
//     background: {
//       default: tokens.background.main,
//       light: tokens.background.light,
//     },
//   },
//   typography: {
//     fontFamily: ["Inter", "sans-serif"].join(","),
//     fontSize: 12,
//     h1: {
//       fontFamily: ["Inter", "sans-serif"].join(","),
//       fontSize: 100,
//       fontWeight: 900,
//       color: tokens.primary[500],
//     },
//     h2: {
//       fontFamily: ["Inter", "sans-serif"].join(","),
//       fontSize: 80,
//       fontWeight: 700,
//       color: tokens.primary[500],
//     },
//     h3: {
//       fontFamily: ["Inter", "sans-serif"].join(","),
//       fontSize: 25,
//       fontWeight: 500,
//       color: tokens.primary[500],
//     },
//     body1: {
//       fontFamily: ["Inter", "sans-serif"].join(","),
//       fontSize: 14,
//       fontWeight: 600,
//       color: tokens.grey[300],
//     },
//     body2: {
//       fontFamily: ["Inter", "sans-serif"].join(","),
//       fontSize: 12,
//       fontWeight: 400,
//       color: tokens.grey[500],
//     },
//     h6: {
//       fontFamily: ["Inter", "sans-serif"].join(","),
//       fontSize: 10,
//       color: tokens.grey[700],
//     },
//   },
// };
