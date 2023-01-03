import { createTheme, ThemeProvider } from '@mui/material/styles';
import createTypography from '@mui/material/styles/createTypography';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333a56' /* vermillion */,
    },
    secondary: {
      main: '#52655f' /* sunshine */,
    },
    background: {
      default: '#f7f5e6' /* fresh */,
      paper: '#e8e8e8' /* clean */,
    },
    divider: '#afb5b3',
  },
});

theme.typography = createTypography(theme.palette, {
  h3: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  body1: {
    color: theme.palette.secondary.main,
  },
  h4: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  h5: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  h6: {
    fontSize: '0.8rem',
  },
  fontFamily:
    "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
});

theme.components = {
  MuiCssBaseline: {
    styleOverrides: {
      [`${theme.breakpoints.up('md')}`]: {
        /* return @media (min-width: 900px) */
        html: {
          overflow: 'hidden',
        },
      },
      /* Scrollbar styles */
      /* Width */
      '::-webkit-scrollbar': {
        width: '10px',
      },
      /* Handle */
      '::-webkit-scrollbar-thumb': {
        background: theme.palette.secondary.main,
        borderRadius: '10px',
      },
      /* Handle on hover */
      '::-webkit-scrollbar-thumb:hover': {
        background: theme.palette.primary.main,
      },
    },
  },
};

interface Props {
  children: React.ReactNode;
}

export const Theme = (props: Props) => {
  return <ThemeProvider theme={theme} {...props} />;
};
