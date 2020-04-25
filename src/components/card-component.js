import React from 'react';

const Card = props => (
    <div className="card-container">
        <img 
            src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} 
            alt=""
        />
        <h1 className="monster-name"> {props.monster.name} </h1>
        <p className="monster-email"> {props.monster.email} </p>
    </div>
);

export default Card