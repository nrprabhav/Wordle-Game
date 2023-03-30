import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import WhiteboardToggle from '../WhiteboardToggle';
import "./TopPanel.css"

// Code to make the TopPanel in the App page
function TopPanel(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container className='flex-column'>
      <WhiteboardToggle toggleWhiteboard={props.toggleWhiteboard}/>
        <Navbar.Brand href="#home"><h1 className='display-1'>Wordle</h1></Navbar.Brand>
          <Nav>
            <Nav.Link onClick={props.ModalInstructionHandler}>Instructions</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default TopPanel;