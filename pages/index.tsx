import Head from 'next/head'
import { Loading } from './components/Loading'
import { Navbar } from './components/Navbar'
import React from 'react'
import axios from 'axios'
import { Image, Card, Header, Segment, Grid } from 'semantic-ui-react';
import { Route } from 'react-router'
import { WithRouterProps } from "next/dist/client/with-router";

import Link from 'next/link'
import router from 'next/router'


interface Props {

}
interface State {
    apiData ?: Array<string>;
    isReady?: boolean;
}

class Home extends React.Component <Props, State, WithRouterProps> {

  constructor (props : Props){
    super(props);
    this.state = {
      isReady: false,
      apiData : [],
    }
  }

  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/')
    .then((response) => {
      let tempKey: string[] = [];
      Object.keys(response.data).map((e) => {
        tempKey.push(e)
      })
      this.setState ({apiData : tempKey, isReady:true})
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
        <Navbar title='Home'/>
        <br/><br/>
        <Card.Group centered textAlign='center' >
        {this.state.apiData?.map((answer, i) => {    
            return (
              <Card className='card-Hover'style={{"height":"38px"}} key={i} onClick={()=>router.push(`/`+answer)}>
                  <Card.Header textAlign='center'>
                  {answer}
                  </Card.Header>
              </Card>
                    
            )         
        })}
        </Card.Group>
      </div>
    ) 
    }
  }
}

export default Home;
