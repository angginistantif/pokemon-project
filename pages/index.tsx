import Head from 'next/head'
import React from 'react'
import axios from 'axios'
import { Image, Card, Header, Container, Grid } from 'semantic-ui-react';
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
        <Grid>
          <div className='loaderPosition' >
            <Image src={'/loader.gif'} size='small' />
          </div>
          <div className='loaderPosition' >
            <br/><br/><br/><br/><br/>
            <text style={{'textAlign': 'center'}}> &#9;waiting....</text>          
          </div>
        </Grid>
      )
    } else {
    return(     
      <div>
        <Head>
          <title> Pokemon Project </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <br/>
        <Container textAlign='center'>
          <Header as='h1'>Welcome to Pokémon API</Header>
          <Header.Subheader>Home</Header.Subheader>
          </Container>  <br/><br/>
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
