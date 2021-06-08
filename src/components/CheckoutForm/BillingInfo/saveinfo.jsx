import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography } from '@material-ui/core';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <Typography variant='h6'> Lưu thông tin </Typography>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="1" control={<Radio />} label="Lưu thông tin cho lần mua kế tiếp" />
        <FormControlLabel value="" control={<Radio />} label="Không lưu thông tin" />
      </RadioGroup>
    </FormControl>
  );
}