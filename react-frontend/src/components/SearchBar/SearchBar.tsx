import React, { useEffect } from 'react'
import ListOfPeople from '../ListOfPeople/ListOfPeople'
import { fetchSpecifiedUsers } from '../../Api.module'
import styles from './SearchBar.module.css';
import { ImSearch } from 'react-icons/im'



const SearchBar = (): JSX.Element => {

    const [searchUser, setSearchUser] = React.useState([]);
    const [input, setInput] = React.useState("");

    const fetchUsers = async () : Promise<void> => {
        const response = await fetchSpecifiedUsers(input);
        setSearchUser(response);
    };

    const handleEnter = (event: { code: string; }) => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
            fetchUsers();
        }
    }

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value);
    };

    const handleButtonClick = () => {
        fetchUsers();
    };

    return (
        <div >
            <input
            contentEditable="true"
            className={styles.input}
            type="text"
            placeholder="Search"
            value={input}
            onChange={handleInputChange}
            onKeyUp={handleEnter}
            />
            <button className={styles.button} type="submit" onClick={handleButtonClick}><ImSearch/></button>
            <tbody><ListOfPeople users={searchUser}/></tbody>
        </div>
    );
};

export default SearchBar;