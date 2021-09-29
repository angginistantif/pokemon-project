import {ABILITY_FAIL, ABILITY_LOADING, ABILITY_SUCCESS, AbilityDispatchTypes, AbilityType} from "../actions/ability/abilityType";

  
  interface DefaultStateI {
    loading?: boolean,
    ability?: AbilityType,
    error: boolean,
  }
  
  const defaultState: DefaultStateI = {
    loading: false,
    error: false
  };
  
  const abilityReducer = (state: DefaultStateI = defaultState, action: AbilityDispatchTypes) : DefaultStateI => {
    switch (action.type) {
      case ABILITY_FAIL:
        return {
          error: true
        }
      case ABILITY_LOADING:
        return {
          loading: true,
          error: false,
        }
      case ABILITY_SUCCESS:
        return {
          ability: action.payload,
          error: false
        }
      default:
        return state
    }
  };
  
  
  export default abilityReducer;