import React from 'react';

const AlbumListItem = ({ album }) => <>
        <h1>{album.name}</h1>
        <p>{album.artist}</p>
        <img src={album.cover} alt={album.name}/>
    </>;

export default AlbumListItem;