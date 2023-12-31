import { Box, Grid, Slider, Typography, useMediaQuery } from '@mui/material';
import { theme } from '../../../../styles/Theme';
import CustomSwitchWithLabels from '../helpers/SwitchComponent';
import TextInputComponent from '../helpers/TextInputComponent';

const classes = {
  labelWrapper: {
    alignText: 'center',
  },
  switchWrapper: {},
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rowAligment: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    width: '35%',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      justifyContent: 'space-between',
    },
  },
};

const STEP_7_OPTIONAL_CTO_OVERRIDES = ({ formik }) => {
  const mobileMid = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Grid container spacing={mobileMid ? 3 : 5} justifyContent='space-evenly'>
      <Grid
        item
        lg={3.5}
        md={4}
        sm={12}
        xs={12}
        sx={classes.text_input_wrapper}
      >
        <TextInputComponent
          label='Years of experience:'
          id='ctoyrsexp'
          name='ctoyrsexp'
          placeholder='Text...'
          formik_props={formik}
        />
      </Grid>
      <Grid
        item
        lg={3.5}
        md={4}
        sm={12}
        xs={12}
        sx={classes.text_input_wrapper}
      >
        <TextInputComponent
          label='# Prior Tech roles:'
          id='ctotechroles'
          name='ctotechroles'
          placeholder='Text...'
          formik_props={formik}
        />
      </Grid>
      <Grid
        item
        lg={3.5}
        md={4}
        sm={12}
        xs={12}
        sx={classes.text_input_wrapper}
      >
        <TextInputComponent
          label='# Prior Senior roles:'
          id='ctosenior'
          name='ctosenior'
          placeholder='Text'
          formik_props={formik}
        />
      </Grid>
      <Grid
        item
        lg={3.5}
        md={4}
        sm={12}
        xs={12}
        sx={classes.text_input_wrapper}
      >
        <TextInputComponent
          label='# Top Companies Worked at:'
          id='ctotopcomp'
          name='ctotopcomp'
          placeholder='Text...'
          formik_props={formik}
        />
      </Grid>
      <Grid
        item
        lg={3.5}
        md={4}
        sm={12}
        xs={12}
        sx={classes.text_input_wrapper}
      >
        <TextInputComponent
          label='# VC-Backed Companies Worked At:'
          id='ctovccomp'
          name='ctovccomp'
          placeholder='Text...'
          formik_props={formik}
        />
      </Grid>
      <Grid
        item
        lg={3.5}
        md={4}
        sm={12}
        xs={12}
        sx={classes.text_input_wrapper}
      >
        <TextInputComponent
          label='# Senior Roles at VC-Backed Companies:'
          id='ctoseniorvc'
          name='ctoseniorvc'
          placeholder='Text...'
          formik_props={formik}
        />
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography sx={classes.label}>Prior Founder Roles:</Typography>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='flex-start'
          width={mobileMid ? '100%' : '25%'}
          sx={{ margin: '0 auto' }}
        >
          <Slider
            id='ctofounder'
            name='ctofounder'
            value={formik.values.ctofounder || 0}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.ctofounder && formik.errors.ctofounder}
            marks
            max={5}
            min={0}
            size={mobileMid ? 'small' : 'medium'}
            valueLabelDisplay='auto'
            sx={{
              width: mobileMid ? '185px' : undefined,
              borderRadius: 0,
              '& .MuiSlider-rail': {
                height: 10,
                borderRadius: 0,
                color: '#9A8CFF',
              },
              '& .MuiSlider-track': {
                height: 10,
                borderRadius: 0,
                color: '#9A8CFF',
              },
              '& .MuiSlider-thumb': {
                color: '#9A8CFF',
              },
            }}
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={3}
        lg={3}
        xl={2.3}
        sx={classes.rowAligment}
      >
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>Top-100 Uni?</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='ctotop100'
              name='ctotop100'
              checked={formik.values.ctotop100}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={3}
        lg={3}
        xl={2.3}
        sx={classes.rowAligment}
      >
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item sx={{ mt: '-25px' }}>
            <Typography sx={classes.label}>Relevant Degree?</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='ctodegree'
              name='ctodegree'
              checked={formik.values.ctodegree}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={3}
        lg={3}
        xl={2.3}
        sx={classes.rowAligment}
      >
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>MBA?</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='ctomba'
              name='ctomba'
              checked={formik.values.ctomba}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={3}
        lg={3}
        xl={2.3}
        sx={classes.rowAligment}
      >
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item sx={{ mt: '-25px' }}>
            <Typography
              sx={classes.label}
            >{`Tech Skills (LinkedIn)?`}</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='ctotechskills'
              name='ctotechskills'
              checked={formik.values.ctotechskills}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default STEP_7_OPTIONAL_CTO_OVERRIDES;
