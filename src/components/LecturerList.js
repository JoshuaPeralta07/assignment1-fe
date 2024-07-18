import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../consistents";
import DataTable from "react-data-table-component";

function LecturerList(props) {

    const [lecturers, setLecturers] = useState([]);
    const columns = [
        {
            name: "ID",
            selector: (lecturers) => lecturers.id
        },
        {
            name: "Name",
            selector: (lecturers) => lecturers.name
        },
        {
            name: "Department",
            selector: (lecturers) => lecturers.department
        },
        {
            name: "Email",
            selector: (lecturers) => lecturers.email
        },
        {
            name: "Phone",
            selector: (lecturers) => lecturers.phone
        },
        {
            name: "Address",
            selector: (lecturers) => lecturers.address
        }

    ]

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseUrl + 'programmes/lecturer',
            headers: {
                'Authorization': 'token abf3d4b38df57e7ef0a95a6b748b5cfd5ea2df9a'
            }
        };

        axios.request(config)
            .then((response) => {
                setLecturers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    return (
        <div>
            <h1>Lecturer List</h1>
            <DataTable columns={columns} data={lecturers} fixedHeader={true}/>
        </div>
    );
}

export default LecturerList;