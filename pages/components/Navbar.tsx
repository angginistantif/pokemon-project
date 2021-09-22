import { Header, Container } from "semantic-ui-react";
// own css files here
interface Props {
  title : string
}
export const Navbar = ({ title }: Props) => {
  return (
    <Container textAlign='center'>
    <Header as='h1'>Welcome to Pokémon API</Header>
    <Header.Subheader>{title}</Header.Subheader>
    </Container>
  );
};