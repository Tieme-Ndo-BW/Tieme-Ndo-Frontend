import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Register = props => {

    const [staff, setStaff] = useState ({
        Username: '',
        Password: '',
        FirstName: '',
        LastName: '',
        Birthday: ''
    });

    useEffect(() => {
        axios
            .get('https://lambda-tmb.herokuapp.com/api/auth/register')
            .then(
                response => console.log(response.data, 'staff')
            )
            .catch(error => console.log(error, 'register useEffect'))
    })

    const handleChange = event => {
        setStaff({...staff, [event.target.name]: event.target.value});

        console.log('from handleChange:', event.target.name, event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault();

        axios
            .post('https://lambda-tmb.herokuapp.com/api/auth/login', staff)
            .then(response => {
                localStorage.setItem('token', response.data.payload);
                props.history.push('/login')
            })
            .catch(error => console.log(error.response, 'try again'));
    };

    return (
        <div className= 'Register'>
            <h3>Staff Onboarding</h3>

            <form onSubmit ={handleSubmit}>
            <input 
                    type= 'text'
                    name= 'username'
                    placeholder= 'Username'
                    className= 'username'
                    onChange= {handleChange}
                    value= {staff.username}
                />
                <br></br>
                <input 
                    type= 'password'
                    name= 'password'
                    placeholder= 'Password'
                    className= 'password'
                    onChange= {handleChange}
                    value= {staff.password}
                />
                <br></br>
                <input 
                    type= 'text'
                    name= 'FirstName'
                    placeholder= 'First Name'
                    onChange= {handleChange}
                    value= {staff.FirstName}
                />
                <br></br>
                <input 
                    type= 'text'
                    name= 'LastName'
                    placeholder= 'Last Name'
                    onChange= {handleChange}
                    value= {staff.LastName}
                />
                <br></br>
                <input 
                    type= 'date'
                    onChange= {handleChange}
                    value= {staff.Birthday}
                />
                <button type= 'submit'>Register</button>
                <br></br>
                <Link to= {'/login'}>Already registered? Login instead!</Link>
            </form>
        </div>
    )
}

export default Register;