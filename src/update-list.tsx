import React, { useContext } from 'react'
import { ChangeContext } from './page-control'
import { postUpdateStatus } from './access-points'

export function UpdateStatus(prop: { idOfToDo: string, statusOfToDo: "PLANNED" | "BLOCKED" | "DONE" | "IN_PROGRESS" }) {
    const { contextId: conId, setContextId: setConId } = useContext(ChangeContext)
    const handleChoice = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        try {
            console.log(event.currentTarget.value)
            await postUpdateStatus(prop.idOfToDo, prop.statusOfToDo)
            if (!conId) setConId(true)
        } catch (e) {
            console.log(e)
        }
        setConId(false)
    }
    return <div>
        <select value={prop.statusOfToDo} onChange={handleChoice}>
            <option value="PLANNED" >PLANNED</option>
            <option value="IN_PROGRESS" >IN PROGRESS</option>
            <option value="DONE" >DONE</option>
            <option value="BLOCKED" >BLOCKED</option>
        </select>
    </div>
}