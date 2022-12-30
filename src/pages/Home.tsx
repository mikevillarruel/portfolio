import { Box, Button, Typography } from '@mui/material';
import { useContext } from 'react';
import codeIcon from '../assets/images/code-icon.svg';
import { LanguageContext } from '../context/LanguageContext';
import { Styles } from '../interfaces/interfaces';

export const Home = () => {
  const { content } = useContext(LanguageContext);
  document.title = `${content.michael_villarruel} | ${content.home}`;

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
          src={codeIcon}
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
    paddingX: { xs: '10%', md: '15%' },
  },
  descriptionContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: { xs: 'flex-start', md: 'center' },
    height: { xs: '65vh', md: '100vh' },
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
    marginTop: '20px',
  },
};
