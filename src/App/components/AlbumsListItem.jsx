import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image} from 'semantic-ui-react';

// 
import { ROUTES } from '../routes/routes';

const AlbumsListItem = (props) => {
    const { album } = props;
    
    return (
        <Link to={`album/${album.id}`}>
            <Card raised>
                <Image src={album.cover} wrapped ui={true}/>
                <Card.Content>
                    <Card.Header>{album.name}</Card.Header>
                    <Card.Meta>{album.artist}</Card.Meta>
                </Card.Content>
            </Card>
        </Link>
    );
};

export default AlbumsListItem;