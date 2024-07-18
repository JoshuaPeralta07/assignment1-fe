import React, {useEffect, useState} from 'react';
import {BaseUrl} from "../consistents";
import axios from "axios";
import DataTable from 'react-data-table-component';

function Programmes(props) {
    const [programmes, setProgrammes] = useState([]);
    const columns = [
        {
            name: "Name",
            selector: (programmes) => programmes.name
        },
        {
            name: "Description",
            selector: (programmes) => programmes.description
        },
        {
            name: "Level",
            selector: (programmes) => programmes.level
        },
        {
            name: "Duration",
            selector: (programmes) => programmes.duration
        },

    ]

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseUrl + 'programmes/programme',
            headers: {
                'Authorization': 'token abf3d4b38df57e7ef0a95a6b748b5cfd5ea2df9a'
            }
        };

        axios.request(config)
            .then((response) => {
                setProgrammes(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);



    return (
        <div className="card">
            <h1>Programme List</h1>
             <DataTable columns={columns} data={programmes} fixedHeader={true}/>
        </div>
    );
}

export default Programmes;