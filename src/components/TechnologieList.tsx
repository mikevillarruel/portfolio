import { Grid, Typography } from '@mui/material';
import { Styles } from '../interfaces/interfaces';

export interface Technologie {
  name: string;
  image: string;
}

interface Props {
  items: Technologie[];
}

export const TechnologieList = ({ items }: Props) => {
  return (
    <Grid
      container
      spacing={2}
      padding={2}
      columns={{ xs: 3, sm: 5, lg: 7 }}
      justifyContent="center"
    >
      {items.map((item) => (
        <Grid item xs={1} sx={styles.technologieContainer}>
          <img style={{ width: '80px' }} src={item.image} alt={item.name} />
          <Typography variant="body2">{item.name}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

const styles: Styles = {
  technologieContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};
