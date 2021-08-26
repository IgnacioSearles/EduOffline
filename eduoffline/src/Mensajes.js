import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteEnServer, getDelServerConAuth } from './postearAlServer';
import Sidebar from './Sidebar';

import './Mensajes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeOpen, faTrash } from '@fortawesome/free-solid-svg-icons';

function Mensajes() {
    const [mensajes, setMensajes] = useState([]);
    const [deletedId, setDeletedId] = useState("");

    const usuario = useSelector(state => state.usuario);

    useEffect(() => {
        if (usuario == null) return;

        getDelServerConAuth("/mensajes/obtener", usuario).then(res => setMensajes(res.data))
            .catch(e => console.log(e));
    }, [deletedId, usuario]);

    function borrarMensaje(id) {
        deleteEnServer(`/mensajes/borrarporid/?nombre=${usuario.nombre}&token=${usuario.token}&_id=${id}`)
            .then(res => setDeletedId(id))
            .catch(e => console.log(e));
    }

    return (
        <div>
            <Sidebar />
            <main>
                <div style={{ margin: "0.75rem 0" }}>
                    <Link className="button mensajeNew" to="/mensajes/escribir">Nuevo Mensaje</Link>
                </div>
                <div className="listaMensajes">
                    {
                        mensajes.map(mensaje => (
                            <div key={mensaje._id} className="mensajeLinea">
                                <Link id={(mensaje.leido) ? "mensajeLeido" : ""} className="linkListLink isMensajeContent" to={`/mensajes/mostrar/${mensaje._id}`}>
                                    <div className="mensajeRow">
                                        <div className="mensajeInfoLeft">
                                            <div style={{ marginRight: "0.5rem" }}>
                                                {(mensaje.leido) ? <FontAwesomeIcon icon={faEnvelopeOpen} /> : <FontAwesomeIcon icon={faEnvelope} />}
                                            </div>
                                            <div>
                                                <p className="mensajeEmisor">{mensaje.emisor}</p>
                                                <p className="mensajeAsunto">{mensaje.asunto}</p>
                                            </div>
                                        </div>
                                        <p className="mensajeFecha">{mensaje.fecha}</p>
                                    </div>
                                </Link>
                                <button className="mensajeDeleteBtn" onClick={() => borrarMensaje(mensaje._id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}

export default Mensajes;
