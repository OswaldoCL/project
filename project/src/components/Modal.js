function Modal(props){
    return(
        <div className="modal">
            <h3>Update user</h3>
            <form>
                <p>

                </p>
            </form>   

            <button className="btn" onClick={props.onAccept}>Confirm</button>  
            <button className="btn btn--alt" onClick={props.onClick}>Cancel</button>  
        </div>
    );

}
export default Modal;