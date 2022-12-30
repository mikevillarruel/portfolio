import { Box } from '@mui/material';
import { Styles } from '../interfaces/interfaces';
import { NavFooter } from './NavFooter';
import { NavIcon } from './NavIcon';
import { NavMenu } from './NavMenu';
import { SelectLanguage } from './SelectLanguage';

export const Nav = () => {
  return (
    <Box sx={styles.navContainer}>
      <SelectLanguage />
      <NavIcon />
      <NavMenu />
      <NavFooter />
    </Box>
  );
};

const styles: Styles = {
  navContainer: {
    width: { xs: '100%', md: '15%' },
    height: { xs: '10vh', md: '100vh' },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'background.paper',
    borderRightWidth: { xs: '0', md: '1px' },
    borderRightStyle: 'solid',
    borderRightColor: 'divider',
  },
};
