import { Grid, Typography, useMediaQuery } from '@mui/material';
import { theme } from '../../../../styles/Theme';
import CustomSwitchWithLabels from '../helpers/SwitchComponent';

const classes = {
  rowAligment: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    width: '35%',
    ml: '-65px',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      justifyContent: 'space-between',
    },
  },
  labelWrapper: {
    alignText: 'end',
  },
  switchWrapper: {},
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'end',
  },
};

const STEP_4_CEO_ICONOCLAST_SCORE = ({ formik }) => {
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
          <Typography sx={classes.label}>Different Countries?: </Typography>
        </Grid>
        <Grid item lg={3}>
          <CustomSwitchWithLabels
            id='diffcountries'
            name='diffcountries'
            checked={formik.values.diffcountries}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>
      <Grid item sx={classes.rowAligment}>
        <Grid item lg={9}>
          <Typography sx={classes.label}>Different Industries?: </Typography>
        </Grid>
        <Grid item lg={3}>
          <CustomSwitchWithLabels
            id='diffindustries'
            name='diffindustries'
            checked={formik.values.diffindustries}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>
      <Grid item sx={classes.rowAligment}>
        <Grid item lg={9}>
          <Typography sx={classes.label}>Quirky Hobby?: </Typography>
        </Grid>
        <Grid item lg={3}>
          <CustomSwitchWithLabels
            id='quirkyhobby'
            name='quirkyhobby'
            checked={formik.values.quirkyhobby}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>
      <Grid item sx={classes.rowAligment}>
        <Grid item lg={9}>
          <Typography sx={classes.label}>Colloquial?: </Typography>
        </Grid>
        <Grid item lg={3}>
          <CustomSwitchWithLabels
            id='colloquial'
            name='colloquial'
            checked={formik.values.colloquial}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>
      <Grid item sx={classes.rowAligment}>
        <Grid item lg={9}>
          <Typography sx={classes.label}>Class Topper?: </Typography>
        </Grid>
        <Grid item lg={3}>
          <CustomSwitchWithLabels
            id='classtopper'
            name='classtopper'
            checked={formik.values.classtopper}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>
      <Grid item sx={classes.rowAligment}>
        <Grid item lg={9}>
          <Typography sx={classes.label}>Early Achievement?: </Typography>
        </Grid>
        <Grid item lg={3}>
          <CustomSwitchWithLabels
            id='earlyachieve'
            name='earlyachieve'
            checked={formik.values.earlyachieve}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>
      <Grid item sx={classes.rowAligment}>
        <Grid item lg={9}>
          <Typography sx={classes.label}>Quirky Group?: </Typography>
        </Grid>
        <Grid item lg={3}>
          <CustomSwitchWithLabels
            id='quirkygroup'
            name='quirkygroup'
            checked={formik.values.quirkygroup}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default STEP_4_CEO_ICONOCLAST_SCORE;
