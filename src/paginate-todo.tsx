import React, { useState } from 'react'
import { ToDoModelStatus as ToDoModel } from './to-do-interface'
import { postFilteredTodos } from './access-points'
import {Spinner} from './spinner'
import { ObjectModel } from './to-do-interface'

export function FilteredToDOs() {
    const [ToDos, setToDos] = useState<ToDoModel[]>([])
    const [obj, setObj] = useState<ObjectModel>({ pageSize: 0, pageNr: 1 })
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const toDoData = await postFilteredTodos(obj)
        setToDos(toDoData.data)
    }
    const handleRequestMinus = async () => {
        if (obj.pageSize === 0) {

        }
        else {
            setObj({ ...obj, pageNr: obj.pageNr - 1 });
            const toDoData = await postFilteredTodos({ ...obj, pageNr: obj.pageNr - 1 })
            setToDos(toDoData.data)
        }
    }
    const handleRequestPlus = async () => {
        if (obj.pageSize === 0) {

        }
        else {
            setObj({ ...obj, pageNr: obj.pageNr + 1 });
            const toDoData = await postFilteredTodos({ ...obj, pageNr: obj.pageNr + 1 })
            setToDos(toDoData.data)
        }
    }
    return <div>
        <h1 style={{ textAlign: "center" }}>
            Pagination
        </h1>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" onChange={event => { setObj({ ...obj, pageSize: event.target.valueAsNumber }) }}
                    value={obj.pageSize} ></input>
                <input type="submit"></input>
            </form>
        </div>
        <div>
            {ToDos.map(e => <div key={e._id}>
                <div className="listPlaceHolder">
                    Title: {e.title}
                </div>
            </div>)}
        </div>
        <div>
            <div>
                <button onClick={handleRequestMinus}> -1</button>
                {obj.pageNr}
                <button onClick={handleRequestPlus}> +1</button>
            </div>
        </div>
    </div>
}