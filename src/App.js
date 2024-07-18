import './App.css';
import TopBar from "./components/TopBar";
import {Route, Routes} from "react-router";
import Home from "./components/Home";
import Programmes from "./components/Programmes";
import Register from "./components/Register";
import Login from "./components/Login";
import StudentList from "./components/StudentList";
import AttendanceList from "./components/AttendanceList";
import StudentMarks from "./components/StudentMarks";
import LecturerList from "./components/LecturerList";


function App() {
  return (
    <div className="App">
     <TopBar/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/programmes" element={<Programmes />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/studentlist" element={<StudentList/>}/>
            <Route path="/attendancelist" element={<AttendanceList/>}/>
            <Route path="/studentmark" element={<StudentMarks/>}/>
            <Route path="/lecturers" element={<LecturerList />}/>
        </Routes>
    </div>
  );
}

export default App;
