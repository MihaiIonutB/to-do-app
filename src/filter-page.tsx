import React from 'react'
import { useHistory } from 'react-router'

export function FilterButton(){
    const history = useHistory()
    function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        
    }
    return <button onClick={handleClick}>

    </button>
}