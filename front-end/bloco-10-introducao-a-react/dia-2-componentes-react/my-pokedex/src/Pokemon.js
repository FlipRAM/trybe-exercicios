import React from "react";
import './pokemon.css';
import PropType from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className="eachPokemon">
        <ul className="eachPokemonStats">
          <li className="pokemon-name">{pokemon.name}</li>
          <li className="pokemon-type">{pokemon.type}</li>
          <li className="pokemons-weight">{`Average weight: ${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</li>
          <li className="saiba-mais"><a href={pokemon.moreInfo}>Saiba Mais</a></li>
        </ul>
        <img src={pokemon.image} alt={`the pokemon ${pokemon.name} of type ${pokemon.type} with average weight of ${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}></img>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropType.shape({
    id: PropType.number,
    name: PropType.string,
    type: PropType.string,
    averageWeight: PropType.shape({
      value: PropType.number,
      measurementUnit: PropType.string,
    }),
    image: PropType.string,
    moreInfo: PropType.string
  }).isRequired
};

export default Pokemon;