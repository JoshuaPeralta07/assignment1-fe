import React, {useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../consistents";

// import {useNavigate} from "react-router-dom";

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login_status, setLogin_status] = useState("");

    // const navigate = useNavigate();


    function usernameHandler(e) {
        setUsername(e.target.value);
    }

    function passwordHandler(e) {
        setPassword(e.target.value);
    }

    function login() {
        let data = JSON.stringify({
            "username": username,
            "password": password
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseUrl + 'auth/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setLogin_status("Login Successfully");
                // navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div>
            <h1>Login Page</h1>
            <p>Username: <input id={"username"} type="text" onChange={usernameHandler}/></p>
            <p>Password: <input id={"password"} type="password" onChange={passwordHandler}/></p>
            <p>
                <button id={"loginbtn"} onClick={login}>Login</button>
            </p>
            <p id={"login_status"}>{login_status}</p>
        </div>
    );
}

export default Login;