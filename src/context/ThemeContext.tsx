import { PaletteMode } from '@mui/material';
import { createTheme, Theme } from '@mui/material/styles';
import createTypography from '@mui/material/styles/createTypography';
import { createContext, useEffect, useMemo, useState } from 'react';
import codeIconDark from '../assets/images/code-icon-dark.svg';
import codeIconLight from '../assets/images/code-icon-light.svg';

interface ThemeContextProps {
  toggleColorMode: (mode: PaletteMode) => void;
  theme: Theme;
  appIcon: string;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
  const [mode, setMode] = useState<PaletteMode>(
    localStorage.getItem('mode') === 'dark' ? 'dark' : 'light'
  );

  const [appIcon, setAppIcon] = useState(
    mode === 'light' ? codeIconLight : codeIconDark
  );

  useEffect(() => {
    setAppIcon(mode === 'light' ? codeIconLight : codeIconDark);
  }, [mode]);

  useEffect(() => {
    const link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    link.href = appIcon;
  }, [appIcon]);

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
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
          }
        : {
            primary: {
              main: '#87ceeb' /* skyblue */,
            },
            secondary: {
              main: '#ffffff' /* white */,
            },
            background: {
              default: '#2d2d2d',
              paper: '#2d2d2d',
            },
          }),
    },
  });

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: (mode: PaletteMode) => {
        setMode(mode);
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  theme.typography = createTypography(theme.palette, {
    fontFamily:
      "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    body1: {
      color: theme.palette.secondary.main,
    },
    body2: {
      color: theme.palette.secondary.main,
    },
    h1: {
      fontWeight: 'bold',
      color: theme.palette.primary.main,
    },
    h2: {
      fontWeight: 'bold',
      color: theme.palette.primary.main,
    },
    h3: {
      fontWeight: 'bold',
      color: theme.palette.primary.main,
    },
    h4: {
      fontWeight: 'bold',

      color: theme.palette.secondary.main,
    },
    h5: {
      fontWeight: 'bold',
      color: theme.palette.secondary.main,
    },
    h6: {
      fontWeight: 'bold',
      color: theme.palette.secondary.main,
    },
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

  return (
    <ThemeContext.Provider
      value={{
        ...colorMode,
        theme,
        appIcon,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
