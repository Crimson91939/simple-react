
function Modal(props){
   
    function cancelHandler(){
        props.onCancel();
    }
    function confirmHandler(){
        props.onConfirm();
    }
    return(
            <div className="modal">
            
            <h4>Are you sure you wanna delete??</h4>
            
            <button className="Button" onClick={confirmHandler} >Confirm</button>
            <button className="Button" onClick={cancelHandler} >Cancel</button>
            </div>



    );
}

export default Modal;