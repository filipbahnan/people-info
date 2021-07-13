import React, { useState, useEffect } from 'react'

import SearchBar from '../SearchBar/SearchBar';
import styles from './SearchPeople.module.css';

const SearchPeople = (): JSX.Element => {
    return (
        <div className={styles.component}>
            <h1>Search for registered users:</h1>
            <SearchBar />
        </div>
    );
};

export default SearchPeople;

