import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";

// Context
import { DataContext } from '../contexts/Data';


const Home = () => {

    const context = useContext(DataContext);
    const { albums } = context;
    const loading = false;

    return (
        <>
        <h1>¡Hola!</h1>
        <h2>Álbumes disponibles</h2>
        { loading ?
            <p>Cargando...</p>
            : <ul>
            {albums.map(album => 
                <li key={album.id}>
                    <a href={`/album/${album.id}`}>{album.name}</a>
                </li>)
            }
            </ul>
        }
        <Link to="/albumes">Ver todos los álbumes</Link>
        </>
    );
}
    

export default Home;