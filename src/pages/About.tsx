import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import profileImage from '../assets/images/profile.jpg';
import cSharpIcon from '../assets/images/stack/icons8-c-sharp-logo.svg';
import cssIcon from '../assets/images/stack/icons8-css3.svg';
import dockerIcon from '../assets/images/stack/icons8-docker.svg';
import gitIcon from '../assets/images/stack/icons8-git.svg';
import htmlIcon from '../assets/images/stack/icons8-html-5.svg';
import javaIcon from '../assets/images/stack/icons8-java.svg';
import javascriptIcon from '../assets/images/stack/icons8-javascript.svg';
import nodejsIcon from '../assets/images/stack/icons8-nodejs.svg';
import pythonIcon from '../assets/images/stack/icons8-python.svg';
import reactIcon from '../assets/images/stack/icons8-react.svg';
import typescriptIcon from '../assets/images/stack/icons8-typescript.svg';
import sqlIcon from '../assets/images/stack/sql.svg';
import { AboutMe } from '../components/AboutMe';
import { Technologie, TechnologieList } from '../components/TechnologieList';
import { LanguageContext } from '../context/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';
import { Styles } from '../interfaces/interfaces';

export const About = () => {
  const { content } = useContext(LanguageContext);
  usePageTitle(content.about_me);

  const technologies: Technologie[] = [
    { name: 'HTML', image: htmlIcon },
    { name: 'CSS', image: cssIcon },
    { name: 'JavaScript', image: javascriptIcon },
    { name: 'TypeScript', image: typescriptIcon },
    { name: 'Python', image: pythonIcon },
    { name: 'Java', image: javaIcon },
    { name: 'C#', image: cSharpIcon },
    { name: 'SQL', image: sqlIcon },
    { name: 'React.js', image: reactIcon },
    { name: 'Node.js', image: nodejsIcon },
    { name: 'Git', image: gitIcon },
    { name: 'Docker', image: dockerIcon },
  ];

  return (
    <Box sx={styles.aboutPage}>
      <Box sx={styles.descriptionContainer}>
        <Typography sx={styles.title} variant="h3">
          {content.about_me}
        </Typography>
        <AboutMe description={content.about_description} image={profileImage} />
      </Box>

      <Box sx={styles.stackContainer}>
        <Box>
          <Typography variant="h5" sx={styles.stackTitle}>
            {content.technologies_i_have_work_with}
          </Typography>
        </Box>
        <TechnologieList items={technologies} />
      </Box>
    </Box>
  );
};

const styles: Styles = {
  aboutPage: {
    height: { xs: 'auto', md: '100%' },
    paddingX: { xs: 0, md: '10%' },
  },
  descriptionContainer: {
    height: { xs: 'auto', md: '50%' },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    textAlign: {
      xs: 'center',
      md: 'left',
    },
    marginBottom: '1rem',
  },
  stackTitle: {
    textAlign: 'center',
    marginBottom: '1rem',
  },
  stackContainer: {
    height: 'auto',
    display: 'block',
  },
};
