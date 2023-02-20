import React, { useState } from 'react'
import Slider from '@mui/material/Slider'
import { BiBorderAll } from 'react-icons/bi'

const PriceRangeSlider = (props) => {

  const { priceRange, setPriceRange } = props

  const handleChange = (event, newValue) => {
    setPriceRange(newValue)
  }


  return (
    <>
      <div>
        <Slider

          arialabel="price range"
          aria-labelledby="range-slider"
          min={0}
          max={5000}
          step={100}
          value={priceRange}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={val => `$${val}`}
          sx={{
            width: '60%',
            color: '#F2AE3D',
            '& .MuiSlider-thumb': {
              '&:hover, &.Mui-focusVisible': {
                outline: 'none',
                boxShadow: 'none'
              }
            }
          }}
        />
      </div>
    </>
  )
}

export default PriceRangeSlider


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
