import React from 'react';
import Image from '../atoms/Image';
import logo from '../images/CLRLogo.JPG';

const headerStyle = {
    backgroundColor:"#0C928C",
    display:"flex",
    flexDirection:"row",
    border:"solid 2px black",
    borderRadius: "5%",
};

const imageStyle = {
    border:"solid 2px black",
    radius: "5%",
    maxWidth: "20%",
}

const titleStyle = {
    maxWidth: "80%",
}

function Header() {
    return (
        <div style={headerStyle}>
            <Image style={imageStyle} image={logo}/>
            <div id="titleHeader">
                <h1 style = {titleStyle}>Christina <span id="elle">l </span>. Robinson | Web Developer</h1>
            </div>
        </div>
    );
}

export default Header;