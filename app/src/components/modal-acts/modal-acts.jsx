import { useState } from "react";
import { BiXCircle } from "react-icons/bi";
import Axios from "axios";
import "./modal-acts.css";
const ModalActs = ({ meetId }) => {
  const [act, setAct] = useState("");

  const SendDataAct = () => {

    Axios.post("http://localhost:8080/acts", {
      description: act,
      meet: { id: meetId },
    });
    window.location.reload();
  };

  const CloseModalAct=(e)=> {
    e.preventDefault();
    const modal=document.querySelector('.modal-act')
    modal.classList.remove('modal-container--show')
  }

 
  return (
    <>
      <section className="modal-container modal-act">
        <form className="modal-content">
          <div className="modal-header">
            <h3>Agregar Acta</h3>
            <i onClick={CloseModalAct}>
              <BiXCircle ></BiXCircle>
            </i>
          </div>

          <textarea
            onChange={(e) => setAct(e.target.value)}
            placeholder="Digite el acta de la reunión..."
            className="textarea-modal"  
            rows="5"
            
          >
          
          </textarea>

          <button onClick={(e) => SendDataAct()} type="button">
            Agregar
          </button>
        </form>
      </section>
    </>
  );
};

export default ModalActs;
