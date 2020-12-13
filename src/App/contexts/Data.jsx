import React, { useState, useEffect } from 'react';

const DataContext = React.createContext();

const DataProvider = ({ children }) => {

    const [albums, setAlbums] = useState([]);
    // const [songs, setSongs] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
              const res = await fetch('/albums');
              const json = await res.json();
              // setLoading(false);
              setAlbums(json);        
            } catch(err) {
              console.error("Error accediendo al servidor", err);
            }
        };
        getData();
    }, []);

    return (<DataContext.Provider value={{
        albums
    }}>
        {children}
    </DataContext.Provider>)

}

export { DataContext, DataProvider};