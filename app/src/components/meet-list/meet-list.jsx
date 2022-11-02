import { useState } from "react";
import MeetItem from "../../components/meet-item/meet-item";
import "./meet-list.css";
const MeetList = ({ meets, rooms }) => {
  const [room, setRoom] = useState(null);

  const FiltrerRoom = (id) => {
    rooms.map((room) => {
      if (room.id == id) {
        return room.description;
      }
    });

    return null;
  };
  return (
    <>
      <div className="meet-list-container">
        {meets.map((meet) => {
          return (
            <MeetItem
              id={meet.id}
              affair={meet.affair}
              date={meet.dateMeet}
              room={FiltrerRoom(meet.room.id)}
              act={meet.act}
            ></MeetItem>
          );
        })}
      </div>
    </>
  );
};

export default MeetList;
