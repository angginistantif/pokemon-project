import { Header, Container } from "semantic-ui-react";
// own css files here
interface Props {
  title : string
}
export const Navbar = ({ title }: Props) => {
  return (
    <Container textAlign='center'>
    <Header as='h1'>Welcome to Pokémon API</Header>
    <Header.Subheader>{title?.toString().charAt(0).toUpperCase().concat(title?.toString().slice(1).toLowerCase())}</Header.Subheader>
    </Container>
  );
};