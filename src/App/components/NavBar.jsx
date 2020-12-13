import React from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../routes/routes';

const NavBar = () => {
    return <>
        <nav>
            <ul>
                <li><NavLink to={ROUTES.HOME}>Inicio</NavLink></li>
                <li><NavLink to={ROUTES.USER_PROFILE}>Perfil</NavLink></li>
                <li><NavLink to={ROUTES.ALBUMS}>Álbumes</NavLink></li>
            </ul>
        
        </nav>
    </>;
}

export default NavBar;