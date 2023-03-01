import React from 'react';

import './Buisness.css'

const Buisness = ({buisnessDetails}) => {
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