import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Sidebar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import infoPaginas from './InfoPaginas';
import { useSelector } from 'react-redux';

function Sidebar() {
    const usuario = useSelector(state => state.usuario);
    if (!usuario) return <Redirect to="/ingresar"/>;

    return (
        <nav className="sideBar">
            <ul className="sideBarList">
                {
                    infoPaginas.map(pagina => (
                        <Link className="sideBarLink" key={pagina.nombre} to={pagina.link}>
                            <li className="sideBarItem" id={(window.location.pathname.split("/")[1] === pagina.link.split("/")[1]) ? "sideBarActive" : ""}>
                                <FontAwesomeIcon icon={pagina.icono} className="sideBarIcon" />
                                <p>{pagina.nombre}</p>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Sidebar;
