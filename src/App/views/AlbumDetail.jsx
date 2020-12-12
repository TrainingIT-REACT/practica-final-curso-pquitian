import React, { useEffect, useContext, useState } from 'react';
// Context
import { DataContext } from '../contexts/Data';

const AlbumDetail = ({ match }) => {
    const albumId = match.params.id;

    // Context
    const context = useContext(DataContext);
    const { albums } = context;

    // States
    const [album, setAlbum] = useState({});

    const getAlbumData = (albumId) => {
        return albums.find(album => album.id === parseInt(albumId));
    }; 

    useEffect(() => {
        setAlbum(getAlbumData(albumId));
    }, [context]);

    return (
        <>
        <h1>Álbum: {albumId}</h1>
        { album && album.name }
        </>
    );
}

export default AlbumDetail;