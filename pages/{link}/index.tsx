import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import axios from 'axios'
import {Card, Button} from 'react-bootstrap';
import { Tab } from 'semantic-ui-react';


interface Props {
  onClick: Function;}

interface State {
    show?: string;
    apiData ?: Array<string>;
    tempData ?: Array<any>

  }


class Home extends React.Component <Props, State> {

  constructor (props : Props){
    super(props);
    this.state = {
      show : 'ini state',
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
      this.setState ({apiData : tempKey})
    }).catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });   
  }

  showAllData = () =>{
    this.state.apiData?.map((answer, i) => {    
      console.log(answer) 
       return (<div key={i}> {answer} <br/> </div> )         
    })

  }
    
  
  render() {
    return(     
      <div>
        <Head>
          <title> Pokemon Project </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='container'>
        {this.state.apiData?.map((answer, i) => {    
            return (
            <div className='row'>
              {answer}
            </div>)         
        })}
        </div>
        
       

        

    
      </div>
    ) 
    
  }
}

export default Home
