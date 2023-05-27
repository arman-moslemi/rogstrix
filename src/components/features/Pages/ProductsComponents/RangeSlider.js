import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider({max,setFrom,setTo}) {
  const [value, setValue] = React.useState([0, max?max:1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(3333)
    console.log(newValue)
    setFrom(newValue[0])
    setTo(newValue[1])
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={max?max:1000}
        sx={{
            width: 300,
            color: '#f6303f',
          }}
      />
    </Box>
  );
}