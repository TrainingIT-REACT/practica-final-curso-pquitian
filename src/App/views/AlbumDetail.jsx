import React, { useEffect, useContext, useState } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// Actions 
import { getSongs } from '../../actions/songs';
import { getAlbums } from '../../actions/albums';


const AlbumDetail = (props) => {
    const albumId = props.match.params.id;

    // Props
    const { albums, isLoading, getAlbums } = props;


    // State
    const [tracklist, setTracklist] = useState([]);
    const [album, setAlbum] = useState({});

    const getCurrentAlbum = (albumList) => {
        return albumList.filter(a => { 
            return a.id === parseInt(albumId);
        });
    };

    useEffect(() => {
        getAlbums();
    }, []);

    useEffect(() => {
        const currentAlbum = getCurrentAlbum(albums);
        setAlbum(currentAlbum[0]);
    }, [albums]);

    if (isLoading) {
        return <><p>Cargando...</p>
            <h1>Álbum: {albumId}</h1>
        </>
    } else {
        return <>
        <p>{album && album.name}</p>
        <p>{JSON.stringify(album)}</p>
        </>
    }
};

const mapStateToProps = (state) => ({...state.albums});
const mapDispatchToProps = (dispatch) => ({
    // getSongs: () => dispatch(getSongs()),
    getAlbums: () => dispatch(getAlbums()),
});
/* const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({getAlbums, getSongs}, dispatch)
    }
}; */

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);