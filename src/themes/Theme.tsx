import { ThemeProvider } from '@mui/material/styles';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

interface Props {
  children: React.ReactNode;
}

export const Theme = (props: Props) => {
  const { theme } = useContext(ThemeContext);
  return <ThemeProvider theme={theme} {...props} />;
};
