import React from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

const User = ({ name, songsHistory }) => {

    const renderLastReproductions = () => (
        <>
            <Header as="h3">Tus últimas reproducciones:</Header>
            { songsHistory.map(song => {
                return <p>{song.name}</p>
            }) }
        </>
    );


    return (
        <>
            <Header as="h1">Tu perfil</Header>
            <Header as="h2">{name}</Header>
            { songsHistory ? renderLastReproductions() : null}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        ...state.user
    }
};

export default connect(mapStateToProps)(User);