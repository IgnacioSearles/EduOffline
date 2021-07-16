import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDelServer } from './postearAlServer';
import Sidebar from './Sidebar';

import './Libros.css';

function Libros() {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        getDelServer("/libros/archivos/").then(res => setLibros(res.data));
    }, []);

    return (
        <div>
            <Sidebar />
            <main>
                <h2>Libros:</h2>
                <div className="librosContainer">
                    {
                        libros.map(libro => (
                            <div className="libroTarjeta">
                                <Link className="libroLink" to={`/libros/${libro.nombre}`}>
                                    <h4>{libro.nombre.split(".")[0]}</h4>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}

export default Libros;
