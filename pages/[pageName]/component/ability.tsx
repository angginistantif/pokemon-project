import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../../../store/store";
import { Image, List, Header, Segment, Grid } from 'semantic-ui-react';
import Link from 'next/link';
import { GetAbility } from '../../../store/actions/ability/abilityAction';


function Ability(name: any) {

    const abilityState = useSelector((state: RootStore) => state.ability);
    const [isReady, setReady] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetAbility(name.name));
        setReady(true);
      }, [])
    

    return (
    <div className="App">
        {abilityState.ability && (
        <div>
            <Grid columns='equal'>
                <Grid.Row>
                <Grid.Column>
                    <Segment>
                    <Header as='h4'>
                            ID-{abilityState.ability.id} <br/><br/>
                            {abilityState.ability.name.toUpperCase()}<br/><br/>
                            {abilityState.ability.generation.name}                    </Header>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>
                    <Header as='h4'> <Link href='/stat'>STATS </Link> </Header>
                            <List bulleted>
                                {abilityState.ability.effect_entries.map(each => {
                                return (
                                    <List.Item>
                                        <Header as='h5'>{each.effect}</Header>
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

    export default Ability;