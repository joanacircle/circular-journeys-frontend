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
        <div style={{ border: "2px solid blue", width: "700px", height: "560px", zIndex: 9 }}>
          <TourMap />
        </div>
        <div style={{ border: "2px solid blue", width: "700px", height: "560px" }}>
          <TourSearchBar />
        </div>
      </div>
    </div>
    </>
  )
}
