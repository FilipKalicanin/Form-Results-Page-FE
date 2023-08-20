import { Box, Divider, Grid, Typography } from '@mui/material';
import { theme } from '../../../styles/Theme';
import React from 'react';

const classes = {
  tableRow: {
    width: '25rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: `${theme.palette.basic.main}`,
    color: `${theme.palette.basic.secondary}`,

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '8px',
    },
  },
  tableRowSummary: {
    display: 'flex',
    width: '47%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '28px 0px 28px 0px',
    borderRadius: '5px',
    backgroundColor: `${theme.palette.basic.main}`,
    color: `${theme.palette.basic.secondary}`,
   // border: `1px solid ${theme.palette.basic.secondary}`,
  },
  scrollFiles: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '500px',
    overflow: 'hidden',
    overflowY: 'auto',
    gap: '14px',
    pb: '5px',
    '&::-webkit-scrollbar': {
      width: 4,
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'ligtgray',
      outline: `1px solid ligtgray`,
    },
    [theme.breakpoints.down('sm')]: {
      maxHeight: '400px',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '5px',
    cursor: 'pointer',
    zIndex: 1,
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    padding: '10px',
    //border: `1px solid ${theme.palette.typography.main}`,
    borderRadius: '5px',
  },
  itemPass: {
   // borderTop: `3px solid ${theme.palette.status.success}`,
  },
  itemFail: {
   // borderTop: `3px solid ${theme.palette.status.danger}`,
  },
  data: {
    fontWeight: 'bold',
  },
};

const Table = ({ selectedResult }) => {
  return (
    <Grid container direction='column' gap='8px'>
      <Grid item>
        <Grid container direction='row' justifyContent='space-between'>
          <Grid
            item
            xs={5.5}
            sm={5.5}
            sx={[
              classes.item,
              selectedResult.overall.decision === 'Passed!'
                ? classes.itemPass
                : classes.itemFail,
            ]}
          >
            <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
        Overall Score
      </Typography>
            <Divider />
            <Typography
              variant='h6'
              sx={{
                width: '56px',
                borderRadius: '15px',
                textAlign: 'center',
                backgroundColor:
                  selectedResult.overall.overall_score < 0
                    ? `#F8E6E4`
                    : `#D7FAE2`,
                opacity: '0.9',
                color:
                  selectedResult.overall.overall_score < 0
                    ? `#B02E49`
                    : `#63977F`,
              }}
            >
              {selectedResult.overall.overall_score}
            </Typography>
          </Grid>
          <Grid
            item
            xs={5.5}
            sm={5.5}
            sx={[
              classes.item,
              selectedResult.overall.decision === 'Passed!'
                ? classes.itemPass
                : classes.itemFail,
            ]}
          >
           <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
        Decision
            </Typography>
            <Divider />

            <Typography
              variant='h6'
              sx={{
                width: '86px',
                borderRadius: '15px',
                textAlign: 'center',
                backgroundColor:
                  selectedResult.overall.overall_score < 0
                    ? `#F8E6E4`
                    : `#D7FAE2`,
                opacity: '0.9',
                color:
                  selectedResult.overall.overall_score < 0
                    ? `#B02E49`
                    : `#63977F`,
              }}
            >
               {selectedResult.overall.decision === 'Passed!'
                ? 'Passed'
                : 'Failed'}
            </Typography>
            
            
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Box sx={classes.scrollFiles}>
          {selectedResult.details.map((el, index) => {
            if (el[1] !== 0) {
              return (
                <React.Fragment key={index}>
                  <Grid item sx={classes.tableRow}>
                    <Typography>
                      {el[0]}
                    </Typography>
                    <Typography
                      sx={{
                        width: '56px',
                        borderRadius: '15px',
                        textAlign: 'center',
                        backgroundColor: el[1] < 0 ? `#F8E6E4` : `#D7FAE2`,
                        opacity: '0.9',
                        color: el[1] < 0 ? `#B02E49` : `#3E7E63`,
                      }}
                    >
                      {el[1]}
                    </Typography>
                  </Grid>
                  <Divider/>
                </React.Fragment>
              );
            } else {
              return null;
            }
          })}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Table;
