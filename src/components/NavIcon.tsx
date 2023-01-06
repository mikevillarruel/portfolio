import { Box, Divider } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Styles } from '../interfaces/interfaces';

export const NavIcon = () => {
  const { appIcon } = useContext(ThemeContext);

  return (
    <Box sx={styles.logoContainer}>
      <img
        style={{
          margin: '2vh 0',
          height: '25px',
        }}
        src={appIcon}
        alt="code icon"
      />
      <Box>
        <Divider sx={styles.divider} />
      </Box>
    </Box>
  );
};

const styles: Styles = {
  logoContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    display: { xs: 'none', md: 'flex' },
  },
  divider: {
    display: { xs: 'none', md: 'block' },
  },
};
