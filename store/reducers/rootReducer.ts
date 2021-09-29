import {combineReducers} from "redux";
import pokemonReducer from "./pokemonReducer";
import abilityReducer from "./abilityReducer";

const RootReducer = combineReducers({
  pokemon: pokemonReducer,
  ability: abilityReducer
});

export default RootReducer