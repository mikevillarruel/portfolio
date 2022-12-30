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
import { Styles } from '../interfaces/interfaces';

interface Icon {
  name: string;
  image: string;
}

export const About = () => {
  const { content } = useContext(LanguageContext);
  document.title = `${content.michael_villarruel} | ${content.about_me}`;

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

  const styles: Styles = {
    aboutPage: {
      height: { xs: 'auto', md: '100vh' },
      paddingX: { xs: '10%', md: '20%' },
    },
    descriptionContainer: {
      height: { xs: 'auto', md: '50%' },
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
    },
  };

  return (
    <Box sx={styles.aboutPage}>
      <Box sx={styles.descriptionContainer}>
        <Box>
          <Typography
            sx={{
              textAlign: {
                xs: 'center',
                md: 'justify',
              },
            }}
            variant="h3"
          >
            {content.about_me}
          </Typography>
          <Typography
            sx={{
              textAlign: {
                xs: 'center',
                md: 'justify',
              },
            }}
            variant="body1"
          >
            {content.about_description}
          </Typography>
        </Box>
        <Box>
          <Avatar
            src={profileImage}
            alt="Profile"
            sx={{
              width: 150,
              height: 150,
              margin: { xs: '15px', md: '0px' },
              marginLeft: { md: '20px' },
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          height: 'auto',
          display: 'block',
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
            }}
          >
            {content.technologies_i_have_work_with}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {icons.map((icon, index) => (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                margin: '10px',
              }}
              key={index}
            >
              <img
                style={{
                  height: 80,
                }}
                src={icon.image}
                alt={icon.name}
              />
              <Typography variant="h6">{icon.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
