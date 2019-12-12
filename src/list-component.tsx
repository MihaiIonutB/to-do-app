import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router';
interface Status {
    _id: string,
    title: string,
    status: "PLANNED" | "IN_PROGRESS" | "DONE" | "BLOCKED",
    responsable: string,
    dueDate: Date,
    finishedDate?: Date,
}
export function ListReturn() {
    const [list, setList] = useState<Status[]>([]);
    const history = useHistory();
    try {
        useEffect(() => {
            async function GetList() {
                const data = await Axios.get(`http://localhost:4000/todo/getTodos`);
                console.log(data.data)
                setList(data.data);
            }
            GetList();
        }, [])
    }
    catch (e) {
        console.log(e);
    }
    const handleClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try{
        const deletereq = await Axios.delete(`http://localhost:4000/todo/deleteTodo/${event.currentTarget.id}`,)
        
        }catch(e){
            console.log(e);
        }

    }    
    return (
        <div>
          {list.map(e => <div>
            {e.title} {e.status} {e.responsable} {e.finishedDate} {e.dueDate}
               <button id = {e._id} onClick = {handleClick}> X </button>
              </div>)}  
        </div>
    )
}
