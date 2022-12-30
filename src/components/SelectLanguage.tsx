import LanguageIcon from '@mui/icons-material/Language';
import { Box, MenuItem, Select } from '@mui/material';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Styles } from '../interfaces/interfaces';

export const SelectLanguage = () => {
  const { language, handleLanguageChange } = useContext(LanguageContext);

  return (
    <Box sx={styles.selectLanguage}>
      <LanguageIcon />
      <Select
        variant="standard"
        value={language}
        label="Language"
        onChange={(event) => handleLanguageChange(event.target.value)}
      >
        <MenuItem value={'en'}>En</MenuItem>
        <MenuItem value={'es'}>Es</MenuItem>
      </Select>
    </Box>
  );
};

const styles: Styles = {
  selectLanguage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: { xs: '5px', md: '10px' },
    width: { xs: '10%', md: '5%' },
    position: 'absolute',
    right: { xs: 'auto', md: 0 },
    top: 0,
    left: { xs: 0, md: 'auto' },
    flexDirection: { xs: 'column', md: 'row' },
  },
};
