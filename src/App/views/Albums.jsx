import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Actions 
import { getAlbums } from '../../actions/albums'

const Albums = ({ isLoading, error, albums, getAlbums }) => {

    useEffect(() => {
        getAlbums();
    }, []);

    if (isLoading) {
        return <p>Cargando...</p>
      } else if (error) {
        return <p>Hubo un error al obtener los datos :(</p>
      } else {
        return <>
        Hola {JSON.stringify(albums)}
        </>
      }

}

const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({
    getAlbums: () => dispatch(getAlbums()),
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
