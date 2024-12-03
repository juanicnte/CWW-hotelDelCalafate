import React from 'react'
import "../css/ventajas.css"
import { GrTag } from "react-icons/gr";
import { CiWifiOn, CiCreditCard1 } from "react-icons/ci";
import { TfiTime } from "react-icons/tfi";


export default function Ventajas() {
    return (
        <>
            <section className='ventajas-container'>
                <div className='caja-subtitle'>
                    <p>RESERVAR CON NOSOTROS TIENE MUCHAS VENTAJAS</p>
                </div>
                <ul className='ventajas-options'>
                    <li>
                        <CiWifiOn />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                        </svg> */}
                        <div className='caja-ventaja-title'>
                            Wifi gratis
                            <p className='ventajas-description' style={{ textAlign: "left" }}>Nosotros os ofrecemos conexión gratuita a Internet. Vosotros desconectad cuando queráis.</p>
                        </div>
                    </li>
                    <li>
                        <GrTag />
                        <div className='caja-ventaja-title'>
                            Mejores precios y ofertas
                            <p className='ventajas-description' style={{ textAlign: "left" }}>Os garantizamos que reservando a través de nuestra web conseguiréis el mejor precio.</p>
                        </div>
                    </li>
                    <li>
                        <CiCreditCard1 />
                        <div className='caja-ventaja-title'>
                            Reserva ahora y paga al llegar
                            <p className='ventajas-description' style={{ textAlign: "left" }}>No pospongáis vuestra reserva, posponed sólo el pago de la estancia.</p>
                        </div>
                    </li>
                    <li>
                        <TfiTime />
                        <div className='caja-ventaja-title'>
                            Cancelación gratuita
                            <p className='ventajas-description' style={{ textAlign: "left" }}>Hasta 24h antes de llegada (excepto no reembolsable). Que un cambio de planes de última hora no os suponga un problema.</p>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}
