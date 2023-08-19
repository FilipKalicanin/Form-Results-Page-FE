import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { SemiCircleProgress } from 'react-semicircle-progressbar';
import CircleIcon from '@mui/icons-material/Circle';

const classes = {
  list: {
    backgroundColor: '#D1FAE5',
    borderRadius: '10px',
    borderLeft: '5px solid #047857',
    marginTop: '15px',
    marginBottom: '15px',
  },
  list_weakness: {
    backgroundColor: '#FFE4E6',
    borderRadius: '10px',
    borderLeft: '5px solid #BE123C',
    marginTop: '15px',
    marginBottom: '15px',
  },
  results_box: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '30px',
    width: '100%',
    maxWidth: '520px',
    margin: '0 auto',
  },
};

const Result = ({ result }) => {
  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      direction='column'
      sx={classes.results_box}
    >
      <Grid item xs={12}>
        <Typography variant='h4' sx={{ color: 'black', fontWeight: 'bold' }}>
          Results
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ position: 'relative', padding: 'none' }}>
        <SemiCircleProgress
          percentage={result.score ? result.score : 0}
          size={{
            width: 250,
            height: 200,
          }}
          fontStyle={{ fontSize: '16px', fill: '#047857' }}
          hasBackground={true}
          strokeWidth={8}
          strokeColor='#047857'
          bgStrokeColor='#E5E7EB'
        />
      </Grid>
      <Grid item sx={{ width: '100%' }}>
        <Divider
          sx={{ height: '1px', backgroundColor: '#E5E7EB', width: '100%' }}
        />
      </Grid>
      {result.strengths && result.strengths.length > 0 && (
        <>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              width: '100%',
              margin: '15px 0 15px 0',
            }}
          >
            <Typography
              sx={{ fontSize: '24px', fontWeight: 'bold', color: 'black' }}
            >
              Strengths
            </Typography>
            <List sx={classes.list}>
              {result.strengths.map((result, index) => {
                return (
                  <ListItem sx={{ padding: '0px 16px' }} key={index}>
                    <ListItemIcon sx={{ minWidth: '16px' }}>
                      <CircleIcon sx={{ fontSize: '8px', fill: 'black' }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        sx={{
                          fontSize: '14px',
                          color: 'black',
                          fontWeight: 'bold',
                        }}
                      >
                        {result}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid item sx={{ width: '100%' }}>
            <Divider
              sx={{ height: '1px', backgroundColor: '#E5E7EB', width: '100%' }}
            />
          </Grid>
        </>
      )}

      {result.weaknesses && result.weaknesses.length > 0 && (
        <>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              width: '100%',
              margin: '15px 0 0 0',
            }}
          >
            <Typography
              sx={{ fontSize: '24px', fontWeight: 'bold', color: 'black' }}
            >
              Weaknesses
            </Typography>
            <List sx={classes.list_weakness}>
              {result.weaknesses.map((result, index) => {
                return (
                  <ListItem sx={{ padding: '0px 16px' }} key={index}>
                    <ListItemIcon sx={{ minWidth: '16px' }}>
                      <CircleIcon sx={{ fontSize: '8px', fill: 'black' }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        sx={{
                          fontSize: '14px',
                          color: 'black',
                          fontWeight: 'bold',
                        }}
                      >
                        {result}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Result;
