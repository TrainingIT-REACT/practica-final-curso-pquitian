import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// Actions 
import { getSongs } from '../../actions/songs';
import { getAlbums } from '../../actions/albums';

// Components 
import AlbumDetail from '../components/AlbumDetail';
import Loading from '../components/Loading';


const Album = (props) => {
    const albumId = props.match.params.id;

    // Props
    const { albums, isLoading } = props.albums;
    const { songs } = props.songs;
    const { getAlbums, getSongs } = props;

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
        getAlbums();
        getSongs();
    }, []);

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
const mapDispatchToProps = (dispatch) => ({
    getSongs: () => dispatch(getSongs()),
    getAlbums: () => dispatch(getAlbums()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);