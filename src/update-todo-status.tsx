import React, { useContext } from 'react'
import { ChangeContext } from './app-routes'
import { postUpdateStatus } from './access-points'

export function UpdateStatus(prop: { idOfToDo: string, statusOfToDo: "PLANNED" | "BLOCKED" | "DONE" | "IN_PROGRESS" }) {
    const { contextId, setContextId } = useContext(ChangeContext)
    const handleChoice = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        try {
            await postUpdateStatus(prop.idOfToDo, event.currentTarget.value)
            if (!contextId) setContextId(true)
        } catch (e) {
            console.log(e)
        }
        setContextId(false)
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