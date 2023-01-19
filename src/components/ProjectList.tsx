import { Grid } from '@mui/material';
import { Project, ProjectItem } from '../components/ProjectItem';

interface Props {
  items: Project[];
}

export const ProjectList = ({ items }: Props) => {
  return (
    <Grid
      container
      spacing={2}
      columns={{ xs: 4, sm: 8, md: 12 }}
      justifyContent="center"
    >
      {items.map((project, index) => (
        <Grid item xs={4}>
          <ProjectItem {...project} key={index} />
        </Grid>
      ))}
    </Grid>
  );
};
