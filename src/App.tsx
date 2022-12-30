import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Styles } from './interfaces/interfaces';

function App() {
  return (
    <Box sx={styles.rootContainer}>
      <Nav />
      <Box sx={styles.contentContainer}>
        <Outlet />
      </Box>
    </Box>
  );
}

const styles: Styles = {
  rootContainer: {
    display: 'flex',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    minWidth: '360px',
    overflow: 'auto',
  },
  contentContainer: {
    width: { xs: '100%', md: '85%' },
    height: { xs: '90vh', md: '100vh' },
    overflow: 'auto',
    backgroundColor: 'background.default',
  },
};

export default App;
