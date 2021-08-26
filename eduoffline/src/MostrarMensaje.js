import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getDelServer } from './postearAlServer';
import Sidebar from './Sidebar';

function MostrarMensaje() {
    const [mensaje, setMensaje] = useState({});

    const history = useHistory();
    const usuario = useSelector(state => state.usuario);

    const {id} = useParams();

    useEffect(() => {
        if (!usuario) return;

        getDelServer(`/mensajes/obtenerporid/?nombre=${usuario.nombre}&token=${usuario.token}&_id=${id}`)
        .then(res => setMensaje(res.data))
        .catch(e => history.push("/ingresar"));
    }, [history, id, usuario]);

    return (
        <div>
            <Sidebar/>
            <main>
                <h2 className="mensajeMainTitulo">{mensaje.asunto}</h2>
                <div className="mensajeInfo">
                    <p className="mensajeEmisor">{mensaje.emisor}</p>
                    <p className="mensajeFecha">{mensaje.fecha}</p>
                </div>
                <div className="mensajeMostrarCuerpoDiv">
                    <span className="mensajeMostrarCuerpo">{mensaje.cuerpo}</span>
                </div>
            </main>
        </div>
    )
}

export default MostrarMensaje;
