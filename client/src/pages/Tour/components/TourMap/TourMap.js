import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import "leaflet/dist/leaflet.css"
import placeholder from "../../../../images/Tour/placeholder.png"

// import { response } from 'express'
import { data } from 'pages/Tour/data'



const icon = L.icon({
  iconUrl: placeholder,
  iconSize: [38, 38],
  iconAnchor: [19, 38]
})
export default function TourMap() {
  const mapRef = useRef(null)
  const markerRef = useRef()
  const [position, setPosition] = useState([22.63940, 120.30256])
  useEffect(() => {
    const address = '高雄市蓮池潭'
    const MapUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=jsonv2`
    fetch(MapUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data && data.length > 0) {
        const { lat, lon } = data[0]
        setPosition([lat, lon])
        markerRef.current.setLatLng([lat, lon])
        mapRef.current.setView([lat, lon], 13)
        mapRef.current.flyTo([lat, lon], 18)
      }
    })
  }, [])

  // useEffect(() => {
  //   markerRef.current.openPopup()
  // }, [position])
  return (

  <MapContainer
   center={position}
   zoom={13}
   style={{ width: '100%', height: "100%" }}
   scrollWheelZoom={false}
   >
    <TileLayer
      attribution='&copy; OpenStreetMap contributors'
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    />
    <Marker position={position} icon={icon}>
      <Popup>
        A pretty CSS3 popup. <br />
        Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
)
}
