import React from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../routes/routes';

const NavBar = () => {
    const isUserPath = (pathname) => pathname === ROUTES.USER_PROFILE || pathname === ROUTES.LOGIN;
    const isUserPathActive = (location) => isUserPath(location.pathname) ? true : false;
    return <>
        <nav>
            <div class="ui inverted menu">
                <NavLink exact to={ROUTES.HOME} className="item" activeClassName="active">Inicio</NavLink>
                <NavLink to={ROUTES.USER_PROFILE} className="item" activeClassName="active" 
                isActive={(match, location) => isUserPathActive(location)}>Perfil</NavLink>
                <NavLink to={ROUTES.ALBUMS} className="item" activeClassName="active">Álbumes</NavLink>
            </div>
        </nav>
    </>;
}

export default NavBar;