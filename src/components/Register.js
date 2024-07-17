import React, {useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../consistents";
import {useNavigate} from "react-router-dom";

function Register(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    // const [registerStatus, setRegisterStatus] = useState("")
    const navigate = useNavigate();



    function usernameHandler(e) {

        setUsername(e.target.value)
    }

    function emailHandler(e) {

        setEmail(e.target.value)
    }

    function passwordHandler(e) {

        setPassword(e.target.value)
    }

    async function register() {
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

        await axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div>
            <form onSubmit={register}>
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
                    <button id={"register_btn"} type={"submit"}>Register</button>
                </p>
            </form>
            {/*<p id={"registerStatus"}>{registerStatus}</p>*/}
        </div>
    );
}

export default Register;