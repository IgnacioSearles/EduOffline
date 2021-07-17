import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Sidebar from './Sidebar';

import './Recursos.css';
import { getDelServer } from './postearAlServer';

function Recursos() {
    const [busqueda, setBusqueda] = useState("");
    const [archivo, setArchivo] = useState("");

    function buscarRecurso(e){
        e.preventDefault();
        getDelServer(`/recursos/archivo/?busqueda=${busqueda}`).then(res => {
            console.log(res.data);
            setArchivo(res.data[0].document.recurso);
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div>
            <Sidebar/>
            <main>
                <form onSubmit={buscarRecurso} className="recursosInput">
                    <input type="text" className="input bigInput" placeholder="Busque un recurso" onChange={e => setBusqueda(e.target.value)}></input>
                    <button className="button" type="submit"><FontAwesomeIcon icon={faSearch}/></button>
                </form>
                <div className="visorPdfFrame">
                    <iframe className="visorPdf" allow="fullscreen" title="Visor de recursos" src={(archivo) ? `${process.env.REACT_APP_SERVER_URL}/archivos/recursos/${archivo}` : 'about:blank'}></iframe>
                </div>
            </main>
        </div>
    )
}

export default Recursos;
