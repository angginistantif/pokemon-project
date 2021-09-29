import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../../../store/store";
import {GetPokemon} from '../../../store/actions/pokemonAction';
import { Image, Card, Header, Container, Grid } from 'semantic-ui-react';


function Pokemon(name: any) {

    const pokemonState = useSelector((state: RootStore) => state.pokemon);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetPokemon(name.name));
      }, [])
    

    return (
    <div className="App">
        {pokemonState.pokemon && (
        <div>
            <Image src={pokemonState.pokemon.sprites.front_default} alt='ss'/>
            {pokemonState.pokemon.sprites.front_default}

            {pokemonState.pokemon.abilities.map(ability => {
            return <p>{ability.ability.name}</p>
            })}
        </div>
        )}
    </div>
    );
    }

    export default Pokemon;