import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { ModeSwitch } from './components/ModeSwitch';
import { Nav } from './components/Nav';
import { SelectLanguage } from './components/SelectLanguage';
import { Styles } from './interfaces/interfaces';

function App() {
  return (
    <Box sx={styles.rootContainer}>
      <Nav />
      <Box sx={styles.contentContainer}>
        <Outlet />
      </Box>
      <SelectLanguage />
      <ModeSwitch />
    </Box>
  );
}

const styles: Styles = {
  rootContainer: {
    display: 'flex',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    minWidth: '360px',
    marginBottom: { xs: '70px', md: '0px' },
  },
  contentContainer: {
    paddingY: { xs: '20px', md: 0 },
    width: { xs: '100%', md: '85%' },
    height: { xs: 'auto', md: '100vh' },
    overflow: 'auto',
  },
};

export default App;
