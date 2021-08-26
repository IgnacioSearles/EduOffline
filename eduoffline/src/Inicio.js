import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getDelServer, getDelServerConAuth } from './postearAlServer';
import Sidebar from './Sidebar';
import './Inicio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPhotoVideo } from '@fortawesome/free-solid-svg-icons';

function Inicio() {
    const [ultimosRecursosUsados, setUltimosRecursosUsados] = useState([]);

    const [cantidades, setCantidades] = useState({});

    const usuario = useSelector(state => state.usuario);

    const history = useHistory();

    useEffect(() => {
        if (!usuario) return;
        getDelServerConAuth('/usuarios/ultimos/', usuario).then(res => {
            setUltimosRecursosUsados(res.data);
        }).catch((e) => {
            history.push('/ingresar');
        });
    }, [history, usuario]);

    useEffect(() => {
        getDelServer('/info/cantidades/').then(res => {
            setCantidades(res.data);
        });
    }, []);

    return (
        <div>
            <Sidebar/>
            <main>
                <div className="inicioColumns">
                    <div className="inicioInfo">
                        <h2>EduOffline cuenta con:</h2>
                        <p className="inicioText">- <b className="inicioNum">{cantidades.cantidadRecursos}</b> recursos.</p>
                        <p className="inicioText">- <b className="inicioNum">{cantidades.cantidadClases}</b> clases grabadas.</p>
                        <p className="inicioText">- <b className="inicioNum">{cantidades.cantidadLibros}</b> libros.</p>
                        <p className="inicioText">- <b className="inicioNum">{cantidades.cantidadProyectos}</b> proyectos.</p>
                    </div>
                    <div>
                        <h2>Último contenido usado:</h2>
                        <div className="inicioUltimosList">
                            {
                                ultimosRecursosUsados.map(recurso => (
                                    <Link className="linkListLink" key={recurso} to={recurso}>
                                        <div className="linkListTarjeta">
                                            {
                                                (recurso.split('/').reverse()[0].split('.')[1] === "mp4") ? 
                                                <FontAwesomeIcon className="linkListIcon" icon={faPhotoVideo}/> : 
                                                <FontAwesomeIcon className="linkListIcon" icon={faBook}/>
                                            }
                                            <h4>{decodeURIComponent(recurso.split('/').reverse()[0].split('.')[0])}</h4>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Inicio;
