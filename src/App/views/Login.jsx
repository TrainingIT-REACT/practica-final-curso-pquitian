import React from 'react';
import { connect } from 'react-redux';

// Actions
import { logUser } from '../../actions/user';

// Components 
import LoginForm from '../components/LoginForm';

const Login = ({ isLogged, logUser, location }) => {
    const errorMessage = location.state && location.state.errorMessage || null;

    const handleOnSubmitLoginForm = () => {
        logUser();
    };

    return (
    isLogged ? <p>Estás logado</p>
    : <LoginForm onSubmit={handleOnSubmitLoginForm}>{errorMessage}</LoginForm>
    );
};

const mapStateToProps = (state) => {
    return {
        isLogged: state.user.isLogged
    }
};

const mapDispatchToProps = (dispatch) => ({
    logUser: () => dispatch(logUser())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Login);