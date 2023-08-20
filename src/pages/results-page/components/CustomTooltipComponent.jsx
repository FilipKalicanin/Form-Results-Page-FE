import React from 'react';
import { Tooltip } from '@mui/material';
import { styled } from '@mui/system';

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    classes={{ popper: className, tooltip: 'tooltip', arrow: 'arrow' }}
  />
))(({ theme }) => ({
  '& .tooltip': {
    backgroundColor: 'white',
    color: 'black',
    boxShadow: theme.shadows[4],
    fontSize: 14,
    fontWeight: '400',
    width: 'fit-content',
    padding: theme.spacing(1, 1.5),
    borderRadius: 4,
    border: '0.3px solid #724FCE',
  },
  '& .arrow': {
    color: '#724FCE',
    '&::before': {
      borderColor: 'transparent black transparent black',
    },
  },
}));

const CustomTooltipComponent = ({ children }) => {
  return (
    <CustomTooltip title='Click submit data to Affinity!' arrow>
      {children}
    </CustomTooltip>
  );
};

export default CustomTooltipComponent;
