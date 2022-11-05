import "./modal-rooms.css";

import { BiXCircle} from "react-icons/bi";
import { useState } from "react";
import Axios from "axios"
import WindowAlert from "sweetalert"
const ModalRooms = ({state}) => {

  const [name,setName]=useState("");
  const [capacity,setCapacity]=useState(0);

  const CloseModalRooms=(e)=> {
    e.preventDefault();
    const modal=document.querySelector('.modals')
    modal.classList.remove('modal-container--show')
  }

  const SendDataRoom=(e)=>{ 

        if(state.state==1){
          Axios.post("https://meetapielectiva.herokuapp.com/rooms/addRoom",{
            capacity:capacity,
            description:name
        })
        .then(response=>{

          if(response.status==200){
            WindowAlert(
              {
                title:"Añadir Sala",
                text: "Agregada Correctamente",
                icon: "success",
                timer:"3000"
              })
            
            setTimeout(
              ()=>{
                window.location.reload();
              },2000
            )
          }
        }

        )
        }

        else{

          Axios.put(`https://meetapielectiva.herokuapp.com/rooms/${state.id}`,{

            id:state.id,
            capacity:document.getElementById("input-capacity").value,
            description:document.getElementById("input-name").value

          }

          )

          .then(response=>{

            if(response.status==200){
              WindowAlert(
                {
                  title:"Modificar Sala",
                  text: "Modificada Correctamente",
                  icon: "success",
                  timer:"3000"
                })
              
              setTimeout(
                ()=>{
                  window.location.reload();
                },2000
              )
            }
          }
  
          )
          
        }
        

  }
  return (


    <>
      <section className="modal-container modals">
        <form  className="modal-content">
          <div className="modal-header">
            <h3>Agregar Sala</h3>
            <i onClick={CloseModalRooms}><BiXCircle size=""></BiXCircle></i>
          </div>

          <input
            className="input-modal"
            type="text"
            id="input-name"
            placeholder="Nombre"
            onChange={e=>{setName(e.target.value)}}
          ></input>
          <input
            className="input-modal"
            id="input-capacity"
            type="number"
            placeholder="Capacidad"
            onChange={e=>{setCapacity(e.target.value)}}
          ></input>
          <button type="button"onClick={e=>SendDataRoom()}> Agregar</button>
        </form>
      </section>
    </>
  );
};

export default ModalRooms;
