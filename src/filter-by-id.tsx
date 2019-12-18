import React from 'react'
export function GetById(props: { idof: string }) {

    return <div>
        <form>
            <input type="text" placeholder="Id:"></input>
            <input type="submit">Get me</input>
        </form>
    </div>
}