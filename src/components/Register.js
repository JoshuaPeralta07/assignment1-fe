import React, {useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../consistents";

function Register(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [registerStatus, setRegisterStatus] = useState("")

    function usernameHandler(e) {

        setUsername(e.target.value)
    }

    function emailHandler(e) {

        setEmail(e.target.value)
    }

    function passwordHandler(e) {

        setPassword(e.target.value)
    }

    function register() {
        let data = JSON.stringify({
            "username": username,
            "email": email,
            "password": password
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseUrl + 'programmes/register/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setRegisterStatus("Register Successful");
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div>
            <h1>Register User</h1>
                <div>
                    <p>Username: <input type={"text"} id={"username"} onChange={usernameHandler} required/></p>
                </div>
                <div>
                    <p>Email: <input type={"email"} id={"email"} onChange={emailHandler} required/></p>
                </div>
                <div>
                    <p>Password: <input type={"password"} id={"password"} onChange={passwordHandler} required/></p>
                </div>
            <p>
                <button id={"register_btn"} onClick={register}>Register</button>
            </p>
            <p id={"registerStatus"}>{registerStatus}</p>
        </div>
    );
}

export default Register;