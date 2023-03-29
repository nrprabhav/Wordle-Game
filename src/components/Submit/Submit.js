import "./Submit.css"

// Code to have the backspace and enter buttons on the keyboard below the wordle panel
const Submit = (props) => {
    return (
        <div className="specialBtn">
            <button type="button" className="btn btn-outline-dark btn-icons" onClick={props.backSpace}><i class="material-icons">backspace</i></button>
            <button type="button" className="btn btn-outline-dark btn-icons" onClick={props.clickHandler}><i class="material-icons">keyboard_return</i></button>
        </div>
    );
}

export default Submit;