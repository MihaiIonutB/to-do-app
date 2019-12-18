import React, { useState } from 'react'
import App from './login-page'
import { BrowserRouter, Route } from 'react-router-dom'
import { ListReturn } from './list-component'
import { HeaderMsg } from './header-component'

export const UserContext = React.createContext<{ user: string, setUser: (value: string) => void }>({ user: '', setUser: () => { } })
export const ChangeContext = React.createContext<{ conId: boolean, setConId: (value: boolean) => void }>({ conId: false, setConId: () => { } })
export function DisplayPage() {
  const [user, setUser] = useState('')
  const [conId, setConId] = useState(false)
  return <BrowserRouter>
    <UserContext.Provider value={{ user, setUser }}>
      <Route exact path="/" component={App} />
      <ChangeContext.Provider value={{ conId, setConId }}>
        <Route path="/ToDo" component={() => <div>
          <HeaderMsg />
          <ListReturn />
        </div>} />
      </ChangeContext.Provider>
    </UserContext.Provider>
  </BrowserRouter>

}