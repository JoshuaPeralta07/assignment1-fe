import React, {useState} from 'react';
import axios from "axios";

function Register(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [registerStatus, setRegisterStatus] = useState("")

    function usernameHandler(e){

        setUsername(e.target.value)
    }

    function emailHandler(e){

        setEmail(e.target.value)
    }

    function passwordHandler(e){

        setPassword(e.target.value)
    }

    function Register(){
        let data = JSON.stringify({
            "username": username,
            "password": password,
            "email": email
        });

        let config ={
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseUrl + 'users/register',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setRegisterStatus("Registration Successful!");
            })
            .catch((error) => {
                console.log(error);
            });

        }

    return (
        <div>
            <h1>Register User</h1>
            <form onSubmit={Register}>
                <div>
                    <input type={"text"} placeholder={"Username"} name={"username"} value={username}
                    onChange={usernameHandler} required/>
                </div>
                <div>
                    <input type={"email"} placeholder={"Email"} name={"email"} value={email}
                    onChange={emailHandler} required/>
                </div>
                <div>
                    <input type={"password"} placeholder={"Password"} value={password}
                    name={"password"} onChange={passwordHandler} required/>
                </div>
                <button className={"btn btn-primary"} type={"submit"}>Register</button>
            </form>
        </div>
    );
}

export default Register;