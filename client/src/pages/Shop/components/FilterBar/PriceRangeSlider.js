import Slider from '@mui/material/Slider'

const PriceRangeSlider = ({ priceRange, setPriceRange }) => {

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
