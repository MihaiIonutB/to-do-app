import React, { useEffect, useState, useContext } from 'react'
import moment from 'moment'
import { ChangeContext } from './page-control'
import { AddList } from './add-list-component'
import { DeleteList } from './delete-list-component'
import { UpdateStatus } from './update-list'
import { GetById } from './filter-by-id'
import { getToDos } from './access-points'
interface Status {
    _id: string,
    title: string,
    status: "PLANNED" | "IN_PROGRESS" | "DONE" | "BLOCKED",
    responsable: string,
    dueDate: Date,
    finishedDate?: Date,
}
export function ListReturn() {
    const { contextId } = useContext(ChangeContext)
    const [toDo, setToDo] = useState<Status[]>([])
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
            <AddList /><br />
        </div>
        {toDo.map(e => <div>
            <div className="listPlaceHolder">
                Title: {e.title} | Status: {e.status} | Respo: {e.responsable} |
                Time: {moment(e.dueDate).format('l')} {e.finishedDate ? `| Finished: ${moment(e.finishedDate).format('l')}` : ''}
                <UpdateStatus idOfToDo={e._id} statusOfToDo={e.status} />
                <DeleteList idOfToDo={e._id} />
            </div>
        </div>)}
        <div>
            <GetById lists={toDo} />
        </div>
    </div>
}
