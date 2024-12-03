import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

const Map = () => {
    // Coordenadas de tu negocio
    const position = [-27.369699604304405, -55.8963064886633]; // Cambia por la latitud y longitud de tu negocio
    const myIcon = L.icon({
        iconUrl: "/tulogo.png",
        iconSize: [72, 72],
        iconAnchor: [25, 50],
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null
    });
    return (
            <MapContainer
                center={position}
                zoom={15}
                // style={{ height: "28rem", width: "95%", filter: "grayscale(1)", margin: "4rem auto"}}
                dragging={false} // Deshabilita el arrastre
                scrollWheelZoom={false} // Deshabilita el zoom con el scroll
                doubleClickZoom={false} // Deshabilita el zoom con doble clic
                zoomControl={true} // Mantiene el control de zoom

            >
                {/* Capa de mapa base */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* Marcador de la ubicación */}
                <Marker position={position} icon={myIcon}>
                    <Popup>¡Aquí está mi negocio!</Popup>
                </Marker>
            </MapContainer>
    );
};

export default Map;
