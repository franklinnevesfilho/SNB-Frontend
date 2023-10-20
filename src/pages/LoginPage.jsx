import React, {useState} from 'react';
import LoginForm from "../components/LoginForm.jsx";

const API_URL = import.meta.env.VITE_API_URL

function LoginPage() {
    const [hasAccount, setHasAccount] = useState(true)
    const [loginInputs, setLoginInputs] = useState({
        email:'',
        password:''
    })
    const [registerInputs, setRegisterInputs] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:''
    })

    const loginRequest = () =>{
        let query = 'http://'+API_URL+'/auth/login'
        console.log(query)
        callApi(query, loginInputs).then(r => console.log(r))
    }
    const registrationRequest = () =>{
        let query = 'http://'+API_URL+'/auth/register'
        console.log(query)
        callApi(query, registerInputs).then(r => console.log(r))
    }

    const callApi = async (query, body) => {
        console.log('api called')

        const response = await (await fetch(query, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })).json()
        const node = response.node
        console.log("jwt = " + node)

    }

    return (
        <>
            <h1>LoginPage</h1>
            <div className="form-container">
                <div className="login-btn-container">
                    <button className={'btn'} onClick={()=> setHasAccount(true)}>Log in</button>
                    <button className={'btn'} onClick={()=> setHasAccount(false)}>Register</button>
                </div>

                { hasAccount ?
                    <LoginForm
                        inputs={loginInputs}
                        handleChange={(e) =>
                            setLoginInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value.trim(),
                            }))
                        }
                        onSubmit={loginRequest}
                        submitType='Login'
                    />

                    :

                    <LoginForm
                        inputs={registerInputs}
                        handleChange={(e) =>
                            setRegisterInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value.trim(),
                            }))
                        }
                        onSubmit={registrationRequest}
                        submitType='Registration'
                    />
                }
            </div>
        </>
    );
}

export default LoginPage;