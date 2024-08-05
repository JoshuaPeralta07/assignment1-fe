import React from 'react';
import dp from '../Images/dp.jpg';
function Home(props) {
    return (
        <div>
            <h1>Welcome to MIS</h1>
            <img style={{display: "block", margin: "auto", width: 50+"%", paddingTop: 50, border:5,
            borderStyle: "solid", borderColor: "black"}} src={dp} alt="dp"/>
        </div>
    );
}

export default Home;