import {
  Alert,
  Button,
  CircularProgress,
  ClickAwayListener,
  Dialog,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { theme } from '../../styles/Theme';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import mainLogo from '../../assets/e1logo.svg';
import axios from 'axios';
import Cookies from 'js-cookie';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import Result from './components/Result';
import affinity_logo from '../../assets/affinity_logo.png';
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
const classes = {
  page: {
    width: '100vw',
    overflow: 'auto',
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
    [theme.breakpoints.down('sm')]: {
      borderRadius: '10px 10px 0 0',
      height: 'min-content',
      alignSelf: 'end',
    },
    maxWidth: '720px',
  },
  form_wrapper: {
    width: '50%',
    mb: '30px',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      margin: '0 auto',
    },
  },
  affinityBtn: {
    backgroundColor: 'white',
    padding: 'none',
    borderRadius: '100%',
    border: 'transparent',
    width: '60px',
    '&:hover': {
      border: 'transparent',
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('md')]: {
      mt: '15px',
      mb: '15px',
    },
  },
  closeIconStyling: {
    padding: '4px',
    borderRadius: '100px',
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    cursor: 'pointer',
    '&:hover': {
      fill: '#FF5349',
    },
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

const ResultsPage = () => {
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  const mobileMid = useMediaQuery(theme.breakpoints.down('sm'));
  let navigate = useNavigate();
  const [affinityModal, setAffinityModal] = useState(false);
  const [modalTextInput, setModalTextInput] = useState('');
  const [loading, setLoading] = useState(true);
  // const [userData, setUserData] = useState(null);
  const { user_id } = useParams();
  const client_id = Cookies.get('access_token');
  const [error, setError] = useState(null);
  const [warningError, setWarningError] = useState(false);
  const userData = {
    score: 48,
    strengths: ['asdasda', '-daaaaaaaaaadadada', 'dasdasdasdasdasd'],
    weaknesses: [
      'dddddddddddddddd',
      'dasdadadasdasdadasdasd',
      'dddddddddddddddd',
    ],
    warning: 'DOODOODODODODOD',
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`/api/results/${user_id}`);
  //       setUserData(response.data.data);
  //       if (response.data.data.warning) {
  //         setWarningError(true);
  //         setTimeout(() => {
  //           setWarningError(null);
  //         }, 5000);
  //       }
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setTimeout(() => {
  //         setError(null);
  //       }, 5000);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [user_id]);

  const toggleModal = () => {
    setAffinityModal(!affinityModal);
  };

  const sendAffinityData = () => {
    axios
      .post('/api/preSeedScore', {
        clientId: client_id,
        data: modalTextInput,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        setWarningError('Data was not sent. Please, try again.');
        setTimeout(() => {
          setWarningError(null);
        }, 5000);
        setLoading(false);
      });
  };

  const logout = () => {
    axios
      .post('/api/logout', {
        headers: {
          Authorization: ``,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        Cookies.remove('access_token');
        window.location.reload(false);
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
        <Grid item sx={{ width: '100%', ml: '2%', alignItems: 'start' }}>
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate('/')}
            sx={{ color: 'white' }}
          >
            Back
          </Button>
        </Grid>
        {/* {loading ? (
          <Grid
            item
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress sx={{ color: 'white' }} />
          </Grid>
        ) : error ? (
          <Alert
            variant='filled'
            severity='warning'
            sx={{
              position: 'fixed',
              top: 5,
              left: 0,
              right: 0,
              zIndex: 9999,
              margin: '0 auto',
              width: '30%',
              borderRadius: '20px',
              backgroundColor: '#FEDD5',
              color: '#FEDD5',
            }}
          >
            <Typography>
              Error while fetching data. Please, try again.
            </Typography>
          </Alert>
        ) : (
          <>
            {warningError && (
              <Alert
                variant='filled'
                severity='warning'
                sx={{
                  position: 'fixed',
                  top: 5,
                  left: 0,
                  right: 0,
                  zIndex: 9999,
                  margin: '0 auto',
                  width: '30%',
                  borderRadius: '20px',
                  backgroundColor: '#FEDD5',
                  color: '#FEDD5',
                }}
              >
                <Typography>Data was not sent. Please, try again.</Typography>
              </Alert>
            )}
            <Grid item sx={classes.form_wrapper}>
              {userData ? (
                <Result result={userData} />
              ) : (
                <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography variant='h5' sx={{ color: 'white' }}>
                    No Data Fetched
                  </Typography>
                </Grid>
              )}
            </Grid> */}
        <Grid item sx={classes.form_wrapper}>
          {userData ? (
            <Result result={userData} />
          ) : (
            <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant='h5' sx={{ color: 'white' }}>
                No Data Fetched
              </Typography>
            </Grid>
          )}
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: !mobileMid ? 'fixed' : undefined,
            bottom: '1rem',
          }}
        >
          <Button
            variant='outlined'
            sx={classes.affinityBtn}
            onClick={() => toggleModal()}
          >
            <img
              alt='affinity_logo'
              src={affinity_logo}
              style={{
                width: mobileMid ? 'auto' : 'auto',
                height: mobileMid ? '56px' : '56px',
                cursor: 'pointer',
              }}
            />
          </Button>
        </Grid>
        {/* </>
        )} */}
      </Grid>
      <Dialog
        open={affinityModal}
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
        <ClickAwayListener onClickAway={() => setAffinityModal(false)}>
          <Grid
            container
            direction='column'
            spacing={2}
            sx={{ background: 'white', padding: '15px', borderRadius: '20px' }}
          >
            <Grid item sx={classes.iconContainer}>
              <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                Affinity
              </Typography>
              <CloseIcon
                sx={classes.closeIconStyling}
                onClick={() => toggleModal()}
              />
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                type='url'
                pattern='https?://.+'
                placeholder='https://example.com'
                value={modalTextInput}
                onChange={(e) => setModalTextInput(e.target.value)}
                inputProps={{
                  style: {
                    height: '8px',
                  },
                }}
              />
              <Button
                variant='outlined'
                sx={classes.affinityBtn}
                onClick={() => sendAffinityData()}
              >
                <img
                  alt='affinity_logo'
                  src={affinity_logo}
                  style={{
                    width: mobileMid ? 'auto' : 'auto',
                    height: mobileMid ? '41px' : '41px',
                    cursor: 'pointer',
                  }}
                />
              </Button>
            </Grid>
          </Grid>
        </ClickAwayListener>
      </Dialog>
    </>
  );
};

export default ResultsPage;
