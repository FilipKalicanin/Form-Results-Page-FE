import React, { useState } from 'react';
import {
  CircularProgress,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Login from './components/Login';
import { theme } from '../../styles/Theme';
import mainLogo from '../../assets/e1logo.svg';

const classes = {
  page: {
    width: '100wv',
  },
  mainContainer: {
    backgroundColor: `${theme.palette.basic.main}`,
    borderRadius: '10px',
    padding: '2rem 3rem 2rem 3rem',
    boxShadow:
      '0px 57px 66px -50px rgba(0, 0, 0, 0.3); 0px 15px 12px 0px rgba(0,0,0,0.22);',
  },

  logoWrapper: {
    paddingLeft: '2%',
    display: 'flex',
    alignItems: 'center',
  },
};

const LoginPage = () => {
  const { loading, setLoading } = useState(false);
  const { error, setError } = useState(null);
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      sx={classes.page}
    >
      <Grid item xs={12} sx={classes.logoWrapper}>
        <img
          src={mainLogo}
          alt='logo'
          style={{
            width: mobile ? '5rem' : '15rem',
            height: mobile ? '3rem' : '10rem',
            fill: 'white',
          }}
        />
      </Grid>
      <Grid
        item
        xs={9}
        sm={9}
        md={7.5}
        lg={4.5}
        xl={3.5}
        sx={classes.mainContainer}
      >
        {loading ? (
          <CircularProgress
            size='5rem'
            sx={{ color: `${theme.palette.basic.main}` }}
          />
        ) : (
          <Login setLoading={setLoading} setError={setError} />
        )}
        {error && (
          <Typography sx={{ color: `${theme.palette.status.danger}` }}>
            {error}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default LoginPage;
