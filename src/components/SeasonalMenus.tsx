import React from 'react';

const SeasonalMenus: React.FC = () => {
    const seasonalMenus = [
        {
            season: 'Spring',
            dishes: ['Asparagus Risotto', 'Lamb Chops with Mint Sauce', 'Strawberry Tiramisu']
        },
        {
            season: 'Summer',
            dishes: ['Grilled Vegetable Salad', 'Seafood Pasta', 'Peach Cobbler']
        },
        {
            season: 'Fall',
            dishes: ['Pumpkin Soup', 'Roasted Duck with Apples', 'Pecan Pie']
        },
        {
            season: 'Winter',
            dishes: ['Beef Stew', 'Baked Ziti', 'Chocolate Fondue']
        }
    ];

    return (
        <section aria-label="Seasonal Menus Section">
            <h2 className="section-title">Seasonal Menus</h2>
            {seasonalMenus.map((menu, index) => (
                <div key={index} className="seasonal-menu">
                    <h3>{menu.season}</h3>
                    <ul>
                        {menu.dishes.map((dish, idx) => (
                            <li key={idx}>{dish}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default SeasonalMenus;