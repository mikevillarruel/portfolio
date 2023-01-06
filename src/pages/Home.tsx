import { Box, Button, Typography } from '@mui/material';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';
import { usePageTitle } from '../hooks/usePageTitle';
import { Styles } from '../interfaces/interfaces';

export const Home = () => {
  const { content } = useContext(LanguageContext);
  usePageTitle(content.home);
  const { appIcon } = useContext(ThemeContext);

  return (
    <Box sx={styles.homePage}>
      <Box sx={styles.descriptionContainer}>
        <Box sx={styles.internalContainer}>
          <Typography variant="h3">{content.michael_villarruel}</Typography>
          <Typography variant="h4">{content.bachelor_degree}</Typography>
          <Typography variant="h4">&</Typography>
          <Typography variant="h4">{content.software_developer}</Typography>
          <br />
          <Typography sx={styles.description} variant="body1">
            {content.home_description}
          </Typography>
          <Button
            sx={styles.downloadButton}
            variant="contained"
            onClick={() => {
              window.open(
                'https://www.canva.com/design/DAFQLFLkQ9M/MP2gNRS8jup3N9F_OeV9SQ/view?utm_content=DAFQLFLkQ9M&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu',
                '_blank'
              );
            }}
          >
            {content.download_cv}
          </Button>
        </Box>
      </Box>
      <Box sx={styles.imageContainer}>
        <img
          style={{ width: '80%', height: '50%' }}
          src={appIcon}
          alt="code icon"
        />
      </Box>
    </Box>
  );
};

const styles: Styles = {
  homePage: {
    display: 'flex',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    height: { xs: 'auto', md: '100%' },
    paddingX: { xs: '10%', md: '15%' },
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: { xs: 'flex-start', md: 'center' },
    alignItems: 'center',
  },
  internalContainer: {
    maxWidth: '80%',
    textAlign: 'center',
  },
  description: {
    textAlign: 'justify',
  },
  imageContainer: {
    flexGrow: 1,
    minWidth: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: { xs: '25vh', md: 'auto' },
  },
  downloadButton: {
    marginY: '20px',
  },
};
