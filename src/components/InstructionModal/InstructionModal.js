import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Construct a modal that gives instructions about the game.
function InstructionModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='d-flex justify-content-center'>
                <Modal.Title id="contained-modal-title-vcenter">
                    <p className='display-1 mx-auto'>Instructions</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul>
                    <li>You have six tries to guess the five-letter Wordle of the day.</li>
                    <li>Type in your guess and submit your word by hitting the “enter” key. You may use either the Wordle keyboard or a keyboard on your device.</li>
                    <li>The color of the tiles will change after you submit your word. A yellow tile indicates that you picked the right letter but it’s in the wrong spot. The green tile indicates that you picked the right letter in the correct spot. The gray tile indicates that the letter you picked is not included in the word at all.</li>
                    <li>Continue until you solve the Wordle or run out of guesses. Good luck!</li>
                </ul>
            </Modal.Body>
            <Modal.Footer className='justify-content-center'>
                <Button onClick={props.onHide} variant="outline-dark">Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default InstructionModal;