import { Grid } from '@mui/material';
import { useContext } from 'react';
import { Project, ProjectItem } from '../components/ProjectItem';
import { LanguageContext } from '../context/LanguageContext';

export const ProjectList = () => {
  const { content } = useContext(LanguageContext);
  const { _features, _technologies } = content;

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
  );
};
