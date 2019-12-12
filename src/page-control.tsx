import React, { useState } from 'react';
import App from './login-page';
// eslint-disable-next-line
import { BrowserRouter,Route } from 'react-router-dom';
import  {ListReturn} from './list-component'
import {HeaderMsg} from './header-component';
export const UserContext = React.createContext<{user:string,setUser:(value:string)=> void}>({user:'',setUser:()=>{}})
export function DisplayPage(){
    const [user,setUser] = useState('')
    return(
    <BrowserRouter>
    <UserContext.Provider value={{user,setUser}}>
    <Route exact path="/" component={App}/>
    <Route path="/ToDo" component={() => <div>
      <HeaderMsg/>
      <ListReturn/>
    </div>}/>     
    </UserContext.Provider>
  </BrowserRouter>
    ) 
}