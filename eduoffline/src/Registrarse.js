import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postearAlServer } from './postearAlServer';
import './Registrarse.css';

function Registrarse() {
    const history = useHistory();

    const [error, setError] = useState("");
    const [nombre, setNombre] = useState("");
    const [clave, setClave] = useState("");
    const [claveRep, setClaveRep] = useState("");

    function registrarse(e) {
        e.preventDefault();

        if (clave !== claveRep) {
            setError("Asegúrese de que repita la clave correctamente.");
        }

        postearAlServer("/usuarios/registrarse", {nombre, clave})
        .then(res => {
            history.push("/");
        }).catch(e => {
            console.log(e);
            setError(e.response.data.mensaje);
        })
    }

    return (
        <div className="registrarseSetMiddle">
            <div className="registrarseCard">
                <h3 className="registrarseHeader">Crear una cuenta</h3>
                <form className="registrarseForm" onSubmit={e => registrarse(e)}>
                    <input type="text" onChange={e => setNombre(e.target.value)} className="input" placeholder="Ingresar Nombre" required></input>
                    <input type="password" onChange={e => setClave(e.target.value)} className="input" placeholder="Ingresar Clave" required></input>
                    <input type="password" onChange={e => setClaveRep(e.target.value)} className="input" placeholder="Repetir Clave" required></input>

                    <p className="registrarseError">{error}</p>

                    <button className="button">Crear Cuenta</button>
                </form>
            </div>
        </div>
    )
}

export default Registrarse;
