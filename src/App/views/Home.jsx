import React, { useContext, Suspense, lazy } from 'react';
import { Link } from "react-router-dom";

// Context
import { DataContext } from '../contexts/Data';

// Components
const HomeCard = lazy(() => import('../components/HomeCards/HomeCard'));


const Home = () => {

    // Context
    const context = useContext(DataContext);
    const { albums } = context;

    return (
        <>
        <h1>¡Hola!</h1>
        <h2>Álbumes disponibles</h2>
        <Suspense fallback="cargando...">
            <HomeCard itemList={albums} pathName="album">
                <Link to="/albumes">Ver todos los álbumes</Link>
            </HomeCard>
        </Suspense> 
        </>
    );
}
    

export default Home;