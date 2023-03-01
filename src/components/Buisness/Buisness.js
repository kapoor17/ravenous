import React from 'react';

import './Buisness.css'

const buisnessDetails = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}

const Buisness = () => {
    return (
        <div className="Business">
            <div className="image-container">
                <img src={buisnessDetails.imageSrc} alt=''/>
            </div>
            <h2>{buisnessDetails.name}</h2>
            <div className="Business-information">
                <div className="Business-address">
                    <p>{buisnessDetails.address}</p>
                    <p>{buisnessDetails.city}</p>
                    <p>{buisnessDetails.state} {buisnessDetails.zipCode}</p>
                </div>
                <div className="Business-reviews">
                    <h3>{buisnessDetails.category}</h3>
                    <h3 className="rating">{buisnessDetails.rating}</h3>
                    <p>{buisnessDetails.reviewCount}</p>
                </div>
            </div>
        </div>
    );
};

export default Buisness;