import React, {useEffect, useState} from 'react';
import {BaseUrl} from "../consistents";
import axios from "axios";
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

function Programmes(props) {
    const [programmes, setProgrammes] = useState([]);
    const columns = [
        {field: 'name', header: 'Name'},
        {field: 'description', header: 'Description'},
        {field: 'level', header: 'Level'},
        {field: 'duration', header: 'Duration'}
    ];

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseUrl + 'programmes/programme',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setProgrammes(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);



    return (
        <div className="card">
            <DataTable value={programmes} tableStyle={{minWidth: '50rem'}}>
                {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} header={col.header}/>
                ))}
            </DataTable>
        </div>
    );
}

export default Programmes;