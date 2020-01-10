import React, { useState } from 'react'
import { postGetToDoByStatus } from './access-points'
import { ToDoModelStatus } from './to-do-interface'

export function StatusFilter() {
    const [ToDosStatus, setToDos] = useState<ToDoModelStatus[]>([])
    const [valueOfStatus, setValue] = useState("DONE")

    const handleChoice = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        try {
            event.preventDefault()
            const toDoData = await postGetToDoByStatus(event.currentTarget.value)
            setToDos(toDoData.data)
            setValue(event.currentTarget.value)
        } catch (e) {
            console.log(e)
        }
    }
    return <div>
        <h1 style={{ textAlign: "center" }}>Filtering page</h1>
        <select value={valueOfStatus} onChange={handleChoice}>
            <option value="PLANNED" >PLANNED</option>
            <option value="IN_PROGRESS" >IN PROGRESS</option>
            <option value="DONE" >DONE</option>
            <option value="BLOCKED" >BLOCKED</option>
        </select> <br />
        <div>
            {ToDosStatus.map(e => <div key={e._id}>
                <div className="listPlaceHolder">
                    Title: {e.title}
                </div>
            </div>)}
        </div>
    </div>
}