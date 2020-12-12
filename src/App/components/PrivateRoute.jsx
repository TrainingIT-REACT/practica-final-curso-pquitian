import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isLogged, component: Component, ...others }) => {
    return <Route {...others}
    render={(props) => 
        isLogged
        ? <Component {...props} />
        : <Redirect to={
            { pathname: '/login',
              state: {
                  errorMessage: 'Debes estar logado para acceder'
                }
            }}/>
    }/>
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.isLogged
    }
};

export default connect(mapStateToProps)(PrivateRoute);