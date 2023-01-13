import { Avatar, Box, Typography } from '@mui/material';
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
import { LanguageContext } from '../context/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';
import { Styles } from '../interfaces/interfaces';

interface Icon {
  name: string;
  image: string;
}

export const About = () => {
  const { content } = useContext(LanguageContext);
  usePageTitle(content.about_me);

  const icons: Icon[] = [
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
        <Box>
          <Typography sx={styles.title} variant="h3">
            {content.about_me}
          </Typography>
          <Typography sx={styles.description} variant="body1">
            {content.about_description}
          </Typography>
        </Box>
        <Box>
          <Avatar src={profileImage} alt="Profile" sx={styles.avatar} />
        </Box>
      </Box>
      <Box sx={styles.stackContainer}>
        <Box>
          <Typography variant="h5" sx={styles.stackTitle}>
            {content.technologies_i_have_work_with}
          </Typography>
        </Box>
        <Box sx={styles.techContainer}>
          {icons.map((icon, index) => (
            <Box sx={styles.technologieContainer} key={index}>
              <img style={{ height: 80 }} src={icon.image} alt={icon.name} />
              <Typography variant="body2">{icon.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const styles: Styles = {
  aboutPage: {
    height: { xs: 'auto', md: '100%' },
    paddingX: { xs: '15%', md: '20%' },
  },
  descriptionContainer: {
    height: { xs: 'auto', md: '50%' },
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
  },
  title: {
    textAlign: {
      xs: 'center',
      md: 'left',
    },
  },
  description: {
    textAlign: {
      xs: 'center',
      md: 'justify',
    },
  },
  avatar: {
    width: '150px',
    height: '150px',
    margin: { xs: '15px', md: '0px' },
    marginLeft: { md: '20px' },
  },
  stackTitle: {
    textAlign: 'center',
  },
  stackContainer: {
    height: 'auto',
    display: 'block',
  },
  techContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  technologieContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: '10px',
  },
};
