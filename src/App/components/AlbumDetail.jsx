import React from 'react';

// Components
import AlbumSong from './AlbumSong';

const AlbumDetail = (props) => {
    const { tracklist, album } = props;

    return <>
        <h1>{album && album.name}</h1>
        <p>Artista: {album && album.artist}</p>
        <p>Canciones:</p>   
        {tracklist.map((song, i) => {
            return <AlbumSong key={i} song={song}/>
        })}
        </>
};

export default AlbumDetail;