import React, { useState, useEffect } from 'react'
import { taiwan } from 'data/taiwan-data'

const DynamicSelect = () => {
  // TODO: make object to handle input change
  const [firstOption, setFirstOption] = useState('')
  const [secondOption, setSecondOption] = useState('')
  const options = taiwan

  const handleFirstOptionChange = (event) => {
    setFirstOption(event.target.value)
    setSecondOption('')
  }
  const handleSecondOptionChange = (event) => {
    setSecondOption(event.target.value)
  }
  console.log(firstOption, secondOption)
  return (
    <>
      <div className='label-place'>
        <label htmlFor="city">城市</label>
        <select
          name='city'
          id='city'
          value={firstOption}
          onChange={handleFirstOptionChange}
        >
          <option>--- 請選擇 ---</option>
          {
            options.map((item) => (
              <option key={item.value} value={item.value}>
                {item.value}
              </option>
            ))
          }
        </select>
      </div>
      <div className='label-place'>
        <label htmlFor="districts">區域</label>
        <select
          name='districts'
          id='districts'
          value={secondOption}
          onChange={handleSecondOptionChange}
        >
          <option>--- 請選擇 ---</option>
          {
            firstOption !== '' &&
            options.map(item => (
              item.value === firstOption &&
              item.districts.map(item => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))
            ))
          }
        </select>
      </div>
      <div className='label-place'>
        <label htmlFor="postalCode">郵遞區號</label>
        <select
          name='postalCode'
          id='postalCode'
          disabled
        >
          {
            firstOption !== '' &&
            options.map(item => (
              item.districts.map(item => (
                item.name === secondOption &&
                <option key={item.pc} value={item.pc} >
                  {item.pc}
                </option>
              ))
            ))
          }
        </select>
      </div>
    </>
  )
}

export default DynamicSelect
