import React, {useState} from 'react';

function Navigation() {
    return (
        <div>
            {/* copies in navigation code from portfolio already created https://github.com/ChannellNumber5/CRobinsonPortfolio */}
                   <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a role="button" class="navbar-burger" data-target='navMenu' aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            
            <div id="navMenu" class="navbar-menu">
                <div class="navbar-start">   
                </div>
                <div class="navbar-end">
                    <a class="navbar-item" href="">Home</a>
                    <a class="navbar-item" href="">About Me</a>
                    <a class="navbar-item" href=""> Projects</a>
                    <a class="navbar-item" href="">Contact Me</a>
                </div>
            </div>

        </nav> 
        </div>
    );
}

export default Navigation;