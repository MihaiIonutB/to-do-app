import React, { useState } from 'react';
import App from './login-page';
// eslint-disable-next-line
import { BrowserRouter, Route } from 'react-router-dom';
import { ListReturn } from './list-component'
import { HeaderMsg } from './header-component';
export const UserContext = React.createContext<{ user: string, setUser: (value: string) => void }>({ user: '', setUser: () => { } })
export const DeleteContext = React.createContext<{ delid: boolean, setDelId: (value: boolean) => void }>({ delid: false, setDelId: () => { } })
export function DisplayPage() {
  const [user, setUser] = useState('')
  const [delid, setDelId] = useState(false)
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Route exact path="/" component={App} />
        <DeleteContext.Provider value={{ delid, setDelId }}>
          <Route path="/ToDo" component={() => <div>
            <HeaderMsg />
            <ListReturn />
          </div>} />
        </DeleteContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  )
}