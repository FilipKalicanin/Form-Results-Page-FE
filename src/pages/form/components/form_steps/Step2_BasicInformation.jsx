import {
  Box,
  Button,
  Grid,
  Slider,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { theme } from '../../../../styles/Theme';
import dollarSVG from '../../../../assets/Currency/dollar-sign-solid.svg';
import euroSVG from '../../../../assets/Currency/euro-sign-solid.svg';
import sterlingSVG from '../../../../assets/Currency/sterling-sign-solid.svg';
import CustomSwitchWithLabels from '../helpers/SwitchComponent';
import TextInputComponent from '../helpers/TextInputComponent';

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
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  rowAligmentSlider: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
    },
  },
  currencyBtn: {
    variant: 'outlined',
    border: '1px solid transparent',
    boxShadow: 'none',
    backgroundColor: '#dedaff',
    borderRadius: '15px',
    '&:hover': {
      boxShadow: 'none',
      border: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: '#dedaff',
    },
  },
  currencyBtnSelected: {
    variant: 'contained',
    border: '1px solid transparent',
    boxShadow: 'none',
    borderRadius: '15px',
    backgroundColor: '#9A8CFF',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: '#9A8CFF',
    },
  },
};

const STEP_2_BASIC_INFORMATION = ({ formik }) => {
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  const mobileMid = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Grid
      container
      direction={mobileMid ? 'column' : 'row'}
      justifyContent='center'
      alignItems='center'
      gap={5}
    >
      <Grid
        item
        lg={3.5}
        md={3.5}
        sm={12}
        xs={12}
        sx={classes.text_input_wrapper}
      >
        <TextInputComponent
          label='Company Name:'
          id='company_name'
          name='company_name'
          placeholder='Insert Company Name'
          formik_props={formik}
        />
      </Grid>
      <Grid
        item
        lg={3.5}
        md={3.5}
        sm={12}
        xs={12}
        sx={classes.text_input_wrapper}
      >
        <TextInputComponent
          label='Company Age (Months):'
          id='company_age'
          name='company_age'
          placeholder='Eg. 10'
          formik_props={formik}
          type='number'
        />
      </Grid>
      <Grid
        item
        lg={3.5}
        md={3.5}
        sm={12}
        xs={12}
        sx={classes.text_input_wrapper}
      >
        <TextInputComponent
          label='Pre-Seed Size:'
          id='pre_seed_size'
          name='pre_seed_size'
          placeholder='Eg. 10'
          formik_props={formik}
          type='number'
        />
      </Grid>
      <Grid item lg={5} md={12} sm={12} xs={12} sx={classes.rowAligment}>
        <Typography sx={classes.label}>Currency: </Typography>
        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#dedaff',
            borderRadius: '15px',
          }}
        >
          <Button
            sx={
              formik.values.currency === 'GBP'
                ? classes.currencyBtnSelected
                : classes.currencyBtn
            }
            onClick={() => formik.setFieldValue('currency', 'GBP')}
          >
            <img
              src={sterlingSVG}
              width={mobileMid ? '20px' : '30px'}
              height={mobileMid ? '20px' : '30px'}
              alt='sterling_sign'
            />
          </Button>
          <Button
            sx={
              formik.values.currency === 'EUR'
                ? classes.currencyBtnSelected
                : classes.currencyBtn
            }
            onClick={() => formik.setFieldValue('currency', 'EUR')}
          >
            <img
              src={euroSVG}
              width={mobileMid ? '20px' : '30px'}
              height={mobileMid ? '20px' : '30px'}
              alt='euro_sign'
            />
          </Button>
          <Button
            sx={
              formik.values.currency === 'USD'
                ? classes.currencyBtnSelected
                : classes.currencyBtn
            }
            onClick={() => formik.setFieldValue('currency', 'USD')}
          >
            <img
              src={dollarSVG}
              width={mobileMid ? '20px' : '30px'}
              height={mobileMid ? '20px' : '30px'}
              alt='dolar_sign'
            />
          </Button>
        </Grid>
      </Grid>
      <Grid item lg={5} md={12} sm={12} xs={12} sx={classes.rowAligment}>
        <Typography sx={classes.label}>Founders: </Typography>
        <Box
          display={mobile ? 'flex' : 'block'}
          flexDirection={mobile ? 'column' : 'row'}
          alignItems={mobile ? 'start' : 'center'}
          justifyContent='center'
          width='100%'
        >
          <Slider
            id='founders'
            name='founders'
            value={formik.values.founders || 0}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.founders && formik.errors.founders}
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
      <Grid item lg={5} md={12} sm={12} xs={12} sx={classes.rowAligment}>
        <Typography sx={classes.label}>UK-Based?: </Typography>
        <CustomSwitchWithLabels
          id='uk_based'
          name='uk_based'
          checked={formik.values.uk_based}
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid item lg={5} md={12} sm={12} xs={12} sx={classes.rowAligment}>
        <Typography sx={classes.label}>Has CTO?: </Typography>
        <CustomSwitchWithLabels
          id='has_cto'
          name='has_cto'
          checked={formik.values.has_cto}
          onChange={formik.handleChange}
        />
      </Grid>
    </Grid>
  );
};

export default STEP_2_BASIC_INFORMATION;
