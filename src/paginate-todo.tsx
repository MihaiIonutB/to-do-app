import React, { useState, useEffect } from 'react'
import { ToDoModelStatus as ToDoModel } from './to-do-interface'
import { postFilteredTodos } from './access-points'
import { ObjectModel } from './to-do-interface'

export function FilteredToDOs() {
    const [ToDos, setToDos] = useState<ToDoModel[]>([])
    const [obj, setObj] = useState<ObjectModel>({ pageSize: 0, pageNr: 1 })
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function GetToDo() {
            setIsLoading(true)
            try {
                const getData = await postFilteredTodos(obj)
                setToDos(getData.data)
            } finally {
                setIsLoading(false)
            }
        }
        GetToDo()
    }, [obj.pageNr, obj.pageSize])
    const handleRequestMinus = async () => {
        if (isLoading || obj.pageSize === 0 || obj.pageNr <= 0) return;

        setObj({ ...obj, pageNr: obj.pageNr - 1 });

    }
    const handleRequestPlus = async () => {
        if (isLoading || obj.pageSize === 0 || !ToDos.length) {

        }
        else {
            setObj({ ...obj, pageNr: obj.pageNr + 1 });
        }
    }
    return <div>
        <h1 style={{ textAlign: "center" }}>
        </h1>
        <div>
            Nr. of stuff/page:
                <input type="number" onChange={event => { setObj({ ...obj, pageSize: event.target.valueAsNumber }) }}
                value={obj.pageSize}></input>
            <input type="submit"></input>
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
        <div>
            <input type="text"></input>
            <input type="text" ></input>
        </div>
    </div>
}