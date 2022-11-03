import Modal from "./Modal";
import Backdrop from "./Backdrop";
import {useState} from 'react';

function Buttons(props){
    const [showModal, setShowModal] = useState(false);

    function updateUser(){
        setShowModal(true);
    }
    function deleteUser(){

    }
    function showItems(){

    }
    function closeModalHandler(){
        setShowModal(false);
    }


    return(
        <div className="actions">
            <button className="btn" onClick={updateUser}>Update</button>
            <button className="btn" onClick={deleteUser}>Delete</button>
            <button className="btn" onClick={showItems}>Items</button>
            {showModal && <Modal onAccept={closeModalHandler} onClick={closeModalHandler} />}
            {showModal && <Backdrop onClick={closeModalHandler} />}
        </div>
    );
}
export default Buttons;