'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { TbX } from 'react-icons/tb'

// Fix for missing marker icons
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const ViewLocation = () => {
  // Coordinates of Nilphamari, Rangpur
  const position: [number, number] = [25.9446, 88.856]

  return (
    <dialog className="modal" id="view_location">
      <div className="modal-box max-w-4xl w-11/12 p-11 text-primary shadow shadow-accent">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-light mb-4">Live Location</h3>
          <form method="dialog">
            <button className="btn btn-sm btn-primary btn-soft">
              <TbX size={17} />
              Close
            </button>
          </form>
        </div>
        <div className="h-[400px] w-full rounded-lg overflow-hidden border border-primary">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <Marker position={position}>
              <Popup>📍 Mohammad Sajjad Hosan</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </dialog>
  )
}

export default ViewLocation
