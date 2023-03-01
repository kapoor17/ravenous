import React from 'react';
import Buisness from '../Buisness/Buisness';

import "./BuisnessList.css"

const BuisnessList = (props) => {
    return (
        <div className="BusinessList">
            {props.buisnesses.length > 0 ?
            props.buisnesses.map((buisness,index) => { 
                return <Buisness key={index} buisnessDetails={buisness}/>
            }) :
            <h1>Press Search to get Results!</h1>
            }
        </div>
    );
};

export default BuisnessList;