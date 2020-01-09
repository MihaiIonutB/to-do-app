import React, { useState } from 'react'
import App from './login-page'
//import { PrivateRoute } from './react-private-route'
import { BrowserRouter, Route } from 'react-router-dom'
import { ListReturn } from './list-component'
import { HeaderMsg } from './header-component'
import { StatusFilter } from './filter-by-status'
import { AccessButtons } from './anchor-menu'
import { FilteredToDOs } from './filtered-todos'

export const UserContext = React.createContext<{ user: string, setUser: (value: string) => void }>({ user: '', setUser: () => { } })
export const ChangeContext = React.createContext<{ contextId: boolean, setContextId: (value: boolean) => void }>({ contextId: false, setContextId: () => { } })
export function DisplayPage() {
  const [user, setUser] = useState('')
  const [contextId, setContextId] = useState(false)
  return <BrowserRouter>
    <UserContext.Provider value={{ user, setUser }}>
      <Route exact path="/" component={App} />
      <ChangeContext.Provider value={{ contextId, setContextId }}>
        <Route exact path="/ToDo" component={() => <div>
          <AccessButtons />
          <HeaderMsg />
          <ListReturn />
        </div>} />
        <Route exact path="/Filter" component={() => <div>
          <AccessButtons />
          <StatusFilter />
        </div>} />
        <Route exact path="/Pagination" component={() => <div>
          <AccessButtons />
          <FilteredToDOs />
        </div>} />
      </ChangeContext.Provider>
    </UserContext.Provider>
  </BrowserRouter>

}