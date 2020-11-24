import React, { useState, useEffect } from 'react';

// Css
import './App.css';

const App = (props) => {
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
    <div className="App">
      <h1>¡Hola!</h1>
      <h2>Álbumes disponibles</h2>
        { loading ?
          <p>Cargando...</p>
          : <ul>
            {albums.map(album => <li key={album.id}>{album.name}</li>)}
          </ul>
        }
    </div>
  );

};

export default App;
