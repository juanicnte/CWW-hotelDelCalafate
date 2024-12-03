import React, { useEffect, useRef, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BookingWidget } from './Booking-Widget';
import "../css/Header-Footer.css"


const Header = () => {
    const navigate = useNavigate();

    const headerRef = useRef(null);
    // const bookingRef = useRef(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showHeader, setShowHeader] = useState(true);
    // const [showBooking, setShowBooking] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Si el usuario baja y ha pasado un poco del inicio, esconder el header
                setShowHeader(false);
                // setShowBooking(false)
            } else {
                // Si el usuario sube, mostrar el header
                setShowHeader(true);
                // setShowBooking(true)
            }

            setLastScrollY(currentScrollY); // Actualizar la posición del scroll
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup para eliminar el event listener al desmontar
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);


    // Función para manejar el click en el botón del menú móvil
    const handleMobileNavClick = () => {
        const buttonRef = document.getElementById('btn');
        const mobileNav = document.querySelector('#mobile-nav');
        const body = document.body;

        if (mobileNav) {
            mobileNav.classList.toggle('active');
            // buttonRef.classList.toggle('active');
            body.classList.toggle('no-scroll');

        }
    };
    // Funcion para abrir submenu de opciones de menu hamburguesa
    const openSubMenu = (event) => {
        event.stopPropagation(); // Evita que el clic en la flechita afecte otros elementos

        const flechita = event.currentTarget; // El ícono clicado
        const menuItem = flechita.parentElement; // El contenedor del ícono
        const abrirCaja = menuItem.nextElementSibling; // El submenú asociado

        if (abrirCaja) {
            abrirCaja.classList.toggle('active');
            flechita.classList.toggle('active');
        }
    };



    return (
        <>
       
            <header className={`header ${showHeader ? "visible" : "hidden"}`}>
                <div className='header-colLeft'>
                    <svg onClick={handleMobileNavClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hamburger-button">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                    <ul>
                        <a>Hotel</a>
                        <a>Apartamentos</a>
                        |
                        <a>Rooftop</a>
                    </ul>
                </div>
                <a className="link-img-container" href="/"><img src="/tulogo.png" className="img-logo" alt="" /></a>
                <div className='header-colRight'>
                    <a className='contact-header'>
                        <img src="https://www.altahousehotel.com/assets/themes/www.altahousehotel.com/img/icons/whatsapp.svg" alt="" />
                    </a>
                    <button>reservar</button>
                </div>
                <nav id="mobile-nav">
                    <section className='container-mobile-nav'>
                        <section className='btn-and-img'>
                            <svg
                                onClick={handleMobileNavClick}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 hamburger-button"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            <a href="/">
                                <img
                                    src="/tulogo.png"
                                    alt=""
                                />
                            </a>
                        </section>


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

                        <ul className='list-socials-nav'>
                            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src="https://www.altahousehotel.com/assets/themes/www.altahousehotel.com/img/icons/facebook.svg" alt="Facebook" /></a></li>
                            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="https://www.altahousehotel.com/assets/themes/www.altahousehotel.com/img/icons/instagram-icon.svg" alt="Instagram" /></a></li>
                            <li><a href="https://wa.me" target="_blank" rel="noopener noreferrer"><img src="https://www.altahousehotel.com/assets/themes/www.altahousehotel.com/img/icons/whatsapp.svg" alt="WhatsApp" /></a></li>
                        </ul>
                    </section>
                </nav>
                {/* <!-- menu hamburguesa termina -->*/}

            </header>
            {/* <div ref={bookingRef}
                className={`algo ${showBooking ? "visible" : "hidden"}`}>
                <BookingWidget/>
            </div> */}
        </>
    );
};

export default Header;