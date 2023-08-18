import { Grid, TextField, Typography } from '@mui/material';

const classes = {
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  labelWrapper: {
    height: '56px',
    display: 'flex',
    alignItems: 'flex-end',
  },
  inputField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      border: '1px solid #EBEBED',
    },
  },
};

const TextInputComponent = ({
  formik_props,
  name,
  id,
  placeholder,
  label,
  type,
}) => {
 
  
  return (
    <>
      <Grid item sx={classes.labelWrapper}>
        <Typography sx={classes.label}>{label}</Typography>
      </Grid>
      <TextField
        id={id}
        name={name}
        placeholder={placeholder}
        value={formik_props.values[name]}
        onChange={formik_props.handleChange}
        onBlur={formik_props.handleBlur}
        error={formik_props.touched[name] && !!formik_props.errors[name]}
        helperText={formik_props.touched[name] && formik_props.errors[name]}
        sx={classes.inputField}
        type={type ? type : 'text'}
        fullWidth
      />
    </>
  );
};

export default TextInputComponent;
