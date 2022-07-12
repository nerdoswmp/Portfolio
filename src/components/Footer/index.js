import React from 'react';
import { Nav } from './styled';

export default function Footer() {
    return (
        <Nav>
            <div>
                <h2>Informações relevantes</h2>
                <p>meu instagram é <a href='https://www.instagram.com/nerdoswampo/'>@nerdoswampo</a></p>
            </div>

            <div>
                <h2>Design Grafico</h2>
                <p>é a minha paixão</p>
            </div>
        </Nav>
    );
}