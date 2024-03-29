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
          <title> Error </title>
          <link rel="icon" href="/favicon.ico" />

      </Head>
      <Grid>
          <div className='loaderPosition' >
            <Header as='h2' color='grey' style={{'textAlign': 'center'}}> Error</Header>
            <br/>
            <Image src={'/404Image.png'} size='small' alt='error'/>
            { statusCode==400
              ? <text > &#9;Halaman masih dikembangkan...</text> 
              : <text > &#9;Halaman tidak ditemukan....</text>
            }
             
            <br/><br/>
            <div style={{'textAlign': 'center'}}>
            <Button size='small' onClick={()=> router.push('/')} content='Kembali ke Home'color='orange'/>    
            </div>
          </div>
         </Grid>
    </>
  );
};


export default Error;