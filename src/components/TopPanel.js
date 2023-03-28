import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopPanel(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container className='flex-column'>
        <Navbar.Brand href="#home"><h1 className='display-1'>Wordle</h1></Navbar.Brand>
          <Nav>
            <Nav.Link onClick={props.ModalInstructionHandler}>Instructions</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default TopPanel;