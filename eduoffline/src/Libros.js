import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDelServer } from './postearAlServer';
import Sidebar from './Sidebar';

function Libros() {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        getDelServer("/libros/archivos/").then(res => setLibros(res.data));
    }, []);

    return (
        <div>
            <Sidebar />
            <main>
                <h2 className="listTitle">Libros:</h2>
                <div className="linkListContainer">
                    {
                        libros.map(libro => (
                            <Link key={libro.nombre} className="linkListLink" to={`/libros/${libro.nombre}`}>
                                <div className="linkListTarjeta">
                                    <FontAwesomeIcon className="linkListIcon" icon={faBook}/>
                                    <h4>{libro.nombre.split(".")[0]}</h4>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}

export default Libros;
