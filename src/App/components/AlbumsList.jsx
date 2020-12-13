import React from 'react';
import AlbumListItem from './AlbumListItem';

const AlbumsList = ({ albums }) => albums.map((album) => <AlbumListItem key={album} album={album}/>);

export default AlbumsList;