import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import { Box, Card, Link, Typography } from '@mui/material';
import { Styles } from '../interfaces/interfaces';

export interface Project {
  name: string;
  description: string;
  features: string[];
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

export const ProjectItem = (props: Project) => {
  const { name, description, features, technologies, githubLink, liveLink } =
    props;

  return (
    <Card sx={styles.card}>
      <Box sx={styles.header}>
        <Box>
          <Typography variant="body1" sx={{ color: 'primary.main' }}>
            <b>{name}</b>
          </Typography>
        </Box>
        <Box sx={styles.links}>
          <Link href={githubLink} target="_blank">
            <GitHubIcon />
          </Link>
          <Link href={liveLink} target="_blank">
            <LinkIcon />
          </Link>
        </Box>
      </Box>
      <Typography variant="body2">{description}</Typography>
      <Typography variant="body2">
        <b>Features: </b>
      </Typography>
      <Typography variant="body2">
        {features.map((feature) => feature).join(', ')}
      </Typography>
      <Typography variant="body2">
        <b>Technologies: </b>
      </Typography>
      <Typography variant="body2">
        {technologies.map((tech) => tech).join(', ')}
      </Typography>
    </Card>
  );
};

const styles: Styles = {
  card: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  links: {
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};
