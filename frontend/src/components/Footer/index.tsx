import React from 'react';
import ImgDsDark from 'assets/img/ds-dark.svg';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <p className="text-light">App desenvolvido por <a href="https://github.com/pedrolyma" target="_blank" rel="noreferrer">Pedro Lima</a></p>
                <p className="text-light"><small><strong>Semana Spring React</strong><br />
                    Evento promovido pela escola DevSuperior: <a href="https://linkEdin.com/in/pedro-lyma" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
            </div>
        </footer>
    );
}

export default Footer;