import Head from 'next/head'
import  {Loading}  from '../components/Loading'
import  {Navbar}  from '../components/Navbar'
import React from 'react'
import axios from 'axios'
import { Image, Card, Header, Container, Grid, Breadcrumb } from 'semantic-ui-react';
import Link from 'next/link'
import Error from '../_error'
import router from 'next/router'

interface Props {
  
}
interface State {
    homeData?: Array<any>;
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
      homeData : [],
      isError: false,
      statusCode: 500
    }
  }  

  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/'+router.query.pageName)
    .then((response) => {
      this.setState({pageData: response.data.results, isReady:true})
    }).catch((error) => {
      this.setState({isError : true, statusCode: error.statusCode, isReady:true})
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

        <Card.Group centered textAlign='center' >
        {this.state.pageData?.map((answer, i) => {    
            return (
              <Card className='card-Hover'style={{"height":"38px"}} key={i} onClick={()=>router.push('/'+router.query.pageName+'/'+answer.name)}>
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
