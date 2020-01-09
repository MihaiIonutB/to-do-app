import React from 'react'
import { useHistory } from 'react-router'

export function AccessButtons() {
    const history = useHistory()
    return <div><button onClick={event => history.push("/Filter")}>
        Filter
        </button>
        <button onClick={event => history.push("/ToDo")}>
            ToDo list
        </button>
        <button onClick={event => history.push("/Pagination")}>
            Paginate
        </button>
    </div>
}