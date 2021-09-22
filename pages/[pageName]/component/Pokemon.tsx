import { Header, Card, Grid, Container } from "semantic-ui-react";
// own css files here
interface Props {
  pokemonData : any[] | undefined
  pokemonKey: any[] | undefined
}
export const Pokemon = ({pokemonData, pokemonKey} : Props) => {
    console.log(pokemonData)
  return (
    <Container> 
        <Header as='h1'> 
            ID      : {pokemonData?.id} <br/>
            Name    : {pokemonData?.name} <br/>
            Order   : {pokemonData?.order} <br/>
            Weight   : {pokemonData?.weight} <br/>
            Height   : {pokemonData?.height} <br/>
            Abilities : {pokemonData?.abilities.length} <br/>
            Base Experience : {pokemonData?.base_experience} <br/>
            Forms : {pokemonData?.forms.length} <br/>
            Game Indices : {pokemonData?.games_indices} <br/>
        </Header>
    </Container>
  );
};