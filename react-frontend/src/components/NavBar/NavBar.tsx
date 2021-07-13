import styles from './NavBar.module.css';
import NavItems from './NavItems'
import React from 'react'

const NavBar = (): JSX.Element => {

    let navLinks: JSX.Element[] = NavItems.map((item: any, index: number) => (
        <li key={index} className={styles.li}>
            <a className={styles.li_a}href={item.ref}>{item.title}</a>
        </li>
    ));
    console.log(typeof(NavItems[1]));
    return (
    <div>
        <ul className={styles.ul}>
            {navLinks}
         </ul>
    </div>)
};

export default NavBar;