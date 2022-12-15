import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-family);',
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: 'var(--secondary)',
          '&.Mui-selected': {
            color: 'var(--primary)',
          },
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
