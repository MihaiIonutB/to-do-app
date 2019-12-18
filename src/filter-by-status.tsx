import React from 'react'
export function FilterByStatus() {

    return <div>
        <select>
            <option value="PLANNED" >PLANNED</option>
            <option value="IN_PROGRESS" >IN PROGRESS</option>
            <option value="DONE" >DONE</option>
            <option value="BLOCKED" >BLOCKED</option>
        </select>
        <button>Filter me</button>
    </div>
}