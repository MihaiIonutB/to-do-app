import React, { useState, useContext } from 'react'
import Axios from 'axios'
import {DeleteContext} from './page-control'
export function DeleteList(props: { idof: string }) {
    const {delid,setDelId} = useContext(DeleteContext)
    const handleClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try {
            const deletereq = await Axios.delete(`http://localhost:4000/todo/deleteTodo/${props.idof}`);
            if(!delid)
                setDelId(true)
        } catch (e) {
            console.log(e);
        }
        setDelId(false)
    }
    return (
    <button onClick={handleClick}>
         X </button>)
}