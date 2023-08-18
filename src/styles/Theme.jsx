import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#724fce',
    },
    secondary: {
      main: '#999999',
    },
    typography: {
      main: '#707070',
      secondary: '#7C7C86',
    },
    basic: {
      main: '#FFFF',
      secondary: '#000000',
    },
    status: {
      danger: '#dd3231',
      success: '#469b62',
    },
  },
  typography: {
    fontFamily: 'sans-serif',
  },
  breakpoints: {
    values: {
      xs: 400,
      sm: 600,
      md: 960,
      lg: 1280,
      midLg: 1400,
      xl: 1920,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        *, *::before, *::after {
          box-sizing: inherit
        }
      
        html: {
          box-sizing: border-box,
        }
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          background-color: #6c5dde;
          color: #707070;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              backgroundColor: '#6c5dde',
              color: '#fff',
              boxShadow:
                'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
            }),
        }),
      },
    },
  },
});
