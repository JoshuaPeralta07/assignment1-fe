import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../consistents";
import DataTable from "react-data-table-component";

function StudentMarks(props) {

    const [student, setStudent] = useState([]);
    const columns = [
        {
            name: "ID",
            selector: (student) => student.id
        },
        {
            name: "Name",
            selector: (student) => student.name
        },
        {
            name: "Email",
            selector: (student) => student.email
        },
        {
            name: "Marks",
            selector: (student) => student.student_mark
        },

    ]

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseUrl + 'programmes/student',
            headers: {
                'Authorization': 'token abf3d4b38df57e7ef0a95a6b748b5cfd5ea2df9a'
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                for(let i = 0; i < response.data.length; i++){
                    if(response.data[i].student_mark >= 50){
                        response.data[i].student_mark = "Pass"
                    }else{
                        response.data[i].student_mark = "Fail"
                    }
                }
                setStudent(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <div>
            <h1>Student Marks</h1>
            <DataTable columns={columns} data={student} fixedHeader={true}/>
        </div>
    );
}

export default StudentMarks;