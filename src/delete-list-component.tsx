import React, { useContext } from 'react'
import { ChangeContext } from './page-control'
import { deleteToDos } from './access-points'
export function DeleteList(props: { idOfToDo: string }) {
    const { contextId, setContextId } = useContext(ChangeContext)
    const handleClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try {
            await deleteToDos(props.idOfToDo)
            if (!contextId) setContextId(true)
        } catch (e) {
            console.log(e)
        }
        setContextId(false)
    }
    return <button onClick={handleClick}>
        Delete
    </button>
}