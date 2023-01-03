import { Box } from '@mui/material';
import { Styles } from '../interfaces/interfaces';
import { NavFooter } from './NavFooter';
import { NavIcon } from './NavIcon';
import { NavMenu } from './NavMenu';

export const Nav = () => {
  return (
    <Box sx={styles.navContainer}>
      <NavIcon />
      <NavMenu />
      <NavFooter />
    </Box>
  );
};

const styles: Styles = {
  navContainer: {
    position: { xs: 'fixed', md: 'relative' },
    bottom: { xs: 0, md: 'auto' },
    width: { xs: '100%', md: '15%' },
    height: { xs: 'fit-content', md: '100vh' },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: { xs: 'center', md: 'space-between' },
    backgroundColor: 'background.paper',
    borderRightWidth: { xs: '0', md: '1px' },
    borderRightStyle: 'solid',
    borderRightColor: 'divider',
  },
};
