import React, { useState, useContext } from 'react'
import Axios from 'axios'
import { DeleteContext } from './page-control'
interface Status{
    status: "PLANNED" | "IN_PROGRESS" | "DONE" | "BLOCKED",
}
export function UpdateStatus(prop:{idof:string}){
    const {delid,setDelId} = useContext(DeleteContext)
    const [status,setStatus] = useState("PLANNED")
    const handleChoice = async(event: React.ChangeEvent<HTMLSelectElement>) =>{
    try{
        setStatus(event.currentTarget.value)
        console.log(event.currentTarget.value)
        const updatereq = await Axios.post(`http://localhost:4000/todo/updateTodoStatus/${prop.idof}`,status)
        if(!delid)
               setDelId(true)        
    }catch(e){
        console.log(e)
    }
    setDelId(false)
}
    return(
        <div>Update:
            <select onChange={handleChoice}>
                <option value = "PLANNED" >PLANNED</option>
                <option value = "IN_PROGRESS" >IN PROGRESS</option>
                <option value = "DONE" >DONE</option>
                <option value = "BLOCKED" >BLOCKED</option>
            </select>
        </div>
    )
}