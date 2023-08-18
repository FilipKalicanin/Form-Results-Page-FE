import { Grid, Typography } from '@mui/material';
import CustomSwitchWithLabels from '../helpers/SwitchComponent';

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
};

const STEP_6_BUSINESS_SECTOR_MODEL = ({ formik }) => {
  return (
    <Grid
      container
      spacing={3}
      justifyContent='space-evenly'
      sx={{ pt: '15px' }}
    >
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.3} sx={classes.rowAligment}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>B2B</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='b2b'
              name='b2b'
              checked={formik.values.b2b}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.3} sx={classes.rowAligment}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>B2C</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='b2c'
              name='b2c'
              checked={formik.values.b2c}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.3} sx={classes.rowAligment}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>SaaS</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='saas'
              name='saas'
              checked={formik.values.saas}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.3} sx={classes.rowAligment}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item sx={{ marginTop: '-25px' }}>
            <Typography sx={classes.label}>
              eCommerce/
              <br />
              Marketplace
            </Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='marketplace'
              name='marketplace'
              checked={formik.values.marketplace}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.3} sx={classes.rowAligment}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>Manufacturing</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='manufacturing'
              name='manufacturing'
              checked={formik.values.manufacturing}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.3} sx={classes.rowAligment}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>Subscription</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='subscription'
              name='subscription'
              checked={formik.values.subscription}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.3} sx={classes.rowAligment}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>Commission</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='commission'
              name='commission'
              checked={formik.values.commission}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.3} sx={classes.rowAligment}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>ML/AI</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='deeptech'
              name='deeptech'
              checked={formik.values.deeptech}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.3} sx={classes.rowAligment}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>Healthtech</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='healthtech'
              name='healthtech'
              checked={formik.values.healthtech}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.3} sx={classes.rowAligment}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>Fintech</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='fintech'
              name='fintech'
              checked={formik.values.fintech}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.3} sx={classes.rowAligment}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>Web3</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='web3'
              name='web3'
              checked={formik.values.web3}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.3} sx={classes.rowAligment}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>IoT</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='iot'
              name='iot'
              checked={formik.values.iot}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.3} sx={classes.rowAligment}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>Lawtech</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='lawtech'
              name='lawtech'
              checked={formik.values.lawtech}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.3} sx={classes.rowAligment}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>Biotech</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='biotech'
              name='biotech'
              checked={formik.values.biotech}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.3} sx={classes.rowAligment}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>Logistics</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='logistics'
              name='logistics'
              checked={formik.values.logistics}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.3} sx={classes.rowAligment}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>Energy</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='energy'
              name='energy'
              checked={formik.values.energy}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.3} sx={classes.rowAligment}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>Hardware</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='hardware'
              name='hardware'
              checked={formik.values.hardware}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.3} sx={classes.rowAligment}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>Security</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='security'
              name='security'
              checked={formik.values.security}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2.3} sx={classes.rowAligment}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Typography sx={classes.label}>Sustainability</Typography>
          </Grid>
          <Grid item>
            <CustomSwitchWithLabels
              id='sustainability'
              name='sustainability'
              checked={formik.values.sustainability}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default STEP_6_BUSINESS_SECTOR_MODEL;
