import React from 'react';
import { useParams, Link} from 'react-router-dom';

import Sidebar from './Sidebar';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function VisorDocsProyecto() {
    const {proyecto, doc} = useParams();

    return (
        <div>
            <Sidebar/>
            <main>
                <div className="visorPdfTituloVolver">
                    <h2>{doc.split('.')[0]}</h2>
                    <Link to={`/proyectos/${proyecto}`} className="button" style={{textDecoration: "none"}}><FontAwesomeIcon icon={faArrowLeft}/>Volver</Link>
                </div>
                {(doc.split(".")[1] !== "pdf") ? <p>Descarga Completa</p> : ""}
                <div className="visorPdfFrame">
                    <iframe title={doc.split(".")[0]} className="visorPdf" src={`${process.env.REACT_APP_SERVER_URL}/archivos/proyectos/${proyecto}/${doc}`}></iframe>
                </div>
            </main>
        </div>
    )
}

export default VisorDocsProyecto;
