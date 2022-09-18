import React from 'react';

function Image(props) {
    console.log(props);
    return (
        <img src={props.image} alt="image"></img>
    );
}

export default Image;