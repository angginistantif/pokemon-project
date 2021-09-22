import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Grid, Image, Header, Button, Container } from "semantic-ui-react";
import router from 'next/router';
interface Props {
  statusCode: number;
}

const Error: React.FC<Props> = ({ statusCode }) => {
  const title = statusCode === 404 ? '404' : 'Error';

  return (
    <>
      <Head>

      </Head>
      <Container>
        {statusCode === 404
          ? 'The page you are looking for could not be found.'
          : <Grid>
          <div className='loaderPosition' >
            <Header as='h2' color='grey' style={{'textAlign': 'center'}}> 404 Error</Header>
            <br/>
            <Image src={'/404Image.png'} size='small' />
            <text > &#9;Halaman tidak ditemukan....</text> 
            <br/><br/>
            <div style={{'textAlign': 'center'}}>
            <Button size='small' onClick={()=> router.push('/')} content='Kembali ke Home'color='orange'/>    
            </div>
          </div>
         
        </Grid>}
      </Container>
    </>
  );
};


export default Error;