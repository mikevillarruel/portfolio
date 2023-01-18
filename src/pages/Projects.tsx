import { Typography } from '@mui/material';
import { useContext } from 'react';
import { ProjectList } from '../components/ProjectList';
import { LanguageContext } from '../context/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';
import { Styles } from '../interfaces/interfaces';

export const Projects = () => {
  const { content } = useContext(LanguageContext);
  usePageTitle(content.projects);

  return (
    <>
      <Typography variant="h3" sx={styles.title}>
        {content.projects}
      </Typography>
      <ProjectList />
    </>
  );
};

const styles: Styles = {
  title: {
    textAlign: 'center',
    marginY: '6vh',
  },
};
