import { Box, Grid, Slider, Typography, useMediaQuery } from '@mui/material';
import { theme } from '../../../../styles/Theme';

const classes = {
  text_input_wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  rowAligment: {
    width: '25%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.down('lg')]: {
      width: '90%',
    },
  },
  rowAligmentSlider: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
    },
  },
};

const STEP_3_CEO_OCEAN_SCORE = ({ formik }) => {
  const mobileMid = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Grid container direction='column' gap={mobileMid ? '1rem' : '2.3rem'}>
      <Grid item sx={classes.rowAligment}>
        <Typography sx={classes.label}>O: </Typography>
        <Box
          display='flex'
          flexDirection={'row'}
          alignItems='center'
          justifyContent='flex-start'
          width='100%'
        >
          <Slider
            id='ocean_o'
            name='ocean_o'
            value={formik.values.ocean_o || 0}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.ocean_o && formik.errors.ocean_o}
            marks
            max={2}
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
      <Grid item sx={classes.rowAligment}>
        <Typography sx={classes.label}>C: </Typography>
        <Box
          display='flex'
          flexDirection={'row'}
          alignItems='center'
          justifyContent='flex-start'
          width='100%'
        >
          <Slider
            id='ocean_c'
            name='ocean_c'
            value={formik.values.ocean_c || 0}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.ocean_c && formik.errors.ocean_c}
            marks
            max={2}
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
      <Grid item sx={classes.rowAligment}>
        <Typography sx={classes.label}>E: </Typography>
        <Box
          display='flex'
          flexDirection={'row'}
          alignItems='center'
          justifyContent='flex-start'
          width='100%'
        >
          <Slider
            id='ocean_e'
            name='ocean_e'
            value={formik.values.ocean_e || 0}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.ocean_e && formik.errors.ocean_e}
            marks
            max={2}
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
      <Grid item sx={classes.rowAligment}>
        <Typography sx={classes.label}>A: </Typography>
        <Box
          display='flex'
          flexDirection={'row'}
          alignItems='center'
          justifyContent='flex-start'
          width='100%'
        >
          <Slider
            id='ocean_a'
            name='ocean_a'
            value={formik.values.ocean_a || 0}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.ocean_a && formik.errors.ocean_a}
            marks
            max={2}
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
      <Grid item lg={5} md={12} sm={12} xs={12} sx={classes.rowAligment}>
        <Typography sx={classes.label}>N: </Typography>
        <Box
          display='flex'
          flexDirection={'row'}
          alignItems='center'
          justifyContent='flex-start'
          width='100%'
        >
          <Slider
            id='ocean_n'
            name='ocean_n'
            value={formik.values.ocean_n || 0}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.ocean_n && formik.errors.ocean_n}
            marks
            max={2}
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
    </Grid>
  );
};

export default STEP_3_CEO_OCEAN_SCORE;
