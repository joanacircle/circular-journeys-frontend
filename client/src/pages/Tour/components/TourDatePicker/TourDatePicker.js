import React, { useState } from "react"
import './TourDatePicker.scss'

const TourDatePicker = () => {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value)
  }
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value)
  }

  return (
    <>
      <div className="tour-datepicker">
      <div className="tour-datepicker-radius">
      <h6 className="tour-datepicker-title">Start Date</h6>
      <input type="date" value={startDate} onChange={handleStartDateChange} />
      </div>
      <div className="tour-datepicker-radius">
      <h6 className="tour-datepicker-title">End Date</h6>
      <input type="date" value={endDate} onChange={handleEndDateChange} />
      </div>
      <div className="tour-datepicker-radius">
      <h6 className="tour-datepicker-title">Selected Date Range</h6>
      <h6>{startDate} - {endDate}</h6>
      </div>
      </div>
    </>
  )
}
export default TourDatePicker
