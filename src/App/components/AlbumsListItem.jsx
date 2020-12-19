import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image} from 'semantic-ui-react';

// 
import { ROUTES } from '../routes/routes';

const AlbumsListItem = (props) => {
    const { album } = props;
    
    return (
        <Card raised>
            <Link to={`album/${album.id}`}>
                <Image src={album.cover} wrapped ui={true}/>
            </Link>
            <Card.Content>
            <Link to={`album/${album.id}`}>
                <Card.Header>{album.name}</Card.Header>
                <Card.Meta>{album.artist}</Card.Meta>
                </Link>
            </Card.Content>
            
        </Card>
        
    );
};

export default AlbumsListItem;