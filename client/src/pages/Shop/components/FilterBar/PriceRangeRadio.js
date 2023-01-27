import React, { useState } from 'react'
import Slider from '@mui/material/Slider'
import { BiBorderAll } from 'react-icons/bi'

const PriceRangeRadio = (props) => {


  const [value, setValue] = useState([500, 5000])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }


  return (
    <>
      <div>
        <Slider

          aria-label="price range"
          aria-labelledby="range-slider"
          min={0}
          max={10000}
          step={500}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={val => `$${val}`}
          sx={{
            width: '60%',
            color: '#F2AE3D'
            // '& .MuiSlider-thumb': {
            //   '&:hover, &.Mui-focusVisible': {
            //     outline: 'none'
            //   }
            // }
          }}
        />
      </div>
    </>
  )
}

export default PriceRangeRadio


  // < div className = "form-check" >
  //       <input
  //         className="form-check-input"
  //         type="radio"
  //         value={value}
  //         checked={priceRange === value}
  //         onChange={(e) => {
  //           setPriceRange(e.target.value)
  //         }}
  //       />

  //       <label className="form-check-label">{value}</label>

  //     </ >
