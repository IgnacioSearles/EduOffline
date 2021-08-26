import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Sidebar from './Sidebar';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditorCodigo from './EditorCodigo';
import { getDelServer } from './postearAlServer';

const extensiones = {
    "cpp": "c_cpp",
    "ino": "c_cpp",
    "h": "c_cpp",
    "hpp": "c_cpp",
    "js": "javascript",
    "java": "java",
    "html": "html",
    "py": "python"
};

function VisorDocsProyecto() {
    const { proyecto, doc } = useParams();
    const [codigo, setCodigo] = useState("");
    const [showEditor, setShowEditor] = useState(false);

    useEffect(() => {
        getDelServer(`/archivos/proyectos/${proyecto}/${doc}`).then((resultado) => {
            setCodigo(resultado.data);
            setShowEditor(true);
        });
    }, [doc, proyecto]);;

    return (
        <div>
            <Sidebar />
            <main>
                <div className="tituloVolver">
                    <h2>{doc.split('.')[0]}</h2>
                    <Link to={`/proyectos/${proyecto}`} className="button" style={{ textDecoration: "none" }}><FontAwesomeIcon icon={faArrowLeft} />Volver</Link>
                </div>
                {
                    (doc.split(".")[1] !== "pdf" && !extensiones[doc.split(".")[1]]) ? <p>Descarga Completa</p> : ""
                }
                {
                    (!extensiones[doc.split(".")[1]]) ?
                    <div className="visorPdfFrame">
                        <iframe title={doc.split(".")[0]} className="visorPdf" src={`${process.env.REACT_APP_SERVER_URL}/archivos/proyectos/${proyecto}/${doc}`}></iframe>
                    </div> : ""
                }
                {
                    (extensiones[doc.split(".")[1]] && showEditor) ?
                    <EditorCodigo codigoInicial={codigo} extensionArchivo={extensiones[doc.split(".")[1]]}/>
                    : ""
                }
            </main>
        </div>
    )
}

export default VisorDocsProyecto;
