import React, { useState, useContext } from 'react'
import { postAddToDos } from './access-points'
import { ChangeContext } from './app-routes'
import { saveChange } from './save-change '
import { ToDoModel } from './to-do-interface'

export function AdToDo() {
    const toDoState = useState<ToDoModel>({ title: '', responsable: '', dueDate: new Date(), finishedDate: new Date() })
    const [toDos] = toDoState;
    const { contextId, setContextId } = useContext(ChangeContext)
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault()
            await postAddToDos(toDos)
            if (!contextId) setContextId(true)

        } catch (e) {
            console.log(e)
        }
        setContextId(false)
    }

    return <div>
        <form className="addListForm" onSubmit={handleSubmit}>
            Title:<input type='text' placeholder="Title"
                {...saveChange(toDoState, "title")}
                required />
            <br />
            Responsable:<input type='text' placeholder="Responsable"
                {...saveChange(toDoState, "responsable")}
                required />
            <br />

            Starting date:<input type='date' placeholder="Due date:"
                {...saveChange(toDoState, "dueDate")}
                required />
            <br />
            <input type='submit' value='Add ToDo' />
        </form>
    </div>
}