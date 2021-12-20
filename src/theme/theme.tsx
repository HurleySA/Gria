
import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
    palette: {
      background: {
        default: '#FCFCFC',
      },
      primary: {
        // Purple and green play nicely together.
        main: '#c6198f',
        light: '#D81C98',
        dark: '#920D65',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#590A9D',
        light: '#590A9D',
        dark: '#3E076D',
      },
    },
    typography: {
      "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
      "fontSize": 14,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500
     },
     breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1536,
      },
    },
  });