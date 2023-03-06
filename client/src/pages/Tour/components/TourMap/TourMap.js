import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import L from 'leaflet'
import placeholder from "../../../../images/Tour/placeholder.png"
const icon = L.icon({
  iconUrl: placeholder,
  iconSize: [38, 38],
  iconAnchor: [19, 38]
})
const position = [51.505, -0.09]

export default function TourMap() {
  return (

  <MapContainer
   center={position}
   zoom={13}
   style={{ width: '100%', height: "100%" }}
   scrollWheelZoom={false}
   >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
