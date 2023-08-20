import { Divider, Grid, Typography, useMediaQuery } from '@mui/material';
import { theme } from '../../../styles/Theme';

import React from 'react';
const classes = {
  main_container: {
    border: '2px solid #EBEBED',
    borderRadius: '18px',
    padding: '12px 0px 12px 0px',
    [theme.breakpoints.down('lg')]: {
      padding: '8px 0px 8px 0px',
      gap: '10px',
    },
  },
  element_wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '20px',
    },
  },
  element_wrapper_selected: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    gap: '10px',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '20px',
    },
  },
  additional_padding: {
    paddingLeft: '30px',
  },
  image_wrapper: {
    // cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      marginRight: '10px',
    },
  },
  details_wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  details_text_step: {
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    hyphens: 'auto',
    fontSize: '12px',
    color: '#826CB5',
  },
  details_text_name: {
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    fontWeight: 'bold',
    hyphens: 'auto',
    fontSize: '14px',
    color: '#020641',
  },
};

const MainMenu = ({
  selectMenuItem,
  availableOptions,
  currentFormStep,
  handleSubmit,
  formik,
}) => {
  const mobileMid = useMediaQuery(theme.breakpoints.down('lg'));
  const mobileMidLg = useMediaQuery(theme.breakpoints.down('midLg'));

  const handleImageClick = async (step) => {
    await handleSubmit(formik.values); 
    selectMenuItem(step); 
  };

  return (
    <Grid
      container
      sx={classes.main_container}
      direction={mobileMid ? 'column' : 'row'}
      justifyContent='space-between'
      alignItems={mobileMid ? 'flex-start' : ''}
    >
      {availableOptions.map((el, index) => (
        <React.Fragment key={index}>
          <Grid
            item
            xl={el.selected ? 2.4 : 1}
            lg={el.selected ? 2.8 : 1}
            md={12}
            sm={12}
            xs={12}
            paddingLeft={
              el.selected && el.id === 1 && !mobileMid ? '20px' : undefined
            }
            sx={
              el.selected
                ? classes.element_wrapper_selected
                : classes.element_wrapper
            }
          >
            <Grid item sx={classes.image_wrapper}>
              <img
                src={
                  currentFormStep > el.id
                    ? el.logo_completed
                    : el.selected
                    ? el.logo_selected
                    : el.logo
                }
                alt='logo'
                width={mobileMidLg ? '25px' : '42px'}
                height={mobileMidLg ? '25px' : '42px'}
                style={{ cursor: 'pointer' }}
                onClick={() => handleImageClick(el.id)}
              />
            </Grid>
            {(el.selected || mobileMid) && (
              <Grid item sx={classes.details_wrapper}>
                <Typography sx={classes.details_text_step}>
                  {el.step}
                </Typography>
                <Typography
                  sx={classes.details_text_name}
                  color={el.selected ? theme.palette.primary.main : 'inherit'}
                >
                  {el.name}
                </Typography>
              </Grid>
            )}
          </Grid>

          {index !== availableOptions.length - 1 && !mobileMid && (
            <Grid item>
              <Divider
                orientation='vertical'
                sx={{ width: '2px', backgroundColor: '#EBEBED' }}
              />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default MainMenu;
