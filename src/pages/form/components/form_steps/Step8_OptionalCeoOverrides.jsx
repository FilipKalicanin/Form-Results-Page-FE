import { Box, Grid, Slider, Typography, useMediaQuery } from '@mui/material';
import { theme } from '../../../../styles/Theme';
import TextInputComponent from '../helpers/TextInputComponent';
import CustomSwitchWithLabels from '../helpers/SwitchComponent';
import TripleCustomSwitchWithLabels from '../helpers/TripleSwitchComponent';

import React, { useState, useEffect } from 'react';
const classes = {
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
};
const STEP_8_OPTIONAL_CEO_OVERRIDES = ({ formik }) => {
  const mobileMid = useMediaQuery(theme.breakpoints.down('lg'));

  const [hideTooltip, setHideTooltip] = React.useState(true);
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
  onChange={(event, value) => {
    formik.handleChange(event);
    setHideTooltip(value === -1);
  }}
  onBlur={formik.handleBlur}
  error={formik.touched.ceofounder && formik.errors.ceofounder}
  marks={[
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
  ]}
  max={5}
  min={-1}
  size={mobileMid ? 'small' : 'medium'}
  valueLabelDisplay='auto'
  valueLabelFormat={(value) => value !== -1 ? value : ''}
  sx={{
    width: mobileMid ? '185px' : undefined,
    borderRadius: 0,
    '& .MuiSlider-rail': {
      height: 10,
      borderRadius: 0,
      color: formik.values.ceofounder === -1 ? 'grey' : '#9A8CFF',
    },
    '& .MuiSlider-track': {
      height: 10,
      borderRadius: 0,
      color: formik.values.ceofounder === -1 ? 'grey' : '#9A8CFF',
    },
    '& .MuiSlider-thumb': {
      color: formik.values.ceofounder === -1 ? 'grey' : '#9A8CFF',
    },
    '& .MuiSlider-valueLabelOpen': {
      display: hideTooltip ? 'none' : 'flex',
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
            <TripleCustomSwitchWithLabels
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
            <TripleCustomSwitchWithLabels
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
            <TripleCustomSwitchWithLabels
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
            <TripleCustomSwitchWithLabels
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
            <TripleCustomSwitchWithLabels
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
            <TripleCustomSwitchWithLabels
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
