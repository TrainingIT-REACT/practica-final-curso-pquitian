import React from 'react';
import AlbumsListItem from './AlbumsListItem';

const AlbumsList = ({ albums }) => albums.map((album) => <AlbumsListItem key={album} album={album}/>);

export default AlbumsList;