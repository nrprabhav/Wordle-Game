import "./Submit.css"

const Submit = (props) => {
    return (
        <div className="specialBtn">
            <button type="button" className="btn btn-outline-dark btn-icons" onClick={props.backSpace}><i class="material-icons">backspace</i></button>
            <button type="button" className="btn btn-outline-dark btn-icons" onClick={props.clickHandler}><i class="material-icons">keyboard_return</i></button>
        </div>
    );
}

export default Submit;