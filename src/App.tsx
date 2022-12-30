import { Box } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';
import { Outlet } from 'react-router-dom';
import { Nav } from './components/Nav';

function App() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        minWidth: 360,
        overflow: 'auto',
      }}
    >
      <Nav />
      <Box
        sx={{
          width: { xs: '100%', md: '85%' },
          height: { xs: '90vh', md: '100vh' },
          overflow: 'auto',
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
