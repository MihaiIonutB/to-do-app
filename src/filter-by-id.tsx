import React from 'react'

interface Status {
    _id: string,
    title: string,
    status: "PLANNED" | "IN_PROGRESS" | "DONE" | "BLOCKED",
    responsable: string,
    dueDate: Date,
    finishedDate?: Date,
}
export function GetById(props: { lists: Status[] }) {

    return <div>
        <form>
            <input type="text" placeholder="Id:"></input>
            <input type="submit" value="Click me" />
        </form>
    </div>
}