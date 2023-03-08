import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import "leaflet/dist/leaflet.css"
import placeholder from "../../../../images/Tour/placeholder.png"




const icon = L.icon({
  iconUrl: placeholder,
  iconSize: [38, 38],
  iconAnchor: [19, 38]
})
export default function TourMap({ selectedCard }) {
  // 地圖參考點 標記參考點
  const mapRef = useRef(null)
  const markerRef = useRef()
  // 起始位置(Lat, Lng)經緯度 與預設地點
  const [position, setPosition] = useState([22.63940, 120.30256])
  const [address, setaddress] = useState([null])
  // 透過Nominatim 搜尋關鍵字 得到經緯度
  useEffect(() => {
    if (selectedCard) {
      const MapUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(selectedCard)}&format=jsonv2`
      fetch(MapUrl)
      .then(response => response.json())
      .then(data => {
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
    <MapContainer
      center={position}
      zoom={13}
      style={{ width: '100%', height: "100%" }}
      scrollWheelZoom={false}
      ref={mapRef}
    >
    <TileLayer
      attribution='&copy; OpenStreetMap contributors '
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      // TODO:下面網址會切換地圖顯示模式，會比較好看但是次數有限制，所以展示才使用(有100次可以用)。
      // url='https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=D3Te9vzolvZQczBKWWL2'
      />
      <Marker position={position} icon={icon} ref={markerRef}>
        <Popup>
        </Popup>
      </Marker>
    </MapContainer>
  </>
)
}
