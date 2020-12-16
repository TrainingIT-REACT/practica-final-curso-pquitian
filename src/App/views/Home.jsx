import React, { useEffect, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

import { ROUTES } from '../routes/routes';

// AState actions 
import { getSongs } from '../../actions/songs'
import { getAlbums } from '../../actions/albums';

// Components
import Loading from '../components/Loading';
import FeedbackMessage from '../components/FeedbackMessage';
const MusicRecommender = lazy(() => import('../components/MusicRecommender'));

const Home = (props) => {

    const { error, songs } = props.songs;
    const { getSongs, getAlbums } = props;
    const { isLoading, albums } = props.albums;

    useEffect(() => {
        getSongs();
        getAlbums();
    }, []);

    const renderError = () => <FeedbackMessage negative message='Hubo un error al cargar los datos'>Vuelve a intentarlo</FeedbackMessage>;
    const renderLoader = () => <Loading/>;
    const renderHomeView = () => (
        <>
            <Header as="h1">¡Hola!</Header>
            <Header as="h2">
                Canciones recomendadas
                <Header.Subheader>Basado en las preferencias del resto de usuarios</Header.Subheader>
            </Header>
            <Suspense fallback={Loading}>
                <MusicRecommender {...{songs, albums}} pathName="album"></MusicRecommender>
            </Suspense>
        </>
    );

    if (error) {
       return  renderError(); 
    } else if (isLoading) {
        return renderLoader(); 
    } else {
        return renderHomeView();
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