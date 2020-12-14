import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// Actions 
import { getSongs } from '../../actions/songs'

const AlbumListItem = (props) => {
    const { album, getSongs, isLoading, songs, error } = props;

    const [tracklist, setTracklist] = useState([]);

    const getAlbumTracklist = () => {
        return songs.reduce((acc, curr) => {
        
            if (curr.album_id === album.id) acc.push(curr);
            return acc;
        }, []);
    };

    useEffect(() => {
        getSongs();
    }, []);

    useEffect(() => {
        setTracklist(getAlbumTracklist);
    }, [songs]);

    return <>
        <h1>{album.name}</h1>
        <p>{album.artist}</p>
        <img src={album.cover} alt={album.name}/>
        {tracklist && tracklist.map((song, i) => <p key={i}>{song.name}</p>)}
    </>
};

const mapStateToProps = (state) => ({...state.songs});
const mapDispatchToProps = (dispatch) => ({
    getSongs: () => dispatch(getSongs()),
}); 

export default connect(mapStateToProps, mapDispatchToProps)(AlbumListItem);