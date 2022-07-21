import React, {useState} from 'react';

function Navigation() {
    return (
        <div>
            {/* copies in navigation code from portfolio already created https://github.com/ChannellNumber5/CRobinsonPortfolio */}
                   <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a role="button" class="navbar-burger" data-target='navMenu' aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            
            <div id="navMenu" className="navbar-menu">
                <div className="navbar-start">   
                </div>
                <div className="navbar-end">
                    <a className="navbar-item" href="">Home</a>
                    <a className="navbar-item" href="">About Me</a>
                    <a className="navbar-item" href=""> Projects</a>
                    <a className="navbar-item" href="">Contact Me</a>
                </div>
            </div>

        </nav> 
        </div>
    );
}

export default Navigation;