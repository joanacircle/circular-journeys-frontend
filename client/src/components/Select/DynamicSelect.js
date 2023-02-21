import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DynamicSelect = ({ inputData, handleInputChange }) => {
  const [options, setOptions] = useState({})

  useEffect(() => {
    handleGetOptionsApi()
  }, [])

  const handleGetOptionsApi = async () => {
    const response = await axios.get(`${process.env.REACT_APP_DEV_URL}/user/select`)
    const data = response.data
    setOptions(data)
  }

  const selectOptionsObj = {
    info: [
      { label: '國家', value: inputData.nation, att: 'nation' },
      { label: '城市', value: inputData.city, att: 'city' },
      { label: '區域', value: inputData.districts, att: 'districts' }
      // { label: '郵遞區號', value: inputData.postalCode, att: 'postalCode' }
    ]
  }

  return (
    <>
      {
        selectOptionsObj.info.map(item => (
          <div key={item.label} className='label-place'>
            <label htmlFor={item.label}>{item.label}</label>
            <select
              name={item.att}
              id={item.att}
              value={inputData[item.att]}
              onChange={handleInputChange}
              required
            >
              <option value=''>--- 請選擇 ---</option>
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
                inputData.nation !== undefined && inputData.nation !== '' &&
                options.info.map(item => (
                  item.city === inputData.city &&
                  item.districts.map(item => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))
                ))
              }
              {/* {
                item.att === 'postalCode' &&
                inputData.nation !== undefined && inputData.nation !== '' &&
                inputData.districts !== undefined && inputData.districts !== '' &&
                options.info.map(item => (
                  item.city === inputData.city &&
                  item.districts.map(item => (
                    item.name === inputData.districts &&
                    <option key={item.postalCode} value={item.postalCode}>
                      {item.postalCode}
                    </option>
                  ))
                ))
              } */}
            </select>
          </div>
        ))
      }
    </>
  )
}

export default DynamicSelect
