import React, { useState } from 'react';

function Login(props) {
    const [ email, setEmail ] = useState('')

    return (
        <div>
            <label>Email</label>
                <input 
                    type="text" 
                    value={ email } 
                    onChange={(e) => setEmail(e.target.value) } 
            />
            <button onClick={()=>console.log(email)}>Login</button>
        </div>
    );
}

export default Login;