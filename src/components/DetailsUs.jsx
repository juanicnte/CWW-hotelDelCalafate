import React from 'react'
import '../css/DetailUs.css'
import { FaAngleRight } from "react-icons/fa";
import Map from './Map';

export default function DetailsUs() {
    return (
        <>
            <section className='mucho-texto'>
                <small>HOTEL CALAFATE</small>
                <h1>Un lugar donde el tiempo se detiene</h1>
                <p>Escápate de la rutina y vive una experiencia única en El Calafate, Argentina.
                    Nuestro hotel boutique te invita a descubrir un refugio exclusivo en la puerta de entrada al majestuoso glaciar Perito Moreno.
                    Rodeado de paisajes de ensueño, aquí encontrarás un espacio donde la tranquilidad y el confort se combinan para enriquecer tus sentidos.
                    Sumérgete en la belleza patagónica, disfruta de la calidez de nuestra hospitalidad y déjate envolver por el encanto de un destino que conecta naturaleza, historia y lujo.
                    <br /><br />
                    ¡Tu refugio boutique en El Calafate te espera!</p>
                <img src="https://r-xx.bstatic.com/xdata/images/landmark/1680x840/242134.webp?k=1c791b963eec1ba8c8ca3967a1887ccc01eb217c818cbdbe86d9e9e0a4448a87&o=" className="img-fluid lazy loading" alt="" title=""></img>

                <button>
                    <FaAngleRight />
                    Reservar ahora
                </button>
            </section>

            <section className='collage-ig'>
                <a>
                    <img src="https://www.glaciaresdelapatagonia.com/wp-content/uploads/20-1.jpg" alt="" />
                    <img src="https://www.glaciaresdelapatagonia.com/wp-content/uploads/1-1.jpg" alt="" />
                    <img src="https://www.glaciaresdelapatagonia.com/wp-content/uploads/3-1.jpg" alt="" />
                    <img src="https://cdn0.casamientos.com.ar/article/1347/3_2/960/jpg/7431-shutterstock-1485995075.webp" alt="" />
                </a>

                <h3>
                    Instagram Feed - #hoteldelcalafate
                </h3>
            </section>

            <section className='ubicación'>
                <article className='ubicacion-texto'>
                    <small>HOTEL DEL CALAFATE</small>
                    <h3>Ubicación</h3>
                    <p>Ubicado en pleno corazón de El Calafate, en un entorno que combina elegancia, calidez y el encanto único de la Patagonia Argentina.</p>
                    <a href="https://maps.app.goo.gl/sKK5VqnPZMs8tCwTA">
                        Napoleón Irusta 2208,
                        <br />
                        Z9405 El Calafate, Santa Cruz
                    </a>
                    <p>
                        T. +34 972 62 42 06
                        <br />
                        E. centenowebworks@gmail.com
                    </p>
                </article>
                <Map />
                <article className='listas-container'>
                    <ul className='list-hotels-nav'>
                        <li><a>Hotel</a></li>
                        <li><a>Apartamentos</a></li>
                        <li><a>Rooftop</a></li>
                    </ul>
                    <div className='linea'></div>
                    <ul className='list-idk-nav'>
                        <li><a>Sobre nosotros</a></li>
                        <li><a>Promociones</a></li>
                        <li><a>Guía</a></li>
                        <li><a>Actividades</a></li>
                        <li><a>Servicios</a></li>
                        <li><a>Contacto</a></li>
                    </ul>
                </article>
            </section>
        </>
    )
}
