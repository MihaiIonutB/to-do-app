import React, { useContext } from 'react'
import Axios from 'axios'
import { ChangeContext } from './page-control'
import { tsPropertySignature } from '@babel/types'

export function UpdateStatus(prop: { idOf: string, statusOf: "PLANNED" | "BLOCKED" | "DONE" | "IN_PROGRESS" }) {
    const { conId, setConId } = useContext(ChangeContext)
    const handleChoice = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        try {
            console.log(event.currentTarget.value)
            await Axios.post(`http://localhost:4000/todo/updateTodoStatus/${prop.idOf}`, { status: event.currentTarget.value })
            if (!conId) setConId(true)
        } catch (e) {
            console.log(e)
        }
        setConId(false)
    }
    return <div>
        <select value={prop.statusOf} onChange={handleChoice}>
            <option value="PLANNED" >PLANNED</option>
            <option value="IN_PROGRESS" >IN PROGRESS</option>
            <option value="DONE" >DONE</option>
            <option value="BLOCKED" >BLOCKED</option>
        </select>
    </div>
}