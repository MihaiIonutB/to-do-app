import React, { useState } from 'react'
import './mainPage.css';
function UserInput() {
    const [user, setUser] = useState({ email: '', password: '' });
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(user.email + " ! " + user.password);
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