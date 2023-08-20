import { Switch, styled } from '@mui/material';
import React, { useState, useEffect } from 'react';

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: '90px',
  height: '44px',
  borderRadius: '32.5px',
  padding: 0,
  position: 'relative',
  '& .MuiSwitch-switchBase': {
    padding: '3px',
    transitionDuration: '300ms',
    zIndex: 2,
    '&:not(.Mui-checked):not(.Mui-disabled)': {
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#ED4135', 
        opacity: 1,
        border: 0,
      },
    },
    
    '&.Mui-checked': {
      transform: 'translateX(48px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#6EDD5F',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        backgroundColor: '#ED4135',
        opacity: 0.5,
      },
    },
    '&.Mui-disabled': {
      color: '#C7C7D3F', // Button Circle in Neutral state
      transform: 'translateX(24px)',
      '& + .MuiSwitch-track': {
        backgroundColor: 'BDCDD6', // Button background in Neutral state
        opacity: 1,
        border: 0,
      },
    },
    
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 37,
    height: 37,
    position: 'relative',
  },
  
  '& .MuiSwitch-track': {
    borderRadius: 25 / 2,
    backgroundColor: '#E9E9EA', 
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 300,
    }),
  },
}));

const CustomSwitchWrapper = styled('div')(() => ({
  position: 'relative',
  display: 'inline-block',
}));

const TripleCustomSwitchWithLabels = ({ checked, onChange, name, id }) => {
  const [value, setValue] = useState(checked || '');

  useEffect(() => {
    setValue(checked);
  }, [checked]);

  const handleChange = () => {
    let newValue;
    if (value === ''){ newValue = 'yes'; } 
    else if (value === 'yes') { newValue = 'no'; }
    else if (value === 'no') { newValue = ''; }
    setValue(newValue);
    if (onChange) {
      const event = {
        target: {
          name,
          value: newValue,
        },
      };
      onChange(event);
    }
  }

  return (
    <CustomSwitchWrapper onClick={handleChange}>
      <CustomSwitch
        id={id}
        name={name}
        checked={value === 'yes'}
        disabled={value === ''}
      />
      <span
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '13px',
          color: value === ''? '#000000': '#FFFFFF',
          pointerEvents: 'none',
          left: value === 'yes' ? '10%' : value === 'no' ? '70%' : '15%',
        }}
      >
        {value.toUpperCase()}
      </span>
    </CustomSwitchWrapper>
  );
};

export default TripleCustomSwitchWithLabels;
