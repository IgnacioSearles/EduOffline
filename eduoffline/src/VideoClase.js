import React, {useEffect} from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';

import Sidebar from './Sidebar';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useSelector } from 'react-redux';

import { postearAlServerConAuth } from './postearAlServer';
import './VideoClase.css';

function VideoClase() {
    const {materia, video} = useParams();
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
                <div className="tituloVolver">
                    <h2>{video.split('.')[0]}</h2>
                    <Link to={`/clases/${materia}`} className="button" style={{textDecoration: "none"}}><FontAwesomeIcon icon={faArrowLeft}/>Volver</Link>
                </div>
                <video className="videoPlayer" src={`${process.env.REACT_APP_SERVER_URL}/archivos/clases/${materia}/${video}`} controls></video>
            </main>
        </div>
    )
}

export default VideoClase;
