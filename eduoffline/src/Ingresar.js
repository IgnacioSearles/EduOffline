import React, { useState } from 'react';
import './Ingresar.css';
import { Link, useHistory } from 'react-router-dom';
import { postearAlServer } from './postearAlServer';

import { useDispatch } from 'react-redux';
import setUsuario from './redux/acciones';

function Ingresar() {
    const history = useHistory();

    const [nombre, setNombre] = useState("");
    const [clave, setClave] = useState("");
    const [error, setError] = useState("");

    const dispatch = useDispatch();

    function ingresar(e) {
        e.preventDefault();
        postearAlServer("/usuarios/ingresar", {nombre, clave})
        .then(res => {
            const datos = res.data;
            dispatch(setUsuario(datos.usuario));
            history.push('/');
        }).catch(e => {
            console.log(e);
            setError(e.response.data.mensaje);
        })
    }

    return (
        <div className="ingresarSetMiddle">
            <div className="ingresarCard">
                <h3 className="ingresarHeader">Ingresar</h3>
                <form className="ingresarForm" onSubmit={e => ingresar(e)}>
                    <input type="text" className="input" onChange={e => setNombre(e.target.value)} placeholder="Ingresar Nombre" required></input>
                    <input type="password" className="input" onChange={e => setClave(e.target.value)} placeholder="Ingresar Clave" required></input>
                
                    <p className="ingresarError">{error}</p>

                    <button className="button">Ingresar</button>
                </form>


                <div className="ingresarRegistrarse">
                    <Link to="/registrarse">Crear Una Cuenta</Link>
                </div>
            </div>
        </div>
    )
}

export default Ingresar;
