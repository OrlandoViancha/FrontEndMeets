import "./modal-getact.css";
import { BiXCircle } from "react-icons/bi";
import Axios from "axios";
const ModalGetAct = ({ act }) => {

    const CloseModalGetAct=(e)=> {
        e.preventDefault();
        const modal=document.querySelector('.modal-getact')
        modal.classList.remove('modal-container--show')
      }

      const DeleteAct = (e) => {
        
        console.log(act.id)
        e.preventDefault();
        Axios.delete(`http://localhost:8080/acts/${act.id}`)
        window.location.reload();
      }
  return (
    <>
      <section className="modal-container-act modal-getact">
        <form className="modal-content-act">
          <div className="modal-header-act">
            <h3>Acta de la Reunión</h3>
            <i onClick={CloseModalGetAct}>
              <BiXCircle size=""></BiXCircle>
            </i>
          </div>

          <div className="modal-area-act">{act.description}</div>
          
            <div className="modal-buttons">
                <button onClick={DeleteAct}className ="btn-delete" type="button">Eliminar</button>
                <button onClick={CloseModalGetAct} type="button">Cerrar</button>
            </div>
            
            
          
          
        </form>
      </section>
    </>
  );
};

export default ModalGetAct;
