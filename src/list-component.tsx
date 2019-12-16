import React, { useEffect, useState, useContext } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router';
import { DeleteContext } from './page-control'
import { AddList } from './add-list-component'
import { DeleteList } from './delete-list-component'
interface Status {
    _id: string,
    title: string,
    status: "PLANNED" | "IN_PROGRESS" | "DONE" | "BLOCKED",
    responsable: string,
    dueDate: Date,
    finishedDate?: Date,
}
export function ListReturn() {
    const { delid } = useContext(DeleteContext)
    const [list, setList] = useState<Status[]>([]);
    const history = useHistory();
    useEffect(() => {
        try {
            async function GetList() {
                const data = await Axios.get(`http://localhost:4000/todo/getTodos`);
                console.log(data.data)

                setList(data.data);
            }
            GetList();
        }
        catch (e) {
            console.log(e);
        }
    }, [delid])

    return (
        <div>
            <div>
                <AddList></AddList>
            </div>
            {list.map(e => <div>
                {e.title} {e.status} {e.responsable} {e.finishedDate} {e.dueDate}
                <DeleteList idof={e._id} />
            </div>)}
        </div>
    )
}
