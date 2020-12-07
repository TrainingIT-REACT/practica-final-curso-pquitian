import React, { useEffect, useContext, useState } from 'react';
// Context
import { DataContext } from '../contexts/Data';

const AlbumDetail = ({ match }) => {
    const albumId = match.params.id;

    // Context
    const context = useContext(DataContext);
    const { albums } = context;
    const [album, setAlbum] = useState({});

    const getAlbumData = (albumId) => {
        albums.find(album => album.id === albumId);
    }; 

    useEffect(() => setAlbum(getAlbumData()), []);

    return (
        <>
        <h1>Álbum: {albumId}</h1>
        {albums}
        </>
    );
}

export default AlbumDetail;