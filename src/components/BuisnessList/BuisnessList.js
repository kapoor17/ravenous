import React from 'react';
import Buisness from '../Buisness/Buisness';

import "./BuisnessList.css"

const BuisnessList = (props) => {
    return (
        <div className="BusinessList">
            {props.buisnesses.map((buisness,index) => { 
                return <Buisness key={index} buisnessDetails={buisness}/>
            })}
        </div>
    );
};

export default BuisnessList;