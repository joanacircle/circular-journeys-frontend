import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import placeholder from '../../../../images/Tour/placeholder.png'
import './TourMap.scss'

const icon = L.icon({
  iconUrl: placeholder,
  iconSize: [38, 38],
  iconAnchor: [19, 38]
})

export default function TourMap({ selectedCard }) {
  const mapRef = useRef(null)
  const [position, setPosition] = useState([22.6394, 120.30256])
  const [mapStyle, setMapStyle] = useState('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')

  function changeStyle() {
    if (mapStyle === 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png') {
      setMapStyle('https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=D3Te9vzolvZQczBKWWL2')
    } else {
      setMapStyle('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    }
  }

  useEffect(() => {
    if (selectedCard) {
      const MapUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        selectedCard
      )}&format=jsonv2`
      fetch(MapUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.length > 0) {
            const { lat, lon } = data[0]
            setPosition([lat, lon])
            mapRef.current.flyTo([lat, lon], 16, { animate: true })
          }
        })
    }
  }, [selectedCard])

  return (
    <>
      <button className='btn' onClick={changeStyle}>STYLE</button>
      <MapContainer
        center={position}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
        scrollWheelZoom={false}
        ref={mapRef}
        className='tourmap'
      >
        <TileLayer attribution='&copy; OpenStreetMap contributors ' url={mapStyle} />
        <Marker position={position} icon={icon}>
          <Popup></Popup>
        </Marker>
      </MapContainer>
    </>
  )
}
