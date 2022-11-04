import { useState } from "react";
import MeetItem from "../../components/meet-item/meet-item";
import "./meet-list.css";
const MeetList = ({ meets,rooms,query,stateQuery }) => {

  const [room,setRoom]=useState(null);
  const [meet,setMeet]=useState();

  const FiltrerRoom=(id)=>{

    var description=null;
    rooms.map((room) => {
        if (room.id == id) {
           
        description =room.description;
        }
      });
      return description;
    
  }
  return (
    <>
      <div className="meet-list-container">
        
        {

          (stateQuery==false)
         ?
        meets.map((meet) => {
         
          return (
            <MeetItem id={meet.id}affair={meet.affair} date={meet.dateMeet} room={FiltrerRoom(meet.room.id)} act={meet.act}></MeetItem>
          );
        })
        : query.map((meet) => {
         
          return (
            <MeetItem id={meet.id}affair={meet.affair} date={meet.dateMeet} room={FiltrerRoom(meet.room.id)} act={meet.act}></MeetItem>
          );
        })
      }
      </div>
    </>
  );
};

export default MeetList;
