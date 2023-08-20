import React, { useEffect, useState } from 'react';
import { Button, Dialog, Grid, useMediaQuery } from '@mui/material';
import mainLogo from '../../assets/e1logo.svg';
import { theme } from '../../styles/Theme';
import axios from 'axios';
import Login from '../signIn-page/components/Login';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Cookies from 'js-cookie';
import UserForm from '../form';
const classes = {
  page: {
    width: '100vw',
    overflow: 'auto',
    maxHeight: '100vh',
  },
  mainContainer: {
    backgroundColor: `${theme.palette.basic.main}`,
    borderRadius: '10px',
    padding: '2rem 3rem 2rem 3rem',
    boxShadow:
      'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
  },
  bold: {
    fontWeight: 'bold',
  },
  textAlign: {
    display: 'flex',
    justifyContent: 'center',
  },
  logoWrapper: {
    paddingLeft: '2%',
    paddingRight: '2%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  loadingAnimationContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '10px 10px 0 0',
      height: 'min-content',
      alignSelf: 'end',
    },
  },
  form_wrapper: {
    width: '50%',
    mb: '30px',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      mt: '30px',
    },
  },
};

const MainPage = () => {
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  const mobileMid = useMediaQuery(theme.breakpoints.down('sm'));

  // login dialog display
  const [openLoginDialog, setOpenLoginDialog] = useState(true);

  useEffect(() => {
    if (openLoginDialog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [openLoginDialog]);

  const logout = () => {
    axios
      .post('/api/logout', {
        headers: {
          Authorization: ``,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log('LOGOUT');
        Cookies.remove('access_token');
        window.location.reload(false);
        console.log(res);
        Cookies.remove('access_token');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
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
          <Button
            variant='outlined'
            sx={{ border: '1px solid white', color: 'white' }}
            onClick={() => logout()}
            startIcon={<LogoutOutlinedIcon sx={{ color: 'white' }} />}
          >
            Logout
          </Button>
        </Grid>
        <Grid item sx={classes.form_wrapper}>
          <UserForm />
        </Grid>
      </Grid>
      <Dialog
        open={openLoginDialog}
        fullScreen={mobileMid}
        disableScrollLock
        PaperProps={{
          sx: classes.dialog,
        }}
        sx={{
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(0,0,30,0.4)',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        <Login setOpenLoginDialog={setOpenLoginDialog} />
      </Dialog>
    </>
  );
};

export default MainPage;
