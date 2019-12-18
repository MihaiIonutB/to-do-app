import React, { useContext } from 'react'
import Axios from 'axios'
import { ChangeContext } from './page-control'
export function DeleteList(props: { idOf: string }) {
    const { conId, setConId } = useContext(ChangeContext)
    const handleClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try {
            await Axios.delete(`http://localhost:4000/todo/deleteTodo/${props.idOf}`)
            if (!conId) setConId(true)
        } catch (e) {
            console.log(e)
        }
        setConId(false)
    }
    return <button
        onClick={handleClick}>Delete
    </button>
}