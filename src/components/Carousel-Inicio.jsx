import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css'; // Importa el CSS de Flickity

const flickityOptions = {
    cellAlign: 'left',
    autoPlay: 3000,
    contain: true,
    lazyLoad: 1,
    resize: true,
    fade: true,
    prevNextButtons: false,
    draggable: false,
    wrapAround: true,
};

function Carousel() {
    const carouselRef = useRef(null); // Referencia al contenedor del carrusel

    useEffect(() => {
        // Inicializar Flickity
        const flkty = new Flickity(carouselRef.current, flickityOptions);

        // Limpieza al desmontar el componente
        return () => {
            flkty.destroy();
        };
    }, []);

    return (
        <div ref={carouselRef} className="carousel"> {/* Referencia al contenedor */}
            <div className="gallery-cell">
                <img src="/img2.jpeg" alt="Imagen 2" />
            </div>
            <div className="gallery-cell">
                <img src="/img3.jpeg" alt="Imagen 3" />
            </div>
            <div className="gallery-cell">
                <img src="/img4.jpeg" alt="Imagen 4" />
            </div>
            <div className="gallery-cell">
                <img src="/img1.jpeg" alt="Imagen 1" />
            </div>
        </div>
    );
}

export default Carousel;
