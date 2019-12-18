import React, { useEffect, useState, useContext } from 'react'
import Axios from 'axios'
import moment from 'moment'
import { ChangeContext } from './page-control'
import { AddList } from './add-list-component'
import { DeleteList } from './delete-list-component'
import { UpdateStatus } from './update-list'
interface Status {
    _id: string,
    title: string,
    status: "PLANNED" | "IN_PROGRESS" | "DONE" | "BLOCKED",
    responsable: string,
    dueDate: Date,
    finishedDate?: Date,
}
export function ListReturn() {
    const { conId } = useContext(ChangeContext)
    const [list, setList] = useState<Status[]>([])
    useEffect(() => {
        async function GetList() {
            const data = await Axios.get(`http://localhost:4000/todo/getTodos`)
            console.log(data.data)
            setList(data.data)
        }
        GetList()
    }, [conId])

    return <div>
        <div className="listPlaceHolder">
            <AddList /><br />
        </div>
        {list.map(e => <div>
            <div className="listPlaceHolder">
                Title: {e.title} | Status: {e.status} | Respo: {e.responsable} | Time: {moment(e.dueDate).format('l')}
                <UpdateStatus idOf={e._id} statusOf={e.status} />
                <DeleteList idOf={e._id} />
            </div>
        </div>)}
    </div>
}
