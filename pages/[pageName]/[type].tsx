import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../../store/store";
import {GetPokemon} from '../../store/actions/pokemonAction';
import { Image, Card, Header, Container, Grid, Breadcrumb, Form } from 'semantic-ui-react';
import Head from 'next/head';
import Pokemon from './component/pokemon'

interface Props {
    query?: [] | any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function App(Props : any) {
  
  return (
    <div className="App">
      <Head>
          <title>{Props.query.pageName?.toString().charAt(0).toUpperCase().concat(Props.query.pageName?.toString().slice(1).toLowerCase())} </title>
          <meta property="og:title" content="My page title" key="title" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      { Props.query.pageName == 'pokemon'
        && <Pokemon name={Props.query.type}/>}
      
    </div>
  );
}

App.getInitialProps = async ({query} : any) => {
    return {query}
}


export default App;