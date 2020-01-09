import React, { useState } from 'react'
import { ToDoModelStatus } from './to-do-interface'
import { postFilteredTodos } from './access-points'
import {ObjectModel} from './to-do-interface'



export function FilteredToDOs() {
    const [page, setPage] = useState<Number>(0)
    const [obj,setObj] = useState<ObjectModel>({ pageSize: 1, pageNr: 0})       
    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) =>{
        await postFilteredTodos(obj)
    }

    return <div>
        <h1 style={{ textAlign: "center" }}>
            Paginate
        </h1>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value ={1} placeholder="Number of Todo's / page "></input>
                <input type="submit"></input>
            </form>
        </div>
            <div>
                <div>
                    <button value={1}> -1</button>
                    <button value={1}> +1</button>
                </div>
            </div>
        </div>
        }