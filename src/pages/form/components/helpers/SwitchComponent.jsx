import { Switch, styled } from '@mui/material';
import React from 'react';

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
    '&.Mui-checked': {
      transform: 'translateX(48px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#9A8CFF',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
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

const CustomSwitchWithLabels = ({ checked, onChange, name, id }) => {
  const isChecked = checked !== undefined ? checked : false;
  return (
    <CustomSwitchWrapper>
      <CustomSwitch
        id={id}
        name={name}
        checked={!!checked}
        onChange={onChange}
      />
      {isChecked && (
        <span
          style={{
            position: 'absolute',
            top: '50%',
            left: '10%',
            transform: 'translateY(-50%)',
            fontSize: '13px',
            color: '#FFFFFF',
            pointerEvents: 'none', 
          }}
        >
          YES
        </span>
      )}
      {!isChecked && (
        <span
          style={{
            position: 'absolute',
            top: '50%',
            right: '12%',
            transform: 'translateY(-50%)',
            fontSize: '13px',
            color: '#FFFFFF',
            pointerEvents: 'none', 
          }}
        >
          NO
        </span>
      )}
    </CustomSwitchWrapper>
  );
};


export default CustomSwitchWithLabels;
