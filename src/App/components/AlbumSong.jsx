import React from 'react';

const AlbumSong = ({song}) => {
    return <>
        <p>{song.name}</p>
        <audio src={song.audio} controls="controls" type="audio/mpeg" preload="preload">
        </audio>
    </>
};

export default AlbumSong;