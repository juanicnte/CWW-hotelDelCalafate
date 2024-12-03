import "../css/Header-Footer.css"

function Footer() {
    return (
        <>
            <footer>
                <a href="/" className='footer-image'>
                    <img src="https://www.altahousehotel.com/assets/themes/www.altahousehotel.com/uploads/img/header/1679898573_logo-negro.svg" alt="" />
                </a>
                <ul className='list-socials-nav'>
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src="https://www.altahousehotel.com/assets/themes/www.altahousehotel.com/img/icons/facebook.svg" alt="Facebook" /></a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="https://www.altahousehotel.com/assets/themes/www.altahousehotel.com/img/icons/instagram-icon.svg" alt="Instagram" /></a></li>
                    <li><a href="https://wa.me" target="_blank" rel="noopener noreferrer"><img src="https://www.altahousehotel.com/assets/themes/www.altahousehotel.com/img/icons/whatsapp.svg" alt="WhatsApp" /></a></li>
                </ul>
                <section className='footer-copyright-and-socials'>
                    <ul className="list-unstyled">
                        <li className="item"><a href="https://www.altahousehotel.com/politica-de-privacidad">Política de Privacidad</a></li>
                        <li className="item">/</li>
                        <li className="item"><a href="https://www.altahousehotel.com/aviso-legal">Aviso Legal</a></li>
                        <li className="item">/</li>
                        <li className="item"><a href="https://www.altahousehotel.com/politica-de-cookies">Política de cookies</a></li>
                    </ul>
                    <div className='copyright-container'>
                        © Begur Alta House 2024 | by 
                        <a> CWW</a>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer;