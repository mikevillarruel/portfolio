import { Avatar, Box, Typography } from '@mui/material';
import { Styles } from '../interfaces/interfaces';

interface Props {
  image: string;
  description: string;
}

export const AboutMe = (props: Props) => {
  const { image, description } = props;

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.description} variant="body1">
        {description}
      </Typography>
      <Avatar src={image} alt="Profile" sx={styles.avatar} />
    </Box>
  );
};

const styles: Styles = {
  container: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
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
};
