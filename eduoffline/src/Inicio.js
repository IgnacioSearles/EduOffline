import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getDelServer, getDelServerConAuth } from './postearAlServer';
import Sidebar from './Sidebar';
import './Inicio.css';

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
    }, []);

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
                    <div>
                        <h2>EduOffline cuenta con:</h2>
                        <p className="inicioText">-<b className="inicioNum">{cantidades.cantidadRecursos}</b> recursos.</p>
                        <p className="inicioText">-<b className="inicioNum">{cantidades.cantidadClases}</b> clases grabadas.</p>
                        <p className="inicioText">-<b className="inicioNum">{cantidades.cantidadLibros}</b> libros.</p>
                    </div>
                    <div>
                        <h2>Últimos recursos usados:</h2>
                        <div className="inicioUltimosList">
                            {
                                ultimosRecursosUsados.map(recurso => (
                                    <Link className="linkListLink" key={recurso} to={recurso}>
                                        <div className="linkListTarjeta">
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
