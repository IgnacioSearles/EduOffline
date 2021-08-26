import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

import { getDelServer } from './postearAlServer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import EditorCodigo from './EditorCodigo';

import "./Proyectos.css";

function Proyectos() {
    const [proyectos, setProyectos] = useState([]);
    useEffect(() => {
        getDelServer("/proyectos/proyectos/").then((res) => {
            setProyectos(res.data);
        });
    }, []);

    return (
        <div>
            <Sidebar />
            <main>
                <div className="proyectosMainDiv">
                    <div>
                        <h2 className="listTitle">Proyectos STEM:</h2>
                        <div className="linkListContainerIs2">
                            {
                                proyectos.map(proyecto => (
                                    <Link key={proyecto.nombre} className="linkListLink" to={`/proyectos/${proyecto.nombre}`}>
                                        <div className="linkListTarjeta">
                                            <FontAwesomeIcon className="linkListIcon" icon={faCodeBranch} />
                                            <h4>{proyecto.nombre.split(".")[0]}</h4>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>

                        <h2 className="listTitle">Software:</h2>
                        <ul className="proyectosSoftwareList">
                            <li>- <a href={`${process.env.REACT_APP_SERVER_URL}/archivos/ArduinoIDE.zip`} download>Arduino IDE</a> para Windows (64-bit/32-bit).</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="listTitle">Editor de codigo:</h2>
                        <EditorCodigo />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Proyectos;
