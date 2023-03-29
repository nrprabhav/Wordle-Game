import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Modal.css"

function GameOverModal(props) {
  return (
    <div>
      {props.isCorrect && (<Modal
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
      </Modal>)}
      {!props.isCorrect && (<Modal
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
      </Modal>)}
    </div>
  );
}

export default GameOverModal;
//import "./Modal.css"
/*
export default function Modal({ isCorrect, solution, turn }) {
  return (
    <div class="modal" tabindex="-1" role="dialog">
      {isCorrect && (
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">Save changes</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Nevermind</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time :)</p>
        </div>
      )}
    </div>
  )
}
*/