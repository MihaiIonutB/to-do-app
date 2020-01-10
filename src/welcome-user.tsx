import React, { useContext } from 'react'
import './main-page.css'
import { UserContext } from './app-routes'
export function HeaderMsg() {
    const { user } = useContext(UserContext)
    return <div>
        <h1 className="header">
            Welcome {user}
        </h1>
    </div>
}