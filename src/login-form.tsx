import React, { useState, useContext } from 'react'
import './main-page.css'
import { useHistory } from 'react-router-dom'
import { UserContext } from './app-routes'
import { postLogin } from './access-points'
import { saveChange } from './save-change '

export function InputForm() {
    const { setUser: setGlobalUser } = useContext(UserContext)
    const userState = useState({ email: 'ion@admin.com', password: 'admin' })
    const [user, setUser] = userState
    const history = useHistory()
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault()
            const res = await postLogin(user)
            console.log(res)
            setUser({ email: '', password: '' })
            history.push('/home');
            setGlobalUser(user.email)
        } catch (e) {
            console.log(e)
        }
    }

    return <div >
        <form className="userInput" onSubmit={handleSubmit} >
            Email:
            <br/>
            <input type='email' placeholder="Email Adress" value={user.email}
                {...saveChange(userState, "email")}
                required />
            <br />
            Password:
            <br/>
            <input type='password' placeholder="Password" value={user.password}
                {...saveChange(userState, "password")}
                required />
            <br />
            <button>Log in</button>
        </form>
    </div>
}