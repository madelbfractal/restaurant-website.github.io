import React from 'react';
import VirtualTour from '../components/VirtualTour';
import Menu from '../components/Menu';
import WineList from '../components/WineList';
import PairingsList from '../components/PairingsList';
import SeasonalMenus from '../components/SeasonalMenus';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Gina’s Italian Cuisine</h1>
            <VirtualTour />
            <Menu />
            <WineList />
            <PairingsList />
            <SeasonalMenus />
        </div>
    );
};

export default Home;