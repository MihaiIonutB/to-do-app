import React, { useState } from 'react'
import App from './login-page'
import { BrowserRouter, Route } from 'react-router-dom'
import { ToDoDisplay } from './todo-display'
import { AdToDo } from './ad-todo'
import { FilteredToDOs } from './paginate-todo'
import {Menu} from './menu'

export const UserContext = React.createContext<{ user: string, setUser: (value: string) => void }>({ user: '', setUser: () => { } })
export const ChangeContext = React.createContext<{ contextId: boolean, setContextId: (value: boolean) => void }>({ contextId: false, setContextId: () => { } })
export function DisplayPage() {
    const [user, setUser] = useState('')
    const [contextId, setContextId] = useState(false)
    return <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
            <Route exact path="/" component={App} />
            <ChangeContext.Provider value={{ contextId, setContextId }}>
                <Route exact path="/home" component={() => <div>
                    <Menu />
                    <ToDoDisplay />
                </div>} />
                <Route exact path="/adToDo" component={() => <div>
                    <Menu />
                    <AdToDo />
                </div>} />
                <Route exact path="/toDoList" component={() => <div>
                    <Menu />
                    <FilteredToDOs />
                </div>} />
            </ChangeContext.Provider>
        </UserContext.Provider>
    </BrowserRouter>

}