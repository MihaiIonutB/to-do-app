import React, { useEffect, useState } from 'react'
import Axios from 'axios' 
import { async } from 'q';
import { numberLiteralTypeAnnotation } from '@babel/types';

export function ListReturn(){
    const [list,setList] = useState({});
    try{
    useEffect(() => { 
    async function GetList() {
    const data = await Axios.get(`http://localhost:4000/todo/getTodos`);
    console.log(data.data)
    }
    GetList();
}, [])
}
catch(e){  
    console.log(e);
}
    return (
        <div>
        </div>
    )
}
