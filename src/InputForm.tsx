import React, { useState } from 'react'
import './mainPage.css';
import Axios from 'axios';

import {useHistory} from 'react-router-dom'
function UserInput() {
    const [user, setUser] = useState({ email: 'ion@admin.com', password: 'admin' });
    const history = useHistory();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try{
        event.preventDefault();
        const res = await Axios.post(`http://localhost:4000/auth/login`,user)
        console.log(res);
        setUser({email: '',password: ''});
        history.push('/log');
        }catch(e){
            console.log(e);
        }
} 
    return (
        <div >
            <form className="userInput" onSubmit={handleSubmit} >
                <input type="email" placeholder="Email Adress" value={user.email} 
                    onChange={event => setUser({ 
                        ...user, 
                        email: event.target.value 
                    })} required>
                </input> <br/>
                <input type="password" placeholder="Password" value={user.password} 
                onChange={event =>setUser({
                    ...user,password:event.target.value})} required>
                </input> <br/>
                <button>Log in</button>
            </form>
        </div>
    )
}

export default UserInput;