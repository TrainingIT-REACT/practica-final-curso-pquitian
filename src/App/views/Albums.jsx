import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Actions 
import { getAlbums } from '../../actions/albums'

// Components 
import AlbumsList from '../components/AlbumsList';
import Loading from '../components/Loading';
import FeedbackMessage from '../components/FeedbackMessage';

const Albums = (props) => {
    const { isLoading, error, albums, getAlbums } = props;

    useEffect(() => {
        getAlbums();
    }, []);

    if (isLoading) {
      return <Loading/>
    } else if (error) {
      return <FeedbackMessage negative message='Hubo un error al obtener los datos :('>Prueba otra vez</FeedbackMessage>
    } else {
      return <>
      <AlbumsList albums={albums}/>
      {isLoading}
      {error}
      </>
    }

}

const mapStateToProps = (state) => ({
    ...state.albums
});

const mapDispatchToProps = (dispatch) => ({
    getAlbums: () => dispatch(getAlbums()),
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
