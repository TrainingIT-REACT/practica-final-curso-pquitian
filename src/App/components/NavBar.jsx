import React from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../routes/routes';

const NavBar = () => {
    return <>
        <nav>
            <div class="ui inverted menu">
                <NavLink to={ROUTES.HOME} className="item" activeClassName="active">Inicio</NavLink>
                <NavLink to={ROUTES.USER_PROFILE} className="item" activeClassName="active">Perfil</NavLink>
                <NavLink to={ROUTES.ALBUMS} className="item" activeClassName="active">Álbumes</NavLink>
            </div>
        </nav>
    </>;
}

export default NavBar;