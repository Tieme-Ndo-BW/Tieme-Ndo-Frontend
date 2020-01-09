import React, { useState } from 'react';
import { axiosWithAuth } from './axiosWithAuth';

const Login = props => {
    const [login, setLogin] = useState({ username: '', password: ''})

    const handleLogin = event => {
        setLogin({...login, [event.target.name]: event.target.value});

        console.log('from handleLogin:', event.target.name, event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault();

        axiosWithAuth()
            .post('api/auth/login', login)
            .then(response => {
                localStorage.setItem('token', response.data.payload);
                props.history.push('/clients')
            })
            .catch(error => console.log(error.response, 'try again'));
    };

    return (

        <div className= 'Login'>
            <h1> Login Page </h1>
        
            <form onSubmit = {handleSubmit}>
                <input 
                    type= 'text'
                    name= 'username'
                    placeholder= 'Username'
                    className= 'username'
                    onChange= {handleLogin}
                    value= {login.username}
                />

                <input 
                    type= 'password'
                    name= 'password'
                    placeholder= 'Password'
                    className= 'password'
                    onChange= {handleLogin}
                    value= {login.password}
                />

                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;