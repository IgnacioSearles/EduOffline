import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';

import { getDelServer } from './postearAlServer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faFileArchive, faFilePdf } from '@fortawesome/free-solid-svg-icons';

const fileIconType = {
    "pdf": faFilePdf,
    "ino": faCode,
    "zip": faFileArchive
};

function Proyecto() {
    const [docs, setDocs] = useState([]);

    const { proyecto } = useParams();

    useEffect(() => {
        getDelServer(`/proyectos/recursos/?proyecto=${proyecto}`).then((res) => {
            setDocs(res.data);
        });
    }, [proyecto]);

    return (
        <div>
            <Sidebar />
            <main>
                <h2 className="listTitle">Documentos {proyecto}:</h2>
                <div className="linkListContainer">
                    {
                        docs.map(doc => (
                            <Link key={doc} className="linkListLink" to={`/proyectos/${proyecto}/${doc}`}>
                                <div className="linkListTarjeta">
                                    <FontAwesomeIcon className="linkListIcon" icon={fileIconType[doc.split(".")[1]]}/>
                                    <h4>{doc.split(".")[0]}</h4>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}

export default Proyecto;
