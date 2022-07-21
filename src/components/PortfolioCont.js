import React, {useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Project from "./Project";
import Contact from "./Contact";
import AboutMe from "./AboutMe";

export default function PortfolioCont() {
    const [currentView, setView] = useState('Home');

    const renderView = () => {
        if (currentView === 'Home') {
            return <AboutMe />
        }
        if (currentView === 'Projects') {
            return <Project />
        }
        if (currentView === 'Contact') {
            return <Contact />
        }
    }

    const handleViewChange = (view) => setView(view);

    return (
        <div>
            <Header />
            <Navigation currentView = {currentView} handleViewChange={handleViewChange} />
            {renderView()}
            <Footer />
        </div>
    );
}