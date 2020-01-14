import React from "react"
import{ClipLoader} from "react-spinners"

export function Spinner(){
    return <div>
        <ClipLoader size={100} color={"#000000"} loading={true}/>
    </div>
}