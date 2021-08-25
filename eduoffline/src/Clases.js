import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

import { getDelServer } from './postearAlServer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

function Clases() {
    const [materias, setMaterias] = useState([]);
    useEffect(() => {
        getDelServer("/clases/materias/").then((res) => {
            setMaterias(res.data);
        });
    }, []);

    return (
        <div>
            <Sidebar />
            <main>
                <h2 className="listTitle">Materias:</h2>
                <div className="linkListContainer">
                    {
                        materias.map(materia => (
                            <Link key={materia.nombre} className="linkListLink" to={`/clases/${materia.nombre}`}>
                                <div className="linkListTarjeta">
                                    <FontAwesomeIcon className="linkListIcon" icon={faChalkboardTeacher}/>
                                    <h4>{materia.nombre.split(".")[0]}</h4>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}

export default Clases;
