import { useContext, useEffect, useState } from "react";
import ModalMeets from "../../components/modal-meets/modal-meets";
import Axios from "axios";
import "./meets.css"
import MeetList from "../../components/meet-list/meet-list";
import ModalActs from "../../components/modal-acts/modal-acts";
import { ActContext } from "../../context/act-context";
import ModalGetAct from "../../components/modal-getAct/modal-getact";
import { Spinner } from "reactstrap";

const Meets = () => {

    const{idMeet,act}=useContext(ActContext);
    const [meets,setMeets]= useState([]);
    const [rooms,setRooms]= useState([]);
    const [query,setQuery]= useState([]);
    const [stateQuery,setStateQuery]= useState(false);
    const [loading,setLoading]=useState(false);

    useEffect(() => {
        
        Axios.get("https://meetapielectiva.herokuapp.com/rooms/getRooms")
        .then((response) =>{
           
            setRooms(response.data)
            if(response.status==200){
              setTimeout(() =>{
                setLoading(true);

              },2000)
             
            }
          })
        

        Axios.get("https://meetapielectiva.herokuapp.com/meets")
        .then((response) =>{
            console.log(response.data)
            setMeets(response.data)})
    },[])

    const OpenModalMeets=()=>{

        const modal=document.querySelector('.modal-meet')

        modal.classList.add('modal-container--show')
    }

    const FindMeetsofRoom=()=>{

        
        const selectRoom=document.getElementById("select-room-query").value;
        if(selectRoom=="0"){
          setStateQuery(false);
        }
        else{
          const search= meets.filter(meet => meet.room.id==selectRoom);
          setStateQuery(true);
          setQuery(search);
        }
        
    }

    

   
  return (

    (loading==false)
    ?<Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
    :
    <>
      <div className="meets-container">
        <div className="meet-header">
          <h3>Gestion de Reuniones</h3>
          <button onClick={OpenModalMeets} >Crear Reunion</button>
          <select id="select-room-query"onChange={e=>{
            
            FindMeetsofRoom()
          }}>
            <option value="10"> Seleccione una sala ..</option>
            <option value="0"> Todas</option>
           {
            rooms.map(room=>{
              return(

                <option value={room.id}>{room.description}</option>
              )
            })
           }
          </select>
        </div>
        <div className="meet-body">
            <MeetList  meets={meets}  rooms={rooms}  query={query} stateQuery={stateQuery}/>
        </div>
        <ModalMeets/>
        <ModalActs meetId={idMeet}/>
        <ModalGetAct act={act}/>
      </div>
    </>
  );
};

export default Meets;
