import React from 'react';
import {useNavigate} from 'react-router-dom';

function About(props) {
    const navigate = useNavigate()

    const click = async evt => {
      navigate('/')
    }

    return (
        <div>
            <h1>Assignment 1</h1>
            <h2>About page</h2>
            <p>Developers: Joshua Paul Peralta, Pavitharan Rajaratnam, & Jingzhou Zhang</p>
            <p>Course: SOFT806 CICD</p>
            <p>Project: This is a group code review project.</p>
            <button onClick={() => click()}>Thank you, Go back to Home page!</button>
        </div>
    );
}

export default About;
