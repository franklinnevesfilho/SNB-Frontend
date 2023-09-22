import React, {Component} from 'react';
import {UserRegistration} from "./model/UserRegistration.jsx";

class RegisterForm extends Component {
    constructor(registerUser) {
        super(registerUser);
        this.state = UserRegistration('','','','')
    }
    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e) =>{
        e.preventDefault()
        console.log(this.state)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( this.state )
        }
        // Fetch method works with api... Axios does not... idk why
        fetch('http://localhost:8080/auth/register', requestOptions)
            .then(response => response.json())
    }
    render() {
        const { firstName, lastName, email, password } = this.state
        return (
            <div className={"card"}>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name={"firstName"} placeholder={"First Name"} value={firstName} onChange={this.changeHandler}/>
                    <input type="text" name={"lastName"} placeholder={"Last Name"} value={lastName} onChange={this.changeHandler}/>
                    <input type="email" name={"email"} placeholder={"Email here"} value={email} onChange={this.changeHandler}/>
                    <input type="password" name={"password"} placeholder={"Password"} value={password} onChange={this.changeHandler}/>
                    <input type="submit" placeholder={"Register"}/>
                </form>
            </div>
        );
    }
}

export default RegisterForm;