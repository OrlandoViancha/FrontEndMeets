import "./rooms.css";
import Axios from "axios";
import Modal from "../../components/modal-rooms/modal-rooms";
import { useEffect, useState } from "react";
import { faTrashCan,faPen} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [state,setState]=useState(1);

  useEffect(() => {
    Axios.get("https://meetapielectiva.herokuapp.com/rooms/getRooms", {}).then((response) => {
      setRooms(response.data);
    });
  }, []);

  const OpenModalDescription = () => {
    const modal = document.querySelector(".modals");
    modal.classList.add("modal-container--show");
  };

  const PutRoom=(e,room)=>{
      OpenModalDescription(e);

      setState({"state":2,"id":room.id});
      document.getElementById("input-name").value = room.description;
      document.getElementById("input-capacity").value=room.capacity;
  }

  const DeleteRoom=(id)=>{

    Axios.delete(`https://meetapielectiva.herokuapp.com/rooms/${id}`)
    .then((response) => {
        window.location.href="./rooms"
    })

  }
  return (
    <>
      <div className="rooms-container">
        <div className="table-container">
          <div className="table-head">
            <h3>Gestion de Salas</h3>
            <button onClick={e=>{
                 setState({"state":1,"id":null})
                 document.getElementById("input-name").value=""
                 document.getElementById("input-capacity").value=""
                 OpenModalDescription()
            }
              
             }>Crear Sala</button>
          </div>
          <table>
            <thead>
              <tr>
                <th scope="col"> Id</th>
                <th scope="col"> Nombre</th>
                <th scope="col"> Capacidad</th>
                <th scope="col"> Acciones</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room,index) => {
                return (
                  <tr>
                    <td data-label="Account">{index+1}</td>
                    <td data-label="Due Date">{room.description}</td>
                    <td data-label="Amount">{room.capacity}</td>
                    <td data-label="Period">
                      <i className="button-actions" onClick={e=>DeleteRoom(room.id)}><FontAwesomeIcon color="red"className="fa-xl" icon={faTrashCan} /></i>
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      <i className="button-actions"><FontAwesomeIcon onClick={e=>PutRoom(e,room)}color="blue"className="fa-xl" icon={faPen} /></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Modal state={state}/>
      </div>
    </>
  );
};

export default Rooms;
