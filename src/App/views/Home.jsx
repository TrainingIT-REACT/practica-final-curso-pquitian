import React, { useEffect, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

import { ROUTES } from '../routes/routes';

// AState actions 
import { getSongs } from '../../actions/songs'
import { getAlbums } from '../../actions/albums';

// Components
const HomeCard = lazy(() => import('../components/HomeCard'));


const Home = (props) => {

    const { error, songs } = props.songs;
    const { getSongs, getAlbums } = props;
    const { isLoading, albums } = props.albums;

    useEffect(() => {
        getSongs();
        getAlbums();
    }, []);

    if (error) {
        return <p>Hubo un error al cargar los datos</p>
    } else if (isLoading) {
        return <p>Cargando...</p>
    } else {
        return <>
        <Header as="h1">¡Hola!</Header>
        <Header as="h2">Canciones recomendadas</Header>
        <Suspense fallback="cargando...">
            <HomeCard {...{songs, albums}} pathName="album"></HomeCard>
        </Suspense>
        </>
    }
        
}

const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({
    getSongs: () => dispatch(getSongs()),
    getAlbums: () => dispatch(getAlbums()),
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Home);