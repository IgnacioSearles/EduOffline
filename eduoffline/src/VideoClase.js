import React from 'react';
import { useParams, Link } from 'react-router-dom';

import Sidebar from './Sidebar';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './VideoClase.css';

function VideoClase() {
    const {materia, video} = useParams();

    return (
        <div>
            <Sidebar/>
            <main>
                <div className="videoClaseTitulo">
                    <h2>{video.split('.')[0]}</h2>
                    <Link to={`/clases/${materia}`} className="linkBtnBlanco"><FontAwesomeIcon icon={faArrowLeft}/>Volver</Link>
                </div>
                <video className="videoPlayer" src={`${process.env.REACT_APP_SERVER_URL}/clases/${materia}/${video}`} controls></video>
            </main>
        </div>
    )
}

export default VideoClase;
