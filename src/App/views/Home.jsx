import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const Home = () => {
    const [loading, setLoading] = useState(true);
    const [albums, setAlbums] = useState([]);

    useEffect(async () => {
        try {
        const res = await fetch('/albums');
        const json = await res.json();
        setLoading(false);
        setAlbums(json);
        } catch(err) {
        console.error("Error accediendo al servidor", err);
        }
    }, false);

    return (
        <>
        <h1>¡Hola!</h1>
        <h2>Álbumes disponibles</h2>
        { loading ?
            <p>Cargando...</p>
            : <ul>
            {albums.map(album => <li key={album.id}>{album.name}</li>)}
            </ul>
        }
        <Link to="/albumes">Ver todos los álbumes</Link>
        </>
    );
}
    

export default Home;