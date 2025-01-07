import React from 'react';

const Menu: React.FC = () => {
    const menuItems = [
        { id: 1, name: 'Spaghetti Carbonara', description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.', price: 15.99 },
        { id: 2, name: 'Margherita Pizza', description: 'Traditional pizza topped with fresh mozzarella, tomatoes, and basil.', price: 12.99 },
        { id: 3, name: 'Lasagna', description: 'Layers of pasta, meat, cheese, and tomato sauce baked to perfection.', price: 16.99 },
        { id: 4, name: 'Tiramisu', description: 'Coffee-flavored Italian dessert made with mascarpone cheese and cocoa.', price: 7.99 },
    ];

    return (
        <section aria-label="Menu Section">
            <h2 className="section-title">Our Menu</h2>
            <ul className="menu-list">
                {menuItems.map(item => (
                    <li key={item.id} className="menu-item">
                        <h3 className="menu-item-name">{item.name}</h3>
                        <p className="menu-item-description">{item.description}</p>
                        <span className="menu-item-price">${item.price.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Menu;