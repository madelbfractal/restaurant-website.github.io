import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Reservations from './pages/Reservations';
import VirtualTour from './components/VirtualTour';
import Menu from './components/Menu';
import WineList from './components/WineList';
import PairingsList from './components/PairingsList';
import SeasonalMenus from './components/SeasonalMenus';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/reservations" component={Reservations} />
                <Route path="/virtual-tour" component={VirtualTour} />
                <Route path="/menu" component={Menu} />
                <Route path="/wine-list" component={WineList} />
                <Route path="/pairings" component={PairingsList} />
                <Route path="/seasonal-menus" component={SeasonalMenus} />
            </Switch>
        </Router>
    );
};

export default App;