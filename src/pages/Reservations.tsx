import React, { useState } from 'react';

const Reservations = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [specialRequests, setSpecialRequests] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle reservation submission logic here
        console.log('Reservation Details:', { name, date, time, guests, specialRequests });
    };

    return (
        <div className="reservations-container">
            <h2>Make a Reservation</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="time">Time:</label>
                    <input
                        type="time"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="guests">Number of Guests:</label>
                    <input
                        type="number"
                        id="guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        min="1"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="specialRequests">Special Requests:</label>
                    <textarea
                        id="specialRequests"
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                    />
                </div>
                <button type="submit">Reserve</button>
            </form>
        </div>
    );
};

export default Reservations;