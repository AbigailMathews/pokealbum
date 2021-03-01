import React, {Component} from 'react';
import './App.css';

import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search'; 

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemon: [],
      pokemonDetail: [],
      search: ''
    }
  }

  fetchDetails = () => {
    this.state.pokemon.map((pokemon) => {
      return fetch(pokemon.url).then((response) => response.json()).then((result) => {
        this.setState(state => {
            const pokemonDetail = state.pokemonDetail.concat({pokemon: result})

            return {
                ...state,
                pokemonDetail
            }
        })
      })
    })
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20').then(response => {
      return response.json()
    }).then(result => {
      this.setState({pokemon: result.results})
    }).then(() => {
      this.fetchDetails()
    })
  }

  updateSearch = (e) => {
    this.setState({search: e.target.value})
  }

  render() {

    const { pokemonDetail, search } = this.state
    const filteredPokemon = pokemonDetail.filter(pokemon => {
      return pokemon.pokemon.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to PokeAlbum</h1>
          <Search 
            handleChange={this.updateSearch}
            placeholder="search pokemon" />
          <div>
            <CardList pokemonList={filteredPokemon} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
