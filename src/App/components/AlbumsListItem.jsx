import React from 'react';


const AlbumsListItem = (props) => {
    const { album } = props;
    
    return <>
        <h1>{album.name}</h1>
        <p>{album.artist}</p>
        <img src={album.cover} alt={album.name}/>
    </>
};

export default AlbumsListItem;