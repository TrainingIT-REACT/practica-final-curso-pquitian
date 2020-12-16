import React from 'react';
import AlbumsListItem from './AlbumsListItem';
import { Card } from 'semantic-ui-react';

const AlbumsList = ({ albums }) => {

    return (
        // albums.map((album) => <AlbumsListItem key={album} album={album}/>)
        <Card.Group itemsPerRow={3}>
         {albums.map((album, i) => {
             return <AlbumsListItem key={i} {...{album}}/>
         })}
        </Card.Group>
    );
};

export default AlbumsList;