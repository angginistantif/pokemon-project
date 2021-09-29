import {Dispatch} from "redux";
import {ABILITY_FAIL, ABILITY_LOADING, ABILITY_SUCCESS, AbilityDispatchTypes} from "./abilityType";
import axios from "axios";

export const GetAbility = (ability: string) => async (dispatch: Dispatch<AbilityDispatchTypes>) => {
  try {
    dispatch({
      type: ABILITY_LOADING
    })

    const res = await axios.get(`https://pokeapi.co/api/v2/ability/${ability}`);

    dispatch({
      type: ABILITY_SUCCESS,
      payload: res.data
    })

  } catch(e) {
    dispatch({
      type: ABILITY_FAIL,
    })
  }
};