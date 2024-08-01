import React, {useState} from 'react';
import "../styles/Form.css"
import {useNavigate} from "react-router";
import axios from "axios";
import {BaseUrl} from "../consistents";

// import {useNavigate} from "react-router-dom";

function Login(props) {
    const navigate = useNavigate();

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
                setLogin_status("Login Successful");
                navigate("/");
                // navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div className="form-container">
            <h1>Login</h1>
            <input
                className="form-input"
                id={"username"}
                type="text"
                onChange={usernameHandler}
                placeholder="Username"
            />
            <input
                className="form-input"
                id={"password"}
                type="password"
                onChange={passwordHandler}
                placeholder="Password"
            />
            <button className="form-button" id={"loginbtn"} onClick={login}>Login</button>
            <p id={"login_status"}>{login_status}</p>
        </div>
    );
}

export default Login;