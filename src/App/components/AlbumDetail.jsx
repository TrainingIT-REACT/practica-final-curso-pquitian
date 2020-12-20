import React, { useState, useEffect } from 'react';
import { Header } from 'semantic-ui-react';

// Components
import SongPlayer from './SongPlayer';

const formatDuration = (sec) => {
    if (!sec || sec < 60) return;
    const minutes = Math.floor(sec / 60);
    const seconds = sec - minutes * 60;

    const formattedDuration = String(`${minutes}' ${seconds}''`);

    return formattedDuration;
};

const AlbumDetail = (props) => {
    const { tracklist, album } = props;
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        let durationInSec = 0;
        tracklist.map(song => { 
            durationInSec = durationInSec + song.seconds;
            setDuration(durationInSec)
        })
    }, [tracklist]);

    return <>
        <Header as='h1'>{album && album.name}</Header>
        <Header as='h2'>{album && album.artist}</Header>
        <Header as='h3'>Duración</Header>
        <p>{formatDuration(duration)}</p>
        <Header as='h3'>Temas del álbum</Header>   
        {tracklist.map((song, i) => {
            return <>
                <p>{song.name}</p>
                <SongPlayer key={i} song={song}/>
                </>
        })}
        </>
};

export default AlbumDetail;