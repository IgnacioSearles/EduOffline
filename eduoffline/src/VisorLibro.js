import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { postearAlServerConAuth } from './postearAlServer';

import Sidebar from './Sidebar';

function VisorLibro() {
    const {libro} = useParams();
    const usuario = useSelector(state => state.usuario);

    const history = useHistory();

    useEffect(() => {
        if (!usuario) return;
        postearAlServerConAuth('/usuarios/ultimos', {recurso: window.location.pathname}, usuario).catch((e) => {
            history.push('/ingresar');
        });
    }, [usuario, history]);

    return (
        <div>
            <Sidebar/>
            <main>
                <h2>{libro.split(".")[0]}</h2>
                <div className="visorPdfFrame">
                    <iframe title={libro.split(".")[0]} className="visorPdf" src={`${process.env.REACT_APP_SERVER_URL}/archivos/libros/${libro}`}></iframe>
                </div>
            </main>
        </div>
    )
}

export default VisorLibro;
