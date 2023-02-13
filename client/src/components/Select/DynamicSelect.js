import React, { useState, useEffect } from 'react'
import { taiwan } from 'data/taiwan-data'

const options = taiwan
const selectOptionsObj = {
  info: [
    { label: '國家', att: 'nation' },
    { label: '城市', att: 'city' },
    { label: '區域', att: 'districts' }
  ]
}

const DynamicSelect = ({ inputData, handleInputChange }) => {

  return (
    <>
      {
        selectOptionsObj.info.map(item => (
          <div key={item.label} className='label-place'>
            <label htmlFor={item.label}>{item.label}</label>
            <select
              name={item.att}
              id={item.att}
              // value={data.country && data.country}
              onChange={handleInputChange}
              required
            >
              <option value="">--- 請選擇 ---</option>
              {
                item.att === 'nation' &&
                <option value={options.label}>{options.label}</option>

              }
              {
                item.att === 'city' &&
                inputData.nation !== undefined && inputData.nation !== '' &&
                options.info.map(item => (
                  <option key={item.city} value={item.city}>
                    {item.city}
                  </option>
                ))
              }
              {
                item.att === 'districts' &&
                inputData.nation !== '' && inputData.city !== '' &&
                options.info.map(item => (
                  item.city === inputData.city &&
                  item.districts.map(item => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))
                ))
              }
            </select>
          </div>
        ))
      }
    </>
  )
}

export default DynamicSelect
