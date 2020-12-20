import React from 'react';
import { connect } from 'react-redux';

// Actions
import { updateListeningHistory } from '../../actions/user';

const AlbumSong = ({song, updateListeningHistory, isLogged}) => {

    const handleAudioOnClick = () => {
        if (!isLogged) return;
        const history = {
            ...song,
            lastReproduction: Date.now()
        };
        updateListeningHistory(history);
    };


    return <>
        <audio src={song.audio} controls="controls" type="audio/mpeg" onPlay={handleAudioOnClick} preload="preload">
        </audio>
    </>
};

const mapStateToProps = (state) => {
    return {
        isLogged: state.user.isLogged
    }
};

const mapDispatchToProps = (dispatch) => ({
    updateListeningHistory: (history) => dispatch(updateListeningHistory(history))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumSong);