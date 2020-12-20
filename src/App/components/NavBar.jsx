import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../routes/routes';

const NavBar = ({ isLogged, name }) => {
    const isUserPath = (pathname) => pathname === ROUTES.USER_PROFILE || pathname === ROUTES.LOGIN;
    const isUserPathActive = (location) => isUserPath(location.pathname) ? true : false;
    return <>
        <nav>
            <div className="ui inverted segment">
                <div className="ui inverted secondary menu">
                    <NavLink exact to={ROUTES.HOME} className="item" activeClassName="active">Inicio</NavLink>
                    <NavLink to={ROUTES.USER_PROFILE} className="item" activeClassName="active" 
                    isActive={(match, location) => isUserPathActive(location)}>Perfil</NavLink>
                    <NavLink to={ROUTES.ALBUMS} className="item" activeClassName="active">Álbumes</NavLink>
                    <div className="right menu">
                        {isLogged && <div className="item">
                            <NavLink to={ROUTES.USER_PROFILE} className="ui image label padding-inherit">
                            <img src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg"/>{name}
                            </NavLink>
                        </div> }
                    </div>
                </div>
            </div>
        </nav>
    </>;
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.user.isLogged,
        name: state.user.name
    }
};

export default connect(mapStateToProps)(NavBar);