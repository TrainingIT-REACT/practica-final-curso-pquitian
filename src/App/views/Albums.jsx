import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Components 
import AlbumsList from '../components/AlbumsList';
import Loading from '../components/Loading';
import FeedbackMessage from '../components/FeedbackMessage';

const Albums = (props) => {
    const { isLoading, error, albums } = props;

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

export default connect(mapStateToProps)(Albums);
