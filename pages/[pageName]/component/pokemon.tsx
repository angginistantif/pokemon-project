import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../../../store/store";
import {GetPokemon} from '../../../store/actions/pokemon/pokemonAction';
import { Image, List, Header, Segment, Grid } from 'semantic-ui-react';
import Link from 'next/link';


function Pokemon(name: any) {

    const pokemonState = useSelector((state: RootStore) => state.pokemon);
    const [isReady, setReady] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetPokemon(name.name));
        setReady(true);
      }, [])
    

    return (
    <div className="App">
        {pokemonState.pokemon && (
        <div>
            <Grid columns={3} divided>
                <Grid.Row stretched>
                <Grid.Column centered> 
                    <Segment >
                        <Image src={pokemonState.pokemon.sprites.front_default} centered size='medium' alt={pokemonState.pokemon.name}/>

                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>
                        <Header as='h4'>
                            ID-{pokemonState.pokemon.id} <br/><br/>
                            {pokemonState.pokemon.name.toUpperCase()}<br/><br/>
                            WEIGHT-{pokemonState.pokemon.weight} <br/><br/>
                            HEIGHT-{pokemonState.pokemon.height}<br/><br/>
                        </Header>
                    </Segment>
                    <Segment>
                        <Header as='h4'> <Link href='/ability'> ABILITIES </Link> </Header>
                        <List bulleted>
                            {pokemonState.pokemon.abilities.map(ability => {
                            return (
                                <List.Item>
                                    <Header as='h5'>{ability.ability.name}</Header>
                                </List.Item>)
                            })}
                        </List>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>
                        <Header as='h4'> <Link href='type'>TYPE</Link> </Header>
                        <List bulleted>
                            {pokemonState.pokemon.types.map(each => {
                            return (
                                <List.Item>
                                    <Header as='h5'>{each.type.name}</Header>
                                </List.Item>)
                            })}
                        </List>
                    </Segment>
                    <Segment>
                        <Header as='h4'> <Link href='/stat'>STATS </Link> </Header>
                            <List bulleted>
                                {pokemonState.pokemon.stats.map(each => {
                                return (
                                    <List.Item>
                                        <Header as='h5'>{each.stat.name}</Header>
                                    </List.Item>)
                                })}
                            </List>
                    </Segment>
                </Grid.Column>
                </Grid.Row>
            </Grid>            
        </div>
        )}
    </div>
    );
    }

    export default Pokemon;