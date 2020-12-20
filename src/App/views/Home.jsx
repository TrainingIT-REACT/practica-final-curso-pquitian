import React, { useEffect, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';


// Components
import Loading from '../components/Loading';
import FeedbackMessage from '../components/FeedbackMessage';
const MusicRecommender = lazy(() => import('../components/MusicRecommender'));

const Home = (props) => {

    const { error, songs } = props.songs;
    const { isLoading, albums } = props.albums;
    const { name } = props.user;

    const renderError = () => <FeedbackMessage negative message='Hubo un error al cargar los datos'>Vuelve a intentarlo</FeedbackMessage>;
    const renderLoader = () => <Loading/>;
    const renderHomeView = () => (
        <>
            <Header as="h1">¡Hola{ name ? ` ${name}`: ''}!</Header>
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

export default connect(mapStateToProps)(Home);