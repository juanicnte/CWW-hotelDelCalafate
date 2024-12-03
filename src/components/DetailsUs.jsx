import React from 'react'
import '../css/DetailUs.css'
import { FaAngleRight } from "react-icons/fa";
import Map from './Map';

export default function DetailsUs() {
    return (
        <>
            <section className='mucho-texto'>
                <small>BEGUR</small>
                <h1>Un lugar donde el tiempo se detiene</h1>
                <p>Escápate de la rutina y visita un paraíso mediterráneo en el litoral catalán, un oasis de paz donde desconectar y enriquecer tu cuerpo y alma en todos los sentidos. Begur, ubicado en una de las zonas más exclusivas de la Costa Brava donde las aguas cristalinas del Mediterráneo y la belleza natural del Baix Empordà se unen, conserva con orgullo su pasado medieval y sus tradiciones pesqueras.
                    <br /><br />
                    ¡Ven a descubrir nuestro refugio privilegiado!</p>
                <img src="https://www.altahousehotel.com/assets/themes/www.altahousehotel.com/img/twocolsimgtxt/1687161498_costa-2.tmedium.webp" className="img-fluid lazy loading" height="878" width="632" alt="" title=""></img>

                <button>
                    <FaAngleRight />
                    Reservar ahora
                </button>
            </section>

            <section className='collage-ig'>
                <a>
                    <img src="https://instagram.emexsdigital.com/img/instagram/altahousehotel/x8JrRjnDFxspN1fMYRzPNjgTT-xx_h5w.webp" alt="" />
                    <img src="https://instagram.emexsdigital.com/img/instagram/altahousehotel/IsZ35vTrhqxfvMqzRHBA-mUpudRTu5ll.jpg" alt="" />
                    <img src="https://instagram.emexsdigital.com/img/instagram/altahousehotel/XS97dWxLd6ZiYVEVCnqEHVFzhOtTl8Jt.webp" alt="" />
                    <img src="https://instagram.emexsdigital.com/img/instagram/altahousehotel/hnZT5oHT_MZQgW8WrwC2E1NG9CPW1ow6.webp" alt="" />
                </a>

                <h3>
                    Instagram Feed - #altahousebegur
                </h3>
            </section>

            <section className='ubicación'>
                <article className='ubicacion-texto'>
                    <small>ALTA HOUSE</small>
                    <h3>Ubicación</h3>
                    <p>Situado en pleno corazón de Begur y a pocos minutos en coche de la playa más cercana.</p>
                    <a href="https://maps.app.goo.gl/wQ5UMXA2KFcwWH8d7">
                        C. Francesc Forgas, 13,
                        <br />
                        17255 Begur, Girona
                    </a>
                    <p>
                        T. +34 972 62 42 06
                        <br />
                        E. info@altahousehotel.com
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
