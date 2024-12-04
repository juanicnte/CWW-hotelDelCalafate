import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

const Map = () => {
    // Coordenadas de tu negocio
    const position = [-50.34335220949034, -72.28104535200416]; // Cambia por la latitud y longitud de tu negocio
    const myIcon = L.icon({
        iconUrl: "/tulogo.png",
        iconSize: [72, 72],
        iconAnchor: [25, 50],
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
                url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* Marcador de la ubicación */}
            <Marker position={position} icon={myIcon} eventHandlers={{
                click: () => {
                    window.open("https://maps.app.goo.gl/c6SAuABDbAJMBCdi9", "_blank");
                }
            }}>
                <Popup>¡Aquí está Hotel del Calafate!</Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
