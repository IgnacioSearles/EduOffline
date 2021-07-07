import React from 'react';
import { useSelector } from 'react-redux';
import './Navbar.css';

function Navbar() {
    const usuario = useSelector(state => state.usuario);

    return (
        <nav className="navBar">
            <h2>EduOffline</h2>
            <h5>{(usuario) ? `Hola, ${usuario.nombre}` : ""}</h5>
        </nav>
    )
}

export default Navbar;
