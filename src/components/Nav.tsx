import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Theme } from '@mui/material/styles/createTheme';
import { SxProps } from '@mui/system';
import { NavFooter } from './NavFooter';
import { NavIcon } from './NavIcon';
import { NavMenu } from './NavMenu';
import { SelectLanguage } from './SelectLanguage';

export const Nav = () => {
  const theme = useTheme();

  const styles: {
    [key: string]: SxProps<Theme>;
  } = {
    navContainer: {
      width: { xs: '100%', md: '15%' },
      height: { xs: '10vh', md: '100vh' },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: theme.palette.background.paper,
      borderRight: { xs: 'none', md: `1px solid ${theme.palette.divider}` },
    },
  };

  return (
    <Box sx={styles.navContainer}>
      <SelectLanguage />
      <NavIcon />
      <NavMenu />
      <NavFooter />
    </Box>
  );
};
