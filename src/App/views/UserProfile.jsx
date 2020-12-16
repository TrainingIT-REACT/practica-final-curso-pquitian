import React from 'react';
import { connect } from 'react-redux';

import FeedbackMessage from '../components/FeedbackMessage';

const UserProfile = ({ isLogged, name, location}) => {
    const feedbackMessage = location.state && location.state.feedbackMessage || null;
    return (
        <>
            { feedbackMessage && <FeedbackMessage success message={feedbackMessage}>¡Bienvenide, {name}!</FeedbackMessage> }


            
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        isLogged: state.user.isLogged,
        name: state.user.name
    }
};

export default connect(mapStateToProps)(UserProfile);