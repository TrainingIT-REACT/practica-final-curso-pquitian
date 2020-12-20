import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import { Header } from 'semantic-ui-react';

import SongPlayer from '../components/SongPlayer';

const Song = (props) => {
    const songId = props.match.params.id;
    const songs = props.songs;

    // state
    const [song, setSong] = useState({});

    useEffect(() => {
        const currentSong = getCurrentSong();
        setSong(currentSong);
    }, [songs]);

    const getCurrentSong = () => {
        return songs.find(s => s.id == songId);
    }

    const formatDuration = (sec) => {
        if (!sec || sec < 60) return;
        const minutes = Math.floor(sec / 60);
        const seconds = sec - minutes * 60;
    
        const formattedDuration = String(`${minutes}' ${seconds}''`);
    
        return formattedDuration;
    };

    const renderSongInfo = (song) => <>
        <Header as="h2">Título: {song && song.name}</Header>
        <p>Duration: {song && formatDuration(song.seconds)}</p>
        { song && <SongPlayer song={song}/>}
    </>;


    if(props.isLoading) {
        return <Loading/>
    } else {
        return renderSongInfo(song);
    }

};

const mapStateToProps = (state) => {
    return {...state.songs} ;
}

export default connect(mapStateToProps)(Song);