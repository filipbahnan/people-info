import React, { useState, useEffect } from 'react'
import axios from 'axios';

import styles from './AllPeople.module.css';
import ListOfPeople from '../ListOfPeople/ListOfPeople' 
import { fetchAllUsers } from '../../Api.module'

const AllPeople = (): JSX.Element => {

    const [data, setData] = useState([]);

    useEffect( () => {
        const fetchUsers = async () : Promise<void> => {
            const response = await fetchAllUsers();
            setData(response);
        };
        fetchUsers();
    }, []);

    return (
        <div className={styles.component}>
            <h1>All registered users</h1>
            <tbody><ListOfPeople users={data}/></tbody>
        </div>
    );
};

export default AllPeople;

