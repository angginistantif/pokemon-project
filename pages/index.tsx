import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Navbar } from './components/Navbar'
import React from 'react'
import axios from 'axios'
import { Image, Card, Header, Segment, Grid } from 'semantic-ui-react';
import Link from 'next/link'



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
            <Image src={'/loader.gif'} size='small' centered />
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
        <Navbar/>
        <Header as='h4' color='grey' textAlign='center'>Click for detail</Header>
        <br/><br/>

        <Card.Group centered textAlign='center' itemsPerRow='6' >
        {this.state.apiData?.map((answer, i) => {    
            return (
                    <Card className='card-Hover'style={{"height":"38px"}} >
                        <Link href={'/'+answer}>
                        <Card.Header textAlign='center'>
                        {answer}
                        </Card.Header>
                        </Link>
          
                    </Card>
                    
            )         
        })}
        </Card.Group>
      </div>
    ) 
    }
  }
}

export default Home
