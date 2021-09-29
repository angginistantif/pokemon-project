export const ABILITY_LOADING = "ABILITY_LOADING";
export const ABILITY_FAIL = "ABILITY_FAIL";
export const ABILITY_SUCCESS = "ABILITY_SUCCESS";

export type AbilityType = {
  id: number,
  name: string,
  generation: {
      name: string
  }
  effect_entries: AbilityEffectEntries[],
}

export type AbilityEffectEntries = {
    effect: string;
}



export interface AbilityLoading {
  type: typeof ABILITY_LOADING
}

export interface AbilityFail {
  type: typeof ABILITY_FAIL
}

export interface AbilitySuccess {
  type: typeof ABILITY_SUCCESS,
  payload: AbilityType
}

export type AbilityDispatchTypes = AbilityLoading | AbilityFail | AbilitySuccess