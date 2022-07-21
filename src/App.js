import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Project from "./components/Project";

function App() {
    return(
        <div>
            <Navigation />
            <Header />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;