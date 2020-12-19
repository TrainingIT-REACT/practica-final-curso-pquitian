import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image} from 'semantic-ui-react';

// 
import { ROUTES } from '../routes/routes';

const AlbumsListItem = (props) => {
    const { album } = props;
    
    return (
        <Card raised>
            <a href={`album/${album.id}`}>
                <Image src={album.cover} wrapped ui={true}/>
            </a>
            <Card.Content>
            <a href={`album/${album.id}`}>
                <Card.Header>{album.name}</Card.Header>
                <Card.Meta>{album.artist}</Card.Meta>
            </a>
            </Card.Content>
            
        </Card>
        
    );
};

export default AlbumsListItem;