import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333a56',
    },
    secondary: {
      main: '#52655f',
    },
    background: {
      default: '#f7f5e6',
      paper: '#e8e8e8',
    },
    divider: '#afb5b3',
  },
  typography: {
    h3: {
      color: '#333a56',
      fontWeight: 'bold',
    },
    body1: {
      color: '#52655f',
    },
    h4: {
      color: '#52655f',
      fontWeight: 'bold',
      fontSize: '1rem',
    },
    h5: {
      color: '#333a56',
      fontWeight: 'bold',
      fontSize: '1.5rem',
    },
    h6: {
      fontSize: '0.8rem',
    },
    fontFamily: 'var(--font-family);',
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#52655f',
        },
      },
    },
  },
});

interface Props {
  children: React.ReactNode;
}

export const Theme = (props: Props) => {
  return <ThemeProvider theme={theme} {...props} />;
};
