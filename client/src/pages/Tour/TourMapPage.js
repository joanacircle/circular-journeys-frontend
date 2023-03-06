import React from 'react'
import TourMap from './components/TourMap/TourMap'
import TourSearchBar from './components/TourSearchBar/TourSearchBar'

export default function TourMapPage() {
  return (
    <>
    <div>
      <h1>
      TourMapPage
      </h1>
      <div style={{ display: "flex" }}>
        <div style={{ border: "2px solid blue", width: "100vh", height: "100vh" }}>
          <TourMap />
        </div>
        <div style={{ border: "2px solid blue", width: "100vh", height: "100vh" }}>
          <TourSearchBar />
        </div>
      </div>
    </div>
    </>
  )
}
