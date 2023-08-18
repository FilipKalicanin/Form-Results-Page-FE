import { Grid, Typography, useMediaQuery } from '@mui/material';
import { theme } from '../../../../styles/Theme';
import CustomSwitchWithLabels from '../helpers/SwitchComponent';

const classes = {
  rowAligment: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    width: '35%',
    ml: '-80px',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      justifyContent: 'space-between',
    },
  },
  labelWrapper: {
    alignText: 'end',
  },
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'end',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'start',
    },
  },
};

const STEP_5_CEO_AGREEABLENESS_SCORE = ({ formik }) => {
  const mobileMid = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      justifyContent='center'
      gap={mobileMid ? '1rem' : '2rem'}
    >
      <Grid item sx={classes.rowAligment}>
        <Grid item lg={9}>
          <Typography sx={classes.label}>Smiling?: </Typography>
        </Grid>
        <Grid item lg={3}>
          <CustomSwitchWithLabels
            id='smiling'
            name='smiling'
            checked={formik.values.smiling}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>
      <Grid item sx={classes.rowAligment}>
        <Grid item lg={9}>
          <Typography sx={classes.label}>Positive comment?: </Typography>
        </Grid>
        <Grid item lg={3}>
          <CustomSwitchWithLabels
            id='poscomment'
            name='poscomment'
            checked={formik.values.poscomment}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>
      <Grid item sx={classes.rowAligment}>
        <Grid item lg={9}>
          <Typography sx={classes.label}>Recommendation given?: </Typography>
        </Grid>
        <Grid item lg={3}>
          <CustomSwitchWithLabels
            id='recgiven'
            name='recgiven'
            checked={formik.values.recgiven}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>
      <Grid item sx={classes.rowAligment}>
        <Grid item lg={9}>
          <Typography sx={classes.label}>Volunteering?: </Typography>
        </Grid>
        <Grid item lg={3}>
          <CustomSwitchWithLabels
            id='volunteer'
            name='volunteer'
            checked={formik.values.volunteer}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>
      <Grid item sx={classes.rowAligment}>
        <Grid item lg={9}>
          <Typography sx={classes.label}>Teamwork skill?: </Typography>
        </Grid>
        <Grid item lg={3}>
          <CustomSwitchWithLabels
            id='teamwork'
            name='teamwork'
            checked={formik.values.teamwork}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default STEP_5_CEO_AGREEABLENESS_SCORE;
