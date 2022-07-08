import React from 'react';
import { Nav } from './styled';

export default function Header(){
    return(
        <Nav>
            <a href='/'>
                Formação
            </a>
            <a href='/'>
                Experiência profissional
            </a>
        </Nav>
    );
}