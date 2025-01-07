import React from 'react';

const WineList: React.FC = () => {
    const wines = [
        { name: 'Chianti Classico', type: 'Red', description: 'A classic Italian red wine with a rich flavor.' },
        { name: 'Pinot Grigio', type: 'White', description: 'A light and crisp white wine with citrus notes.' },
        { name: 'Prosecco', type: 'Sparkling', description: 'A bubbly Italian sparkling wine, perfect for celebrations.' },
        { name: 'Barolo', type: 'Red', description: 'A full-bodied red wine with complex flavors and aromas.' },
        { name: 'Sangiovese', type: 'Red', description: 'A medium-bodied red wine with cherry and earthy notes.' },
    ];

    return (
        <section aria-label="Wine List Section">
            <h2 className="section-title">Our Wine Selection</h2>
            <ul className="wine-list">
                {wines.map((wine, index) => (
                    <li key={index} className="wine-item">
                        <h3>{wine.name}</h3>
                        <p><strong>Type:</strong> {wine.type}</p>
                        <p>{wine.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default WineList;