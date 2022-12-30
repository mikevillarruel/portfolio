import { Box, Divider } from '@mui/material';
import codeIcon from '../assets/images/code-icon.svg';
import { Styles } from '../interfaces/interfaces';

export const NavIcon = () => {
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

  return (
    <Box sx={styles.logoContainer}>
      <img
        style={{
          margin: '2vh 0',
          height: '25px',
        }}
        src={codeIcon}
        alt="code icon"
      />
      <Box>
        <Divider sx={styles.divider} />
      </Box>
    </Box>
  );
};
