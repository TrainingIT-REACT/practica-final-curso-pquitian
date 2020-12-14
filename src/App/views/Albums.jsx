import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Actions 
import { getAlbums } from '../../actions/albums'

// Components 
import AlbumsList from '../components/AlbumsList';

const Albums = (props) => {
    const { isLoading, error, albums, getAlbums } = props;

    useEffect(() => {
        getAlbums();
    }, []);

    if (isLoading) {
      return <p>Cargando...</p>
    } else if (error) {
      return <p>Hubo un error al obtener los datos :(</p>
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
