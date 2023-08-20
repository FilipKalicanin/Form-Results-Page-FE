import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Table from './table';
import { theme } from '../../../styles/Theme';
import affinity_logo from '../../../assets/affinity_logo.png';
import { useState } from 'react';
import axios from 'axios';

const classes = {
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mainContainer: {
    padding: '15px',
    gap: '15px',
  },
  urlInputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '15px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  urlInput: {
    width: '250px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  urlInputError: {
    width: '250px',
    border: '1px solid red',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  affinityBtn: {
    border: 'transparent',
    width: '60px',
    '&:hover': {
      border: 'transparent',
      backgroundColor: 'transparent',
    },
  },
};

const ResultsDialog = ({ selectedResult, toggleDialog }) => {
  const [affinityURL, setAffinityURL] = useState('');
  const [loadingData, setLoadingData] = useState(false);
  const [dataSentSuccess, setDataSentSuccess] = useState(false);
  const [dataSentError, setDataSentError] = useState(false);
  const [error, setError] = useState(null);
  const mobileMid = useMediaQuery(theme.breakpoints.down('sm'));

  const sendAffinityData = () => {
    setDataSentSuccess(false);
    setDataSentError(false);
    if (affinityURL === '') {
      setError('*URL input cannot be empty');
    } else {
      if (selectedResult !== null) {
        setLoadingData(true);
        axios
          .post('/api/affinity', {
            url: affinityURL,
            result: selectedResult,
          })
          .then((res) => {
            if (res.status === 200) {
              setDataSentSuccess(true);
              setLoadingData(false);
            }
          })
          .catch((err) => {
            setLoadingData(false);
            setDataSentError(true);
          });
      }
    }
  };

  return (
    <Grid container direction='column' sx={classes.mainContainer}>
      <Grid item sx={classes.iconContainer}>
        <CloseIcon
          sx={classes.closeIconStyling}
          onClick={() => toggleDialog()}
        />
      </Grid>
      <Grid item sx={classes.urlInputWrapper}>
        <TextField
          sx={error ? classes.urlInputError : classes.urlInput}
          onChange={(e) => {
            setError(null);
            setAffinityURL(e.target.value);
          }}
          type='url'
          placeholder={error ? '*Mandatory field' : 'https://example.com'}
          pattern='https://.*'
          size='50'
        />
        {loadingData ? (
          <Grid item>
            <CircularProgress size='2rem' />
          </Grid>
        ) : (
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
                height: mobileMid ? '56px' : '56px',
                cursor: 'pointer',
              }}
            />
          </Button>
        )}
      </Grid>
      {dataSentSuccess && (
        <Grid item>
          <Typography
            variant='h5'
            sx={{
              color: `${theme.palette.status.success}`,
              textAlign: 'center',
            }}
          >
            Data sent successfully.
          </Typography>
        </Grid>
      )}
      {dataSentError && (
        <Grid item>
          <Typography
            variant='h5'
            sx={{
              color: `${theme.palette.status.danger}`,
              textAlign: 'center',
            }}
          >
            Data sending failed.
          </Typography>
        </Grid>
      )}
      <Grid item>
        <Table selectedResult={selectedResult} />
      </Grid>
    </Grid>
  );
};

export default ResultsDialog;
