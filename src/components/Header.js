import React from 'react';
import Image from '../atoms/Image';
import logo from '../images/CLRLogo.JPG';

function Header() {
    return (
        <div>
            <div id="image">
                <Image image={logo}/>
            </div>
            <div id="titleHeader">
                <h1>Christina <span id="elle">l </span>. Robinson | Web Developer</h1>
            </div>
        </div>
    );
}

export default Header;