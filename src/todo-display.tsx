import React, { useEffect, useState, useContext } from 'react'
import moment from 'moment'
import { ChangeContext } from './app-routes'
import { DeleteToDo } from './delete-todo-component'
import { UpdateStatus } from './update-todo-status'
import { getToDos } from './access-points'
import { ToDoModelStatus } from './to-do-interface'
export function ToDoDisplay() {
    const { contextId } = useContext(ChangeContext)
    const [toDo, setToDo] = useState<ToDoModelStatus[]>([])
    useEffect(() => {
        async function GetList() {
            const toDoData = await getToDos()
            setToDo(toDoData.data)
        }
        GetList()
    }, [contextId])
    return <div>
        {toDo.map(e => <div key={e._id}>
            <div className="listPlaceHolder" style={{backgroundColor: moment(e.dueDate) < moment() ? (e.status==="DONE"? "white":"red"): "white"}}>
                Title: {e.title} | Status: {e.status} | Respo: {e.responsable} |
                Date: {moment(e.dueDate).format('l')} {e.finishedDate ? `| Finished: ${moment(e.finishedDate).format('l')}` : ''}
                <UpdateStatus idOfToDo={e._id} statusOfToDo={e.status} />
                <DeleteToDo idOfToDo={e._id} />
            </div>
        </div>)}
    </div>
}
