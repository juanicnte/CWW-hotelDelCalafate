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
        <>
            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={true} // default false
            // reloadOnUpdate // default false
            // static // default false
            >
                <div className="gallery-cell">
                    <img src="/img2.jpeg" alt="" />
                </div>
                <div className="gallery-cell">
                    <img src="/img3.jpeg" alt="" />
                </div>
                <div className="gallery-cell">
                    <img src="/img4.jpeg" alt="" />
                </div>
                <div className="gallery-cell">
                    <img src="/img1.jpeg" alt="" />
                </div>

            </Flickity>
        </>
    )
}

export default Carousel;