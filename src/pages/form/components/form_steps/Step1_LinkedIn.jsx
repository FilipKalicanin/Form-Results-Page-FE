import { Grid, TextField, Typography, useMediaQuery } from '@mui/material';
import { theme } from '../../../../styles/Theme';
import TextInputComponent from '../helpers/TextInputComponent';

const classes = {
  item_wrapper: {
    dispaly: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '60%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    margin: '0 auto',
  },
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

const STEP_1_LINKED_IN = ({ formik }) => {
  return (
    <Grid container direction='column' gap='15px'>
      <Grid item sx={classes.item_wrapper}>
        <TextInputComponent
          label='CEO LinkedIn:'
          id='ceo_linkedin'
          name='ceo_linkedin'
          placeholder='https://www.linkedin.com/in/'
          formik_props={formik}
        />
      </Grid>
      <Grid item sx={classes.item_wrapper}>
        <TextInputComponent
          label='CTO LinkedIn:'
          id='cto_linkedin'
          name='cto_linkedin'
          placeholder='https://www.linkedin.com/in/'
          formik_props={formik}
        />
      </Grid>
    </Grid>
  );
};

export default STEP_1_LINKED_IN;
