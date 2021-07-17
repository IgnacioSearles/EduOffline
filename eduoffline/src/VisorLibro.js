import React from 'react';
import { useParams } from 'react-router-dom';

import Sidebar from './Sidebar';

function VisorLibro() {
    const {libro} = useParams();

    return (
        <div>
            <Sidebar/>
            <main>
                <h2>{libro.split(".")[0]}</h2>
                <div className="visorPdfFrame">
                    <iframe title={libro.split(".")[0]} className="visorPdf" src={`${process.env.REACT_APP_SERVER_URL}/archivos/libros/${libro}`}></iframe>
                </div>
            </main>
        </div>
    )
}

export default VisorLibro;
