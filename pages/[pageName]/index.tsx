import Head from 'next/head'
import { Loading } from '../components/Loading'
import { Navbar } from '../components/Navbar'
import React from 'react'
import axios from 'axios'
import { Image, Card, Header, Segment, Grid } from 'semantic-ui-react';
import Link from 'next/link'
import {useHistory} from 'react-router-dom';
import router from 'next/router'

interface Props {
  
}
interface State {
    apiData ?: Array<string>;
    isReady?: boolean;
}

class Home extends React.Component <Props, State> {

  constructor (props : Props){
    super(props);
    this.state = {
      isReady: false,
      apiData : [],
    }
  }

  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/'+router.query.pageName)
    .then((response) => {
      let tempKey: string[] = [];
      console.log(response.data.results)
      this.setState({isReady:true})
    }).catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });   
  }

  render() {
    if (!this.state.isReady){
      return(
        <Loading/>
      )
    } else {
    return(     
      <div>
        <Head>
          <title> Pokemon Project </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar title={router.query.pageName + 'data'}/>
        
      </div>
    ) 
    }
  }
}

export default Home
