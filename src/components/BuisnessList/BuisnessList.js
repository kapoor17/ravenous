import React from 'react';
import Buisness from '../Buisness/Buisness';

import "./BuisnessList.css"

const BuisnessList = ({buisnesses}) => {
    return (
        <div className="BusinessList">
            {buisnesses.map((buisness,index) => <Buisness key={index} buisnessDetails={buisness}/>)}
        </div>
    );
};

export default BuisnessList;