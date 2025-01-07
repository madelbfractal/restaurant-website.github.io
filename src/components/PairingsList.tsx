import React from 'react';

const PairingsList: React.FC = () => {
    const pairings = [
        { dish: 'Spaghetti Carbonara', wine: 'Chardonnay' },
        { dish: 'Margherita Pizza', wine: 'Sangiovese' },
        { dish: 'Osso Buco', wine: 'Barolo' },
        { dish: 'Tiramisu', wine: 'Moscato' },
    ];

    return (
        <section aria-label="Food and Wine Pairings">
            <h2 className="section-title">Recommended Pairings</h2>
            <ul className="pairings-list">
                {pairings.map((pairing, index) => (
                    <li key={index} className="pairing-item">
                        <strong>{pairing.dish}</strong> - {pairing.wine}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default PairingsList;