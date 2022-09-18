import React from 'react';

function Image(props) {
    return (
        <div>
            <img src={props.profilePhoto}></img>
        </div>
    );
}

export default Image;