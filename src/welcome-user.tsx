import React, { useContext } from 'react'
import './main-page.css'
import { UserContext } from './app-routes'
export function HeaderMsg() {
    const { user } = useContext(UserContext)
    return <div>
        <h1>
            Welcome {user.slice(0,1).toUpperCase()+user.substring(1,user.lastIndexOf('@'))}
        </h1>
    </div>
}