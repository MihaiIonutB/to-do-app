import React, { useState } from 'react'
import { postGetToDoByStatus } from './access-points'
import { ToDoModelStatus } from './to-do-interface'
type Status = {
    status: "PLANNED" | "BLOCKED" | "DONE" | "IN_PROGRESS"
}
export function StatusFilter() {
    const [ToDosStatus, setToDos] = useState<ToDoModelStatus[]>([])
    const [valueOfStatus, setValue] = useState("DONE")
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        //const verify:string=event.currentTarget.value.toUpperCase()
       // if(verify != "PLANNED" || "DONE" || "IN_PROGRESS" || "BLOCKED"){

       // }
       // else{
            const toDoData = await postGetToDoByStatus(valueOfStatus)
            setToDos(toDoData.data)
        //}

    }
    return <div>
        <h1 style={{textAlign:"center"}}>Welcome to the filtering page</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Planned | Done | In Progress | Blocked"  value={valueOfStatus} required 
                onChange={event => {setValue(event.currentTarget.value)}}>         
            </input>
            <input type="submit" value="Filter me"></input>
        </form><br />
        <div>
            {ToDosStatus.map(e => <div key={e._id}>
                <div className="listPlaceHolder">
                    Title: {e.title}
                </div>
            </div>)}
        </div>
    </div>
}