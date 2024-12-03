import Header from "./Header"
import NewArrivalsCarousel from "./Carousel-Inicio"
import Ventajas from "./Ventajas";
import DetailsUs from "./DetailsUs";
import React, { useEffect } from 'react';
import Footer from "./Footer";
import "../css/Mediaqueries.css"
function Home() {
    return(
        <>
        <Header></Header>
        <NewArrivalsCarousel></NewArrivalsCarousel>
        <Ventajas/>
        <DetailsUs/>
        <Footer></Footer>
        </>
        
    )   
}

export default Home