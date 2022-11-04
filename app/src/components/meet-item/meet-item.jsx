
import {faPlus,faNewspaper} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import { ActContext } from "../../context/act-context";
import "./meet-item.css"
import { faTrashCan,faPen} from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";

const MeetItem=({id,affair,date,room,act})=>{



    const {setIdMeet,setAct}=useContext(ActContext)

    const OpenModalActs=()=>{
        setIdMeet(id);

        const modal=document.querySelector('.modal-act')

        modal.classList.add('modal-container--show')
    }

    const OpenModalGetActs=()=>{

        setAct(act)

        const modal=document.querySelector('.modal-getact')

        modal.classList.add('modal-container--show')

    }

    const DeleteMeetItem=()=>{

        Axios.delete(`https://meetapielectiva.herokuapp.com/meets/${id}`)
        .then(response=>{
            if(response.status === 200){
                window.location.reload();
            }
        })
    }
    
    return(

        <>
            <div className="meet-item-container">
                <div className="meet-item-title"><strong>{affair}</strong></div>
                <div className="meet-item-info">{date}</div>
                <div className="meet-item-info">Sala: {room}</div>
                <div className="meet-item-info">Acta:
                {
                    (act==null)
                    ? <i onClick={e=>OpenModalActs()}> <FontAwesomeIcon size= "2xl"className="button-actions" icon={faPlus} /></i>
                    : <i  onClick={e=>OpenModalGetActs()}> <FontAwesomeIcon size= "2xl"className="button-actions" icon={faNewspaper} /></i>
                }
                </div>

                <div className="meet-item-info">

                <i className="button-actions" onClick={e=>DeleteMeetItem()}><FontAwesomeIcon color="red"className="fa-xl" icon={faTrashCan} /></i>
                      &nbsp;
                      &nbsp;
                      &nbsp;
                <i className="button-actions"><FontAwesomeIcon color="blue"className="fa-xl" icon={faPen} /></i>
                </div>
            </div>
        </>
    )

}

export default MeetItem;