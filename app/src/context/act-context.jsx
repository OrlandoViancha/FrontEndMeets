import { createContext, useState } from "react";


export const ActContext= createContext();

export const ActProvider=({children})=>{

    const [idMeet,setIdMeet]=useState("");
    const [act,setAct]=useState("")

    return (

        <>
            <ActContext.Provider value={{idMeet,setIdMeet,act,setAct}}>

                {children}
            </ActContext.Provider>

        </>
    )

}

