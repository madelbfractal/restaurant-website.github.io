import React from 'react';
import VirtualTour from '../components/VirtualTour';
import Menu from '../components/Menu';
import WineList from '../components/WineList';
import PairingsList from '../components/PairingsList';
import SeasonalMenus from '../components/SeasonalMenus';

const About: React.FC = () => {
    return (
        <div className="about-page">
            <h1>About Us</h1>
            <p>Welcome to Gina’s Italian Cuisine, where we bring the flavors of Italy to your table. Our restaurant is dedicated to providing an exceptional dining experience with a focus on quality ingredients and authentic recipes.</p>
            <p>Join us for a virtual tour of our restaurant, explore our menu, and discover our extensive wine list and seasonal offerings.</p>
            <VirtualTour />
            <Menu />
            <WineList />
            <PairingsList />
            <SeasonalMenus />
        </div>
    );
};

export default About;