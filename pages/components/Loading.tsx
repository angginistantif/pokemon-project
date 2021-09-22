import { Grid, Image } from "semantic-ui-react";
// own css files here

export const Loading = () => {
  return (
    <Grid>
          <div className='loaderPosition' >
            <Image src={'/loader.gif'} size='small' />
          </div>
          <div className='loaderPosition' >
            <br/><br/><br/><br/><br/>
            <text style={{'textAlign': 'center'}}> &#9;waiting....</text>          
          </div>
        </Grid>
  );
};