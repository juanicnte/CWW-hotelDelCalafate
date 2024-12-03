import React, { useEffect, useRef } from 'react';
import Flickity from 'react-flickity-component';
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
}

function Carousel() {
    return (
        <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={true} // default false
            // reloadOnUpdate // default false
            // static // default false
        >
            <div className="gallery-cell">
                <img src="https://lavidasondosviajes.com/wp-content/uploads/2022/08/mejores-hoteles-donde-alojarse-el-calafate.jpg" alt="" />
            </div>
            <div className="gallery-cell">
                <img src="https://lavidasondosviajes.com/wp-content/uploads/2022/08/xelena-hotel-suites-el-calafate-argentina.jpg" alt="" />
            </div>
            <div className="gallery-cell">
                <img src="https://lavidasondosviajes.com/wp-content/uploads/2022/08/blanca-patagonia-hosteria-boutique-cabanas-calafate.jpg" alt="" />
            </div>
            <div className="gallery-cell">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/5c/3f/cf/hotel-mirador-del-lago.jpg?w=1200&h=-1&s=1" alt="" />
            </div>
        </Flickity>
    )
}

export default Carousel;