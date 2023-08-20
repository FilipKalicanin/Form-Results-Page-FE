import {
  CircularProgress,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { theme } from '../../../styles/Theme';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useContext, useState } from 'react';
import axios from 'axios';
import AuthContext from '../../AuthContext';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const classes = {
  loginContainer: {
    background: `${theme.palette.basic.main}`,
    padding: '30px',
    borderRadius: '10px',
    gap: '1rem',
  },
};

const Login = ({ setOpenLoginDialog }) => {
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { jwt, setJwt } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (jwt) {
      setOpenLoginDialog(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jwt]);
  const handleLoginClick = () => {
    setLoading(true);
  };

  const handleLoginSuccess = (credentialResponse) => {
    const idToken = credentialResponse.credential;
    setLoading(true);
    axios
      .post(
        '/api/login',
        { id_token: idToken },
        {
          headers: {
            Authorization: `Basic ${idToken}`,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          const accessToken = res.data.access_token;
          if (accessToken) {
            setJwt(accessToken);
            Cookies.set('access_token', accessToken, { expires: 1, path: '/' });
            setLoading(false);
            setOpenLoginDialog(false);
            
            window.location.href = '/';
          } else {
            Cookies.remove('name', { path: '/' });
            setLoading(false);
            setOpenLoginDialog(false);
          }
        }
        if (res.status === 400) {
          Cookies.remove('name', { path: '/' });
          setLoading(false);
          setOpenLoginDialog(false);
        }
      })
      .catch((err) => {
        Cookies.remove('name', { path: '/' });
        setLoading(false);

        setError('Please use Episode1 account to sign in and try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      direction='column'
      sx={classes.loginContainer}
    >
      {loading ? (
        <Grid item>
          <Grid
            container
            direction='column'
            sx={{
              padding: '40px', // Increase padding
              borderRadius: '10px',
              gap: '1rem',
              backgroundColor: `${theme.palette.basic.main}`,
            }}
          >
            <Grid item>
              <Typography variant='h5'>Logging in</Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CircularProgress size='3rem' sx={{ color: `#6C5DDE` }} />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid item>
            <Typography variant={mobile ? 'h4' : 'h4'}>Welcome</Typography>
          </Grid>
          <Grid item sx={{ textAlign: 'center' }}>
            <Typography variant={mobile ? 'body2' : 'body1'}>
              Please use your Google account to login.
            </Typography>
          </Grid>
          {error ? (
            <Grid item>
              <Typography sx={{ color: `${theme.palette.status.danger}` }}>
                {error}
              </Typography>
            </Grid>
          ) : null}
          <Grid item>
            <GoogleOAuthProvider clientId='724022775013-8b4r0g4v1md2v840jonppgnj8bu17rqe.apps.googleusercontent.com'>
              <GoogleLogin
                clientId='724022775013-8b4r0g4v1md2v840jonppgnj8bu17rqe.apps.googleusercontent.com'
                onClick={handleLoginClick}
                onSuccess={(credentialResponse) =>
                  handleLoginSuccess(credentialResponse)
                }
                onError={() => {
                  console.log('Login Failed');
                }}
                size='large'
                type='standard'
                theme='filled_purple'
                text='continue_with'
                shape='circle'
                locale='en'
              />
            </GoogleOAuthProvider>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Login;
