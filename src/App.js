import './App.css';
import TopBar from "./components/TopBar";
import {Route, Routes} from "react-router";
import Home from "./components/Home";
import Programmes from "./components/Programmes";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
     <TopBar/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/programmes" element={<Programmes />}/>
            <Route path="/register" element={<Register />}/>
        </Routes>
    </div>
  );
}

export default App;
