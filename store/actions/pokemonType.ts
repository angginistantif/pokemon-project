export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";

export type PokemonType = {
  id: number,
  name: string,
  height: number,
  weight: number,
  abilities: PokemonAbility[],
  sprites: PokemonSprites,
  stats: PokemonStat[]
  type: PokemonTypeData[]
}

export type PokemonAbility = {
  ability: {
    name: string
    url: string
  }
}

export type PokemonSprites = {
  front_default: string
}

export type PokemonStat = {
  base_stat: number,
  stat: {
    name: string
  }
}

export type PokemonTypeData = {
  slot: number,
  type: {
    name: string,
    url: string
  };
}

export interface PokemonLoading {
  type: typeof POKEMON_LOADING
}

export interface PokemonFail {
  type: typeof POKEMON_FAIL
}

export interface PokemonSuccess {
  type: typeof POKEMON_SUCCESS,
  payload: PokemonType
}

export type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess