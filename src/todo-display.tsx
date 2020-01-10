import React, { useEffect, useState, useContext } from 'react'
import moment from 'moment'
import { ChangeContext } from './app-routes'
import { AdToDo } from './ad-todo'
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
            console.log(toDoData.data)
            setToDo(toDoData.data)
        }
        GetList()
    }, [contextId])

    return <div>
        <div className="listPlaceHolder">
            <AdToDo /><br />
        </div>
        {toDo.map(e => <div key={e._id}>
            <div className="listPlaceHolder">
                Title: {e.title} | Status: {e.status} | Respo: {e.responsable} |
                Date: {moment(e.dueDate).format('l')} {e.finishedDate ? `| Finished: ${moment(e.finishedDate).format('l')}` : ''}
                <UpdateStatus idOfToDo={e._id} statusOfToDo={e.status} />
                <DeleteToDo idOfToDo={e._id} />
            </div>
        </div>)}
    </div>
}
