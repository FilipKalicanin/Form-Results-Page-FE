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
import CustomSemiCircleProgressWrapper from './CustomSemiCircleProgressWrapper.jsx';


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
    borderLeft: '6px solid #BE123C',
    marginTop: '15px',
    marginBottom: '15px',
  },
  results_box: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '30px',
    width: '100%',
    maxWidth: '560px',
    margin: '0 auto',
  },
  contentInside:{
    width: '100%',
    maxWidth:'435px',
  }
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
      <div className={classes.contentInside}>
      <Grid item xs={12}>
        <Typography variant='h4'  align='center' sx={{ color: 'black', fontWeight: 'bold' ,marginTop:'5px' }}>
          Results
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        container  
        justifyContent='center'
        sx={{ position: 'relative', padding: 'none', maxHeight: '275px' , marginBottom:'-30px'}}
      >
     <CustomSemiCircleProgressWrapper score={result.score}/>
       
      </Grid>
      <Grid item sx={{ width: '100%' }}>
              <Divider
          sx={{ height: '1px', backgroundColor: '#E5E7EB', width: '100%', marginTop: '10px', marginBottom: '15px' }}
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
              sx={{ fontSize: '25px', fontWeight: 'bold', color: 'black' }}
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
                          fontSize: '16px',
                          color: 'black',
                          fontWeight: '650',
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
          sx={{ height: '1px', backgroundColor: '#E5E7EB', width: '100%', marginTop: '10px', marginBottom: '15px' }}
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
              sx={{ fontSize: '25px', fontWeight: 'bold', color: 'black' }}
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
                          fontSize: '16px',
                          color: 'black',
                          fontWeight: '650',
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
       </div>
    </Grid>
  );
};

export default Result;
