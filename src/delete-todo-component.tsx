import React, { useContext } from 'react'
import { deleteToDos } from './access-points'
import { ChangeContext } from './app-routes'
//import { useHandler } from './async-try'

export function DeleteList(props: { idOfToDo: string }) {
    const { contextId, setContextId } = useContext(ChangeContext)
    // const del = useHandler(deleteToDos(props.idOfToDo),[]);
    const handleClick = async () => {
        try {
            await deleteToDos(props.idOfToDo)
            if (!contextId) setContextId(true)
        } catch (e) {
            console.log(e)
        }
        setContextId(false)
    }
    // function handleClick(event:any){
    //     return ()=> {
    //         handler(deleteToDos(props.idOfToDo))
    //     }

    // }
   // const handleClick = useHandler(deleteToDos(props.idOfToDo))
    return <button onClick={handleClick}>
        Delete
    </button>
}