import React, { useEffect, useContext, useState } from 'react';


const AlbumDetail = ({ match }) => {
    const albumId = match.params.id;

    return (
        <>
        <h1>Álbum: {albumId}</h1>
        {/*  album && album.name */}
        </>
    );
}

export default AlbumDetail;