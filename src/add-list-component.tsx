import React, { useState, useContext } from 'react'
import Axios from 'axios';
import {DeleteContext} from './page-control'
interface listType{
    title:string,
    responsable:string,
    dueDate:Date | null,
    finishedDate?: Date
}
export function AddList() {
    const [list, setList] = useState<listType>({ title: '', responsable: '', dueDate: new Date()});
    const {delid,setDelId} = useContext(DeleteContext)
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            const res = Axios.post(`http://localhost:4000/todo/AddTodo`, list)
            if(!delid)
                setDelId(true)
        } catch (e) {
            console.log(e)
        }
        setDelId(false)
    }
    return (
        <div>
            <form className="addListForm" onSubmit={handleSubmit}>
                <input type='text' placeholder="Title" value={list.title}
                    onChange={event => setList({
                        ...list,
                        title: event.target.value
                    })}
                    required/><br />
                    <input type='text' placeholder="Responsable" value={list.responsable}
                    onChange={event => setList({
                        ...list,
                        responsable: event.target.value
                    })}
                    required/><br />
                <input type='date'
                  onChange={event => setList({
                     ...list,
                   dueDate:event.currentTarget.valueAsDate
                 })} placeholder = "Date"/>
                <input type='submit' value='Click me :3' />
            </form>
        </div>
    )
}