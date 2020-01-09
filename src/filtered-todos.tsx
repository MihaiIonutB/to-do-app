import React, { useState } from 'react'
import { ToDoModelStatus as ToDoModel } from './to-do-interface'
import { postFilteredTodos } from './access-points'
import { ObjectModel } from './to-do-interface'



export function FilteredToDOs() {
    const [page, setPage] = useState(0)
    const [ToDos, setToDos] = useState<ToDoModel[]>([])
    const [obj, setObj] = useState<ObjectModel>({ pageSize: 0, pageNr: 0 })
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault()
        console.log(obj)
        const toDoData = await postFilteredTodos(obj)
        setToDos(toDoData.data)
    }
    function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (obj.pageSize === 0) {
        }
        else {
            if (event.currentTarget.value === '-1') {
                if (page < 0) {
                    setPage(0)
                }
                else {
                    setPage(page - 1)
                }
            }
            else if (event.currentTarget.value === '+1') {
                setPage(page + 1)
            }
        }
    }
    function handleRequest() {
        console.log(page)
        if (page === 0) {

        }
        else {
            const handler = async () => {
                setObj({ ...obj, pageNr: page })
                const toDoData = await postFilteredTodos(obj)
                setToDos(toDoData.data)
            }
            handler()
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
                <button onClick={(event) => { handleClick(event); handleRequest() }} value={'-1'}> -1</button>
                {obj.pageNr}
                <button onClick={(event) => { handleClick(event); handleRequest() }} value={'+1'}> +1</button>

            </div>
        </div>
    </div>
}