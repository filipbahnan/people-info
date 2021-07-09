import React, { useState, useEffect } from 'react'
import axios from 'axios';

import ListOfPeople from './../ListOfPeople/ListOfPeople' 

const AllPeople = (): JSX.Element => {

    const [data, setData] = useState([]);

    useEffect( () => {
        const fetchUsers = async () => {
            const response = await axios(`http://192.168.1.220:8080/api/v1/users/all`);
            setData(response.data);
            console.log(response.data)
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>TESTING</h1>
            <tbody><ListOfPeople users={data}/></tbody>
        </div>
    );
};

export default AllPeople;

