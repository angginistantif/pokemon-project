import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../../store/store";
import {GetPokemon} from '../../store/actions/pokemon/pokemonAction';
import { Image, Card, Header, Container, Grid, Breadcrumb, Form } from 'semantic-ui-react';
import Head from 'next/head';
import Pokemon from './component/pokemon'
import Ability from './component/ability';
import Error from '../_error'


interface Props {
    query?: [] | any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function App(Props : any) {

  if (!(Props.query.pageName == 'ability' || Props.query.pageName == 'pokemon')){
    return <Error statusCode={400}/>
  } 
  
  return (
    <div className="App">
      
      <Head>
          <title>{Props.query.pageName?.toString().charAt(0).toUpperCase().concat(Props.query.pageName?.toString().slice(1).toLowerCase())} </title>
          <meta property="og:title" content="My page title" key="title" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumb>
          <Breadcrumb.Section link href='/'>Home</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section link href={`/${Props.query.pageName}`} >{Props.query.pageName}</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section active>{Props.query.type}</Breadcrumb.Section>
        </Breadcrumb>
        <Container textAlign='center'>
          <Header as='h1'>Welcome to Pokémon API</Header>
          <Header.Subheader>
            {Props.query.pageName?.toString().charAt(0).toUpperCase().concat(Props.query.pageName?.toString().slice(1).toLowerCase()) + ' - ' +Props.query.type?.toString().charAt(0).toUpperCase().concat(Props.query.type?.toString().slice(1).toLowerCase())}
          </Header.Subheader>
          </Container>
        <br/><br/>
      { Props.query.pageName == 'pokemon'
        && <Pokemon name={Props.query.type}/>}
      { Props.query.pageName == 'ability'
        && <Ability name={Props.query.type}/>}
      
    </div>
  );
}

App.getInitialProps = async ({query} : any) => {
    return {query}
}


export default App;