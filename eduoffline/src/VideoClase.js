import React from 'react';
import { useParams } from 'react-router-dom';

import Sidebar from './Sidebar';

function VideoClase() {
    const {materia, video} = useParams();

    return (
        <div>
            <Sidebar/>
            <main>
                <h2>{video.split('.')[0]}</h2>
                <video className="videoPlayer" src={`${process.env.REACT_APP_SERVER_URL}/clases/${materia}/${video}`} controls></video>
            </main>
        </div>
    )
}

export default VideoClase;
