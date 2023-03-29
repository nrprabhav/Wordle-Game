import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Modal.css"

function GameOverModal(props) {
  // Modals to tell the user the results.
  
  return (
    <div>
      {props.isCorrect && ( // If isCorrect is true show the Win modal
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className='d-flex justify-content-center'>
          <Modal.Title id="contained-modal-title-vcenter">
            <p className='display-1 mx-auto'>You won!</p>
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <p className="text-center">The solution is:</p>
          <p className="solution text-center">
            {props.solution.split("").map(l =>
              <span className='span-solution'>{l}</span>
            )}
          </p>
          <p className="text-center">You found the solution in {props.turn} guesses :)</p>
        </Modal.Body>
        
        <Modal.Footer className='justify-content-center'>
          <Button onClick={props.onHide} variant="outline-dark">Close</Button>
        </Modal.Footer>
      </Modal>
      )}

      {!props.isCorrect && ( // If isCorrect is false show the Lose Modal
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className='d-flex justify-content-center'>
          <Modal.Title id="contained-modal-title-vcenter">
            <p className='display-1 mx-auto'>Never Mind</p>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="text-center">The solution is:</p>
          <p className="solution text-center">
            {props.solution.split("").map(l =>
              <span className='span-solution'>{l}</span>
            )}
          </p>
          <p className="text-center">Better luck next time!</p>
        </Modal.Body>

        <Modal.Footer className='justify-content-center'>
          <Button onClick={props.onHide} variant="outline-dark">Close</Button>
        </Modal.Footer>
      </Modal>
      )}
    </div>
  );
}

export default GameOverModal;