import React, { useState, useEffect } from 'react';
import { List, Image } from 'semantic-ui-react';

const randomFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const addItemToArr = (item, arr) => {
    const doesItemExistsInArr = arr.filter(i => i.id === item.id).length > 0; 

    if (doesItemExistsInArr) return;
    return arr.push(item);
};


const getRecommendedSongs = (songs) => {
    let recommendations = [];
    const lastArrItem = songs.length - 1;
    
    do {
        const randomIndex = randomFromInterval(0, lastArrItem);
        addItemToArr(songs[randomIndex], recommendations);
    } while(recommendations.length < 8);

    return recommendations;
};

const MusicRecommender = ({ albums, songs, pathName, children }) => {

    // TODO: improve this code and split in components

    const [recommendedSongs, setRecommendedSongs] = useState([]);

    useEffect(() => {
        const randomizedRecommendations = getRecommendedSongs(songs);
        setRecommendedSongs(randomizedRecommendations);
    }, []);

    const getAlbumData = (songAlbumId) => albums.filter(album => album.id === songAlbumId);


    return (
        <>
            <List selection verticalAlign='middle'>
                {recommendedSongs.map((song, i) => {
                    const album = getAlbumData(song.album_id)
                    const {cover, name} = album[0];

                    return (
                    <List.Item key={i}>
                        <Image avatar src={cover}/>
                        <List.Content>
                            <a href={`/${pathName}/${song.id}`}>
                                <List.Header>{song.name}</List.Header>
                            </a>
                            <List.Description>{name}</List.Description>
                        </List.Content>
                    </List.Item> )
                    }
                )}
            </List>
            { children }
        </>
    );
};

export default MusicRecommender;