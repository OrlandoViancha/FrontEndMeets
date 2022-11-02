import { useContext, useEffect, useState } from "react";
import ModalMeets from "../../components/modal-meets/modal-meets";
import Axios from "axios";
import "./meets.css"
import MeetList from "../../components/meet-list/meet-list";
import ModalActs from "../../components/modal-acts/modal-acts";
import { ActContext } from "../../context/act-context";
import ModalGetAct from "../../components/modal-getAct/modal-getact";

const Meets = () => {

    const{idMeet,act}=useContext(ActContext);
    const [meets,setMeets]= useState([]);
    const [rooms,setRooms]= useState([]);

    useEffect(() => {
        
        Axios.get("http://localhost:8080/rooms")
        .then((response) =>{
           
            setRooms(response.data)})

        Axios.get("http://localhost:8080/meets")
        .then((response) =>{
            console.log(response.data)
            setMeets(response.data)})
    },[])

    const OpenModalMeets=()=>{

        const modal=document.querySelector('.modal-meet')

        modal.classList.add('modal-container--show')
    }

   
  return (
    <>
      <div className="meets-container">
        <div className="meet-header">
          <h3>Gestion de Reuniones</h3>
          <button onClick={OpenModalMeets} >Crear Reunion</button>
        </div>
        <div className="meet-body">
            <MeetList  meets={meets}  rooms={rooms}/>
        </div>
        <ModalMeets/>
        <ModalActs meetId={idMeet}/>
        <ModalGetAct act={act}/>
      </div>
    </>
  );
};

export default Meets;
