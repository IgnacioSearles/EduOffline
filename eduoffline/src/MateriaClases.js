import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';

import { getDelServer } from './postearAlServer';

function MateriaClases() {
    const [videos, setVideos] = useState([]);

    const { materia } = useParams();

    useEffect(() => {
        getDelServer(`/clases/videos/?materia=${materia}`).then((res) => {
            setVideos(res.data);
        });
    }, [materia]);

    return (
        <div>
            <Sidebar />
            <main>
                <h2>Videos {materia}:</h2>
                <div className="linkListContainer">
                    {
                        videos.map(video => (
                            <Link key={video} className="linkListLink" to={`/clases/${materia}/${video}`}>
                                <div className="linkListTarjeta">
                                    <h4>{video.split(".")[0]}</h4>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}

export default MateriaClases;
