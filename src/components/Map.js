

import icon from './icon-location.svg';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer, TileLayer, useMap, Marker, Popup, setView } from "react-leaflet";
import L from 'leaflet';
import { useEffect } from 'react';

delete L.Icon.Default.prototype._getIconUrl;




let DefaultIcon = L.icon({
    iconUrl: icon
});

L.Marker.prototype.options.icon = DefaultIcon;

const RecenterAutomatically = ({lat,lng}) => {
    const map = useMap();
     useEffect(() => {
       map.setView([lat, lng]);
     }, [lat, lng]);
     return null;
   }

const Map = ({location}) => {

    return (
        <MapContainer style={{ width: "100%", height: "100%", zIndex:"1" }} center={[location.lat, location.lng]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location.lat, location.lng]}>
                <Popup>
                    Your IP Location
                </Popup>
            </Marker>
            <RecenterAutomatically lat={location.lat} lng={location.lng}/>
        </MapContainer>
    )
}

export default Map;