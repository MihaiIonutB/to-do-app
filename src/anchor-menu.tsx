import React from 'react'
import { useHistory } from 'react-router'

export function AccessButtons() {
    const history = useHistory()
    return <div><button onClick={event => history.push("/home")}>
        Home
        </button>
        <button onClick={event => history.push("/adToDo")}>
            Create ToDo
        </button>
        <button onClick={event => history.push("/toDoList")}>
            ToDo Filter
        </button>
    </div>
}