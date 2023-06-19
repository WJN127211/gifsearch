import React, { Component } from 'react';

const GifCard = ({ gif }) => {
    return (
        <div style={{ margin: '10px' }}>
            <p>{gif.title}</p>
            <img src={gif.images.fixed_height.url}
                alt={gif.title}
                style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover'
                }}
            />

        </div>
    );
};

export default GifCard;