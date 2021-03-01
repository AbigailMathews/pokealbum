import React from 'react';
import './Card.css';

const Card = (props) => {

    return (
        <div className='card-container'>
            <img alt={"image of " + props.pokemon.name} src={props.pokemon.sprites.front_default} /> 
            <h2>{props.pokemon.name.toUpperCase()}</h2>
            <ul>Types {props.pokemon.types.map((type) => {
                return <li key={props.pokemon.name+type.type.name}>{type.type.name}</li>
            })}</ul>
        </div>
    )
}

export default Card;