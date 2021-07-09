import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

import { getDelServer } from './postearAlServer';

function Clases() {
    const [materias, setMaterias] = useState([]);
    useEffect(() => {
        getDelServer("/clases/materias/").then((res) => {
            setMaterias(res.data);
        });
    }, []);

    return (
        <div>
            <Sidebar/>
            <main>
                <h2>Materias:</h2>
                {
                    materias.map(materia => (
                        <div>
                            <Link className="links" to={`/clases/${materia.nombre}`}>-{materia.nombre}</Link>
                        </div>
                    ))
                }
            </main>
        </div>
    )
}

export default Clases;
