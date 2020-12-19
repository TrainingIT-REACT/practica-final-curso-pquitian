import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// Components 
import AlbumDetail from '../components/AlbumDetail';
import Loading from '../components/Loading';


const Album = (props) => {
    const albumId = props.match.params.id;

    // Props
    const { albums } = props.albums;
    const { songs } = props.songs;

    const isLoadingAlbums = props.albums.isLoading;
    const isLoadingSongs = props.songs.isLoading;


    // State
    const [tracklist, setTracklist] = useState([]);
    const [album, setAlbum] = useState({});

    const isLoadingData = () => isLoadingAlbums || isLoadingSongs;

    const getCurrentAlbum = (albumList) => {
        return albumList.filter(a => { 
            return a.id === parseInt(albumId);
        });
    };

    const getAlbumTracklist = (songsList) => {
        return songsList.reduce((arr, currSong) => {
            if (currSong.album_id === parseInt(albumId)) arr.push(currSong);
            return arr;
        }, []); 
    };

    useEffect(() => {
        const currentAlbum = getCurrentAlbum(albums);
        setAlbum(currentAlbum[0]);
    }, [albums]);

    useEffect(() => {
        const albumTrackList = getAlbumTracklist(songs);
        console.log(albumTrackList);
        setTracklist(albumTrackList);
    }, [album, songs]);

    if (isLoadingData()) {
        return <Loading/>
    } else {
        return <AlbumDetail {...{ tracklist, album }}/>
    }
};

const mapStateToProps = (state) => ({...state});

export default connect(mapStateToProps)(Album);