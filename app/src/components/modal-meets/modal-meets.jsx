import { useEffect, useState } from "react";
import { BiXCircle} from "react-icons/bi";
import Axios from "axios";
import "./modal-meets.css"
const ModalMeets = () => {

    const [affair,setAffair]=useState("");
    const [dateMeet,setDateMeet]=useState(null);
    const [rooms,setRooms]=useState([])

  useEffect(()=>{

    Axios.get("http://localhost:8080/rooms")
    .then(response =>setRooms(response.data))
  }
  ,[])

  const SendDataMeet=()=>{
    
    const room=document.getElementById("room").value;
    
    
    Axios.post("http://localhost:8080/meets",{
        affair:affair,
        dateMeet:dateMeet, 
        room:{id:room}
        
    })
    window.location.href="./meets";
  }

 
  return (
    <>
      <section className="modal-container modal-meet">
        <form className="modal-content">
          <div className="modal-header">
            <h3>Agregar Reunion</h3>
            <i >
              <BiXCircle size=""></BiXCircle>
            </i>
          </div>

          <input
            className="input-modal"
            type="text"
            placeholder="Asunto"
            onChange={(e) => {
              setAffair(e.target.value);
            }}
          ></input>

          <input
            className="input-modal"
            type="date"
            placeholder="Fecha"
            onChange={(e) => {
              setDateMeet(e.target.value);
            }}
          ></input>
          

          <select id="room"  className="input-modal">

            <option> Seleccione una sala ...</option>
            {rooms.map((room) =>{

                return(

                    <option value={room.id}>{room.description}</option>
                )
            }
            
            )}
          </select>
          <button onClick={e=>SendDataMeet()}type="submit">
            Agregar
          </button>
        </form>
      </section>
    </>
  );
};

export default ModalMeets;
