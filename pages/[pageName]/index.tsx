import Head from 'next/head'
import React from 'react'
import axios from 'axios'
import { Image, Card, Header, Container, Grid, Breadcrumb, Form, Button } from 'semantic-ui-react';
import Link from 'next/link'
import Error from '../_error'
import router from 'next/router'
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../../store/store";
import {GetPokemon} from "../../store/actions/pokemonAction";

interface Props {
  query?: [] | any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  
}
interface State {
    pageType?: string;
    pageData ?: Array<any>;
    isReady?: boolean;
    isError?: boolean;
    statusCode?: number;
    totalFetch?: number;
}

class Home extends React.Component <Props, State> {

  constructor (props : Props){
    super(props);
    this.changeFetch = this.changeFetch.bind(this)
    this.getData = this.getData.bind(this)
    this.state = {
      isReady: false,
      pageData : [],
      pageType : '',
      isError: false,
      statusCode: 500,
      totalFetch: 20,
    }
  }  

  static getInitialProps = ({query}: any) =>{
    return {query}
  }

  componentDidMount(){
      this.setState({pageType : this.props.query.pageName})
      this.getData();
  }

  getData(){
    let baseURL = 'https://pokeapi.co/api/v2/'+this.props.query.pageName;
    if (this.props.query.pageName  == 'pokemon' || this.props.query.pageName == 'ability'){
      baseURL = baseURL+'?limit='+this.state.totalFetch+'&offset='+this.state.totalFetch
    }
    axios.get(baseURL)
    .then((response) => {
      this.setState({pageData: response.data.results, isReady:true})
    }).catch((error) => {
      this.setState({isError : true, statusCode: error.statusCode, isReady:true})
    })
  }

  changeFetch = (e: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({totalFetch : parseInt(e.currentTarget.value)})
  }

  detailData = (name : string) =>{
    router.push(`/${router.query.pageName}/${name}`)
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
    } if (this.state.isError){
      return (<> <Error statusCode={404}/>  </>    )
    } else {
    return(     
      <div>
        <Head>
          <title> {router.query.pageName?.toString().charAt(0).toUpperCase().concat(router.query.pageName?.toString().slice(1).toLowerCase())}  </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Breadcrumb>
          <Breadcrumb.Section link href='/'>Home</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section active>{router.query.pageName}</Breadcrumb.Section>
        </Breadcrumb>
        <Container textAlign='center'>
          <Header as='h1'>Welcome to Pokémon API</Header>
          <Header.Subheader>{router.query.pageName?.toString().charAt(0).toUpperCase().concat(router.query.pageName?.toString().slice(1).toLowerCase())}</Header.Subheader>
          </Container>
        <br/><br/>

       <Grid textAlign='center'>
        { router.query.pageName == 'pokemon' || router.query.pageName == 'ability'
          ?
            <>
            <Form onSubmit={()=> this.getData()}>
              <Form.Group  inline>
              <Form.Input type='number' min={1} value={this.state.totalFetch} onChange={(e)=>this.changeFetch(e)} color='grey'/>
              <Form.Button content='TOTAL DATA'/>
              </Form.Group>
            </Form>
            <br/><br/>
            </>
          : <></>
        }
        </Grid>

        <Card.Group centered textAlign='center' >
        {this.state.pageData?.map((answer, i) => {    
            return (
              <Card className='card-Hover'style={{"height":"38px"}} key={i} value={answer.name} onClick={() => this.detailData(answer.name)}>
                  <Card.Header textAlign='center'>
                  {answer.name}
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

export default Home
