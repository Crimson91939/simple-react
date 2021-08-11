import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Item(props) {
  const [modelIsOpen, setModalIsOpen] = useState(false);

  function DeleteHandler() {
    setModalIsOpen(true);
  }
  function closeModal(){
    setModalIsOpen(false);
  }
    
  

  return (
  
      <div className="card">
        <h1>{props.text}</h1>
        <p className="price">${props.price}</p>
        <p>Some text about the {props.text}..</p>

        <p>
          <button className="button" onClick= {DeleteHandler} >
            Delete
          </button>
        </p>

        
      {/* if two conditions are true then 2nd condition will be shown */}
      {modelIsOpen && <Modal onCancel= {closeModal} onConfirm= {closeModal} />}
      {modelIsOpen && <Backdrop onCancel= {closeModal} />}
      </div>

  );
}

export default Item;
