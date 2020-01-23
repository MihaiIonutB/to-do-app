import React from 'react'
import { deleteToDos } from './access-points'
import { useHandler } from './async-try'


export function DeleteToDo(props: { idOfToDo: string }) {
    const withLoading = useHandler();
    const handleClick = async () => {
        await withLoading (deleteToDos(props.idOfToDo))
    }
  return <button onClick={handleClick}>
        Delete
    </button>
}