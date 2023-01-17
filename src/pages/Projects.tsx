import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { Project, ProjectItem } from '../components/ProjectItem';
import { LanguageContext } from '../context/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';
import { Styles } from '../interfaces/interfaces';

export const Projects = () => {
  const projectList: Project[] = [
    {
      name: 'Portfolio',
      description: 'My personal portfolio website',
      features: ['Responsive Design', 'Dark Mode', 'Internationalization'],
      technologies: ['React.js', 'TypeScript', 'Material-UI'],
      githubLink: 'https://github.com/mikevillarruel/portfolio',
      liveLink: 'https://mikevillarruel.netlify.app',
    },
    {
      name: 'Portfolio',
      description: 'My personal portfolio website',
      features: ['Responsive Design', 'Dark Mode', 'Internationalization'],
      technologies: ['React.js', 'TypeScript', 'Material-UI'],
      githubLink: 'https://github.com/mikevillarruel/portfolio',
      liveLink: 'https://mikevillarruel.netlify.app',
    },
    {
      name: 'Portfolio',
      description: 'My personal portfolio website',
      features: ['Responsive Design', 'Dark Mode', 'Internationalization'],
      technologies: ['React.js', 'TypeScript', 'Material-UI'],
      githubLink: 'https://github.com/mikevillarruel/portfolio',
      liveLink: 'https://mikevillarruel.netlify.app',
    },
    {
      name: 'Portfolio',
      description: 'My personal portfolio website',
      features: ['Responsive Design', 'Dark Mode', 'Internationalization'],
      technologies: ['React.js', 'TypeScript', 'Material-UI'],
      githubLink: 'https://github.com/mikevillarruel/portfolio',
      liveLink: 'https://mikevillarruel.netlify.app',
    },
  ];

  const { content } = useContext(LanguageContext);
  usePageTitle(content.projects);

  return (
    <>
      <Typography variant="h3" sx={styles.title}>
        {content.projects}
      </Typography>
      <Grid
        container
        spacing={2}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
      >
        {projectList.map((project, index) => (
          <Grid item xs={4}>
            <ProjectItem {...project} key={index} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const styles: Styles = {
  title: {
    textAlign: 'center',
    marginY: '6vh',
  },
};
