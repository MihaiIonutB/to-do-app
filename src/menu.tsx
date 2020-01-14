import React from "react"
import {HeaderMsg} from './welcome-user'
import {AccessButtons} from './anchor-menu'

export function Menu(){
    return <div>
            <HeaderMsg />
            <div>
                <AccessButtons/>
            </div>
        </div>
}