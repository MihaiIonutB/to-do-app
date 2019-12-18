import React, { useState, useContext } from 'react'
import Axios from 'axios'
import { ChangeContext } from './page-control'
interface ToDoType {
    title: string,
    responsable: string,
    dueDate: Date | null,
    finishedDate?: Date | null,
}
export function AddList() {
    const [list, setList] = useState<ToDoType>({ title: '', responsable: '', dueDate: new Date(), finishedDate: new Date() })
    const { conId, setConId } = useContext(ChangeContext)
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault()
            await Axios.post(`http://localhost:4000/todo/AddTodo`, list)
            if (!conId) setConId(true)

        } catch (e) {
            console.log(e)
        }
        setConId(false)
    }
    return <div>
        <form className="addListForm" onSubmit={handleSubmit}>
            Title:<input type='text' placeholder="Title" value={list.title}
                onChange={event => setList({
                    ...list,
                    title: event.target.value
                })}
                required /><br />
            Responsable:<input type='text' placeholder="Responsable" value={list.responsable}
                onChange={event => setList({
                    ...list,
                    responsable: event.target.value
                })}
                required /><br />
            Starting date:<input type='date'
                onChange={event => setList({
                    ...list,
                    dueDate: event.currentTarget.valueAsDate
                })
                } required /><br />
            <input type='submit' value='Click me :3' />
        </form>
    </div>
}