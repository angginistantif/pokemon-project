import {
    POKEMON_FAIL,
    POKEMON_LOADING,
    POKEMON_SUCCESS,
    PokemonDispatchTypes,
    PokemonType
  } from "../actions/pokemon/pokemonType";
  
  interface DefaultStateI {
    loading?: boolean,
    pokemon?: PokemonType,
    error: boolean,
  }
  
  const defaultState: DefaultStateI = {
    loading: false,
    error: false
  };
  
  const pokemonReducer = (state: DefaultStateI = defaultState, action: PokemonDispatchTypes) : DefaultStateI => {
    switch (action.type) {
      case POKEMON_FAIL:
        return {
          error: true
        }
      case POKEMON_LOADING:
        return {
          loading: true,
          error: false,
        }
      case POKEMON_SUCCESS:
        return {
          pokemon: action.payload,
          error: false
        }
      default:
        return state
    }
  };
  
  
  export default pokemonReducer