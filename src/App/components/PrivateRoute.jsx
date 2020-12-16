import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { ROUTES } from '../routes/routes';

const PrivateRoute = ({ isLogged, component: Component, ...others }) => {
    return <Route {...others}
    render={(props) => 
        isLogged
        ? <Component {...props} />
        : <Redirect to={
            { pathname: ROUTES.LOGIN,
              state: {
                  errorMessage: 'Debes estar logado para ver este contenido'
                }
            }}/>
    }/>
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.user.isLogged
    }
};

export default connect(mapStateToProps)(PrivateRoute);