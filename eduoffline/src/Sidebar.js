import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import infoPaginas from './InfoPaginas';

function Sidebar() {
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
