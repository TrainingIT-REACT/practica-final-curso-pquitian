import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Actions
import { logUser } from '../../actions/user';

import { ROUTES } from '../routes/routes';

// Components 
import LoginForm from '../components/LoginForm';
import FeedbackMessage from '../components/FeedbackMessage';

const Login = (props) => {

    const { logUser, location } = props;
    const userProfile = props.user;

    const errorMessage = location.state && location.state.errorMessage || null;

    const handleOnSubmitLoginForm = (user) => {
        logUser(user);
    };

    const renderLoginForm = () => (
    <>
        <FeedbackMessage negative message={errorMessage}>Por favor, introduce tus datos de acceso</FeedbackMessage>
        <LoginForm onSubmit={handleOnSubmitLoginForm}></LoginForm>
    </>);

    const redirectToUserProfile = () => (
        <Redirect to={
            { pathname: ROUTES.USER_PROFILE,
              state: {
                  feedbackMessage: 'Logado correctamente'
                }
            }}/>
    );

    return (
    userProfile.isLogged ? redirectToUserProfile()
    : renderLoginForm()
    );
};

const mapStateToProps = (state) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch) => ({
    logUser: (user) => dispatch(logUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Login);