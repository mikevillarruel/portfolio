import { Typography } from '@mui/material';
import { useContext } from 'react';
import { Project } from '../components/ProjectItem';
import { ProjectList } from '../components/ProjectList';
import { LanguageContext } from '../context/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';
import { Styles } from '../interfaces/interfaces';

export const Projects = () => {
  const { content } = useContext(LanguageContext);
  const { _features, _technologies } = content;

  usePageTitle(content.projects);

  const projectList: Project[] = [
    {
      name: content.portfolio_name,
      description: content.portfolio_description,
      features: [
        _features.responsive_design,
        _features.dark_mode,
        _features.internationalization,
      ],
      technologies: [
        _technologies.react,
        _technologies.typescript,
        _technologies.material_ui,
      ],
      githubLink: content.portfolio_github_link,
      liveLink: content.portfolio_live_link,
    },
  ];

  return (
    <>
      <Typography variant="h3" sx={styles.title}>
        {content.projects}
      </Typography>
      <ProjectList items={projectList} />
    </>
  );
};

const styles: Styles = {
  title: {
    textAlign: 'center',
    marginY: '6vh',
  },
};
