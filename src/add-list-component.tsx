import React, { useState, useContext } from 'react'
import { postAddToDos } from './access-points'
import { ChangeContext } from './page-control'
interface ToDoModel {
    title: string,
    responsable: string,
    dueDate: Date | null,
    finishedDate?: Date | null,
}
export function AddList() {
    const [toDos, setToDos] = useState<ToDoModel>({ title: '', responsable: '', dueDate: new Date(), finishedDate: new Date() })
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
            Title:<input type='text' placeholder="Title" value={toDos.title}
                onChange={event => setToDos({
                    ...toDos,
                    title: event.target.value
                })}
                required />
            <br />
            Responsable:<input type='text' placeholder="Responsable" value={toDos.responsable}
                onChange={event => setToDos({
                    ...toDos,
                    responsable: event.target.value
                })}
                required />
            <br />
            Starting date:<input type='date'
                onChange={event => setToDos({
                    ...toDos,
                    dueDate: event.currentTarget.valueAsDate
                })
                } required />
            <br />
            <input type='submit' value='Add ToDo' />
        </form>
    </div>
}