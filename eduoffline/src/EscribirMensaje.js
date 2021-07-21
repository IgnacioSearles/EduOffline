import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Sidebar from './Sidebar';

import './EscribirMensaje.css';
import { postearAlServerConAuth } from './postearAlServer';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function EscribirMensaje() {
    const [error, setError] = useState("");

    const [asunto, setAsunto] = useState("");
    const [receptores, setReceptores] = useState("");
    const [cuerpo, setCuerpo] = useState("");

    const usuario = useSelector(state => state.usuario);
    const history = useHistory();

    function enviarMensajeAlServer(e) {
        e.preventDefault();

        receptores.split(";").forEach(receptor => {
            postearAlServerConAuth("/mensajes/enviar", { asunto, receptor, cuerpo, fecha: new Date().toLocaleDateString() }, usuario)
            .then(res => history.push("/mensajes"))    
            .catch(e => setError(e.response.data.mensaje));
        });
    }

    return (
        <div>
            <Sidebar />
            <main>
                <div className="escribirMensajeTarjeta">
                    <h2 className="escribirMensajeTitulo">Nuevo Mensaje</h2>
                    <form className="escribirMensajeForm" autoComplete="off" onSubmit={enviarMensajeAlServer}>
                        <label className="label" for="asunto">Asunto:</label>
                        <input type="text" className="input" placeholder="Asunto" name="asunto" onChange={e => setAsunto(e.target.value)}></input>

                        <label className="label" for="destinatarios">Destinatarios (separados por ;):</label>
                        <input type="text" className="input" placeholder="Destinatarios" name="destinatarios" onChange={e => setReceptores(e.target.value)}></input>

                        <label className="label" for="cuerpo">Cuerpo:</label>
                        <textarea className="input escribirMensajeCuerpo" placeholder="Cuerpo" name="cuerpo" onChange={e => setCuerpo(e.target.value)}></textarea>

                        <button className="button" type="submit">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </form>
                    <p className="mensajeError">{error}</p>
                </div>
            </main>
        </div>
    )
}

export default EscribirMensaje;
