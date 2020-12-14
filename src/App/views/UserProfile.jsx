import React from 'react';
import { connect } from 'react-redux';

// Actions
// import { logUser } from '../../actions/user';

const UserProfile = ({ isLogged }) => {
    return (
         !isLogged ? <p>No estás logado</p> : <p>Estás logado</p>
    );
};

const mapStateToProps = (state) => {
    return {
        isLogged: state.user.isLogged
    }
};

export default connect(mapStateToProps)(UserProfile);