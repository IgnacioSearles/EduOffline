import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';

import { getDelServer } from './postearAlServer';

function MateriaClases() {
    const [videos, setVideos] = useState([]);

    const {materia} = useParams();

    useEffect(() => {
        getDelServer(`/clases/videos/?materia=${materia}`).then((res) => {
            setVideos(res.data);
        });
    }, []);

    return (
        <div>
            <Sidebar/>
            <main>
                <h2>Videos {materia}:</h2>
                {
                    videos.map(video => (
                        <div>
                            <Link className="links" to={`/clases/${materia}/${video}`}>-{video.split(".")[0]}</Link>
                        </div>
                    ))
                }
            </main>
        </div>
    )
}

export default MateriaClases;
