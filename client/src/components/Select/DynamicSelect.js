import React, { useState, useEffect } from 'react'
import { taiwan } from 'data/taiwan-data'

const DynamicSelect = ({ inputData, handleInputChange }) => {
  const options = taiwan

  return (
    <>
      <div className='label-place'>
        <label htmlFor="nation">國家</label>
        <select
          name='nation'
          id='nation'
          onChange={handleInputChange}
          required
        >
          <option value="">--- 請選擇 ---</option>
          <option value='臺灣'>臺灣</option>
        </select>
      </div>
      <div className='label-place'>
        <label htmlFor="city">城市</label>
        <select
          name='city'
          id='city'
          onChange={handleInputChange}
          required
        >
          <option value=''>--- 請選擇 ---</option>
          {
            inputData.nation !== undefined && inputData.nation !== '' &&
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
          onChange={handleInputChange}
          required
        >
          <option value=''>--- 請選擇 ---</option>
          {
            inputData.nation !== '' &&
            options.map(item => (
              item.value === inputData.city &&
              item.districts.map(item => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))
            ))
          }
        </select>
      </div>
      {/* <div className='label-place'>
        <label htmlFor="postalCode">郵遞區號</label>
        <select
          name='postalCode'
          id='postalCode'
          onChange={handleInputChange}
          required
        >
          <option value=''>--- 請選擇 ---</option>
          {
            inputData.city !== '' &&
            (
              options.map(item => (
                item.districts.map(item => (
                  item.name === inputData.districts &&
                  <option key={item.pc} value={item.pc} >
                    {item.pc}
                  </option>
                ))
              ))
            )

          }
        </select>
      </div> */}
    </>
  )
}

export default DynamicSelect
