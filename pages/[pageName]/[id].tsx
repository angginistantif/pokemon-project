import Head from 'next/head'
import  { Loading }  from '../components/Loading'
import  {Navbar}  from '../components/Navbar'
import React from 'react'
import axios from 'axios'
import { Image, Card, Header, Segment, Grid, Breadcrumb } from 'semantic-ui-react';
import Link from 'next/link'
import Error from '../_error'
import router from 'next/router'
import {Pokemon} from './component/Pokemon' 

interface Props {
  
}
interface State {
    keyData?: Array<any>;
    pageData ?: Array<any>;
    isReady?: boolean;
    isError?: boolean;
    statusCode?: number;
}

class Home extends React.Component <Props, State> {

  constructor (props : Props){
    super(props);
    this.state = {
      isReady: false,
      pageData : [],
      keyData : [],
      isError: false,
      statusCode: 500
    }
  }  

  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/'+router.query.pageName+'/'+router.query.id)
    .then((response) => {
      let tempKey: string[] = [];
      Object.keys(response.data).map((e) => {
        tempKey.push(e)
      })


      this.setState({pageData: response.data, isReady:true, keyData:tempKey})
    }).catch((error) => {
      this.setState({isError : true, statusCode: error.statusCode, isReady:true})
    })
    .then(function () {
    });    
  }

  getPosition(){
  }

  render() {
    if (!this.state.isReady){
      return(
        <Loading/>
      )
    } if (this.state.isError){
      return (<> <Error statusCode={404}/>  </>    )
    } if (router.query.pageName === 'pokemon'){
      return(     
      <div>
        <Head>
          <title> Pokemon Project </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Breadcrumb>
          <Breadcrumb.Section link href='/'>Home</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section link >{router.query.pageName}</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section active>{router.query.id}</Breadcrumb.Section>
        </Breadcrumb>
        <Navbar title={router.query.pageName + ' - ' + router.query.id}/>
        <br/><br/>  
        { router.query.pageName === 'pokemon'
          ? <Pokemon pokemonData={this.state.pageData} pokemonKey={this.state.keyData}/>:<></>}
      </div>
    ) 
    } else {
      return (<> <Error statusCode={404}/>  </>    ) 
    }
  }
}

export default Home
