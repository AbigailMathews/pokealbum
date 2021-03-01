import React, { Component } from 'react';
import './CardList.css';

import Card from '../Card/Card'

class CardList extends Component {

    render() {
        return (
            <div className='card-list'>
                {this.props.pokemonList.map((pokemon) => {
                    return (<Card key={pokemon.pokemon.id} pokemon={pokemon.pokemon} />)
                })}
            </div>
        )
    }
}

export default CardList;