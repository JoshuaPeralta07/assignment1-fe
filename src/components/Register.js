import React, {useState} from 'react';
import {useNavigate} from "react-router";
import "../styles/Form.css";
import axios from "axios";
import {BaseUrl} from "../consistents";

function Register(props) {
    const navigate = useNavigate();
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
                'Content-Type': 'application/json',
                'Authorization': 'token abf3d4b38df57e7ef0a95a6b748b5cfd5ea2df9a'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setRegisterStatus("Registered Successfully");
                navigate("/login");
            })
            .catch((error) => {
                console.log(error);
            });



    }

    return (
        <div className="form-container">
            <h1>Register</h1>
            <input className="form-input"
                   type={"text"}
                   id={"username"}
                   onChange={usernameHandler}
                   placeholder="Username"
                   required
            />
            <input className="form-input"
                type={"email"}
                id={"email"}
                onChange={emailHandler}
                placeholder="Email"
                required
            />
            <input
                className="form-input"
                type={"password"}
                id={"password"}
                onChange={passwordHandler}
                placeholder="Password"
                required
            />
            <button className="form-button" id={"register_btn"} onClick={register}>Register</button>
            <p id={"register_status"}>{registerStatus}</p>
        </div>
    );
}

export default Register;