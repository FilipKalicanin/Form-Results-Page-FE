import { Box, Grid, Slider, Typography, useMediaQuery } from '@mui/material';
import { theme } from '../../../../styles/Theme';
import TextInputComponent from '../helpers/TextInputComponent';
import CustomSwitchWithLabels from '../helpers/SwitchComponent';

const classes = {
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
};
const STEP_8_OPTIONAL_CEO_OVERRIDES = ({ formik }) => {
  const mobileMid = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Grid container spacing={mobileMid ? 5 : 3} justifyContent='space-evenly'>
      <Grid item lg={3.5} md={4} sm={12} xs={12}>
        <TextInputComponent
          label='Years of experience:'
          id='ceoyrsexp'
          name='ceoyrsexp'
          formik_props={formik}
        />
      </Grid>
      <Grid item lg={3.5} md={4} sm={12} xs={12}>
        <TextInputComponent
          label='# Prior Tech roles:'
          id='ceotechroles'
          name='ceotechroles'
          formik_props={formik}
        />
      </Grid>
      <Grid item lg={3.5} md={4} sm={12} xs={12}>
        <TextInputComponent
          label='# Prior Senior roles:'
          id='ceosenior'
          name='ceosenior'
          formik_props={formik}
        />
      </Grid>
      <Grid item lg={3.5} md={4} sm={12} xs={12}>
        <TextInputComponent
          label='Top Companies Worked At:'
          id='ceotopcomp'
          name='ceotopcomp'
          formik_props={formik}
        />
      </Grid>
      <Grid item lg={3.5} md={4} sm={12} xs={12}>
        <TextInputComponent
          label='# Top Companies Worked at:'
          id='ceoseniortop'
          name='ceoseniortop'
          formik_props={formik}
        />
      </Grid>
      <Grid item lg={3.5} md={4} sm={12} xs={12}>
        <TextInputComponent
          label='# VC-Backed Companies Worked At:'
          id='ceovccomp'
          name='ceovccomp'
          formik_props={formik}
        />
      </Grid>

      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Grid container alignItems='center' justifyContent='space-evenly'>
          <Grid item>
            <TextInputComponent
              label='# Senior Roles at VC-Backed Companies:'
              id='ceoseniorvc'
              name='ceoseniorvc'
              formik_props={formik}
            />
          </Grid>
          <Grid item>
            <Typography sx={classes.label}>Prior Founder Roles:</Typography>
            <Box
              display='flex'
              flexDirection='row'
              alignItems='center'
              justifyContent='center'
              width={mobileMid ? '100%' : '100%'}
              mx='auto'
            >
              <Slider
                id='ceofounder'
                name='ceofounder'
                value={formik.values.ceofounder || 0}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.ceofounder && formik.errors.ceofounder}
                marks
                max={5}
                min={0}
                size={mobileMid ? 'small' : 'medium'}
                valueLabelDisplay='auto'
                sx={{
                  width: '100%',
                  margin: '0 auto',
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
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={5} xl={4}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>Top 100 Uni?</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='ceotop100'
              name='ceotop100'
              checked={formik.values.ceotop100}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={5} xl={4}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>Relevant Degree?</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='ceodegree'
              name='ceodegree'
              checked={formik.values.ceodegree}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={5} xl={4}>
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
              id='ceomba'
              name='ceomba'
              checked={formik.values.ceomba}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={5} xl={4}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>PhD?</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='ceophd'
              name='ceophd'
              checked={formik.values.ceophd}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={5} xl={4}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography
              sx={classes.label}
            >{`Tech Skills (LinkedIn)?`}</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='ceoskills'
              name='ceoskills'
              checked={formik.values.ceoskills}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={5} xl={4}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>Early Promotion?</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='ceopromotion'
              name='ceopromotion'
              checked={formik.values.ceopromotion}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default STEP_8_OPTIONAL_CEO_OVERRIDES;
