import styles from './NavBar.module.css';
import NavItems from './NavItems'
import React from 'react'

const NavBar = (): JSX.Element => {

    //fetch logged in name
    const user: string = "jmewitt0";

    let navLinks: JSX.Element[] = NavItems.map((item: any, index: number) => (
        <li key={index} className={styles.li}>
            <a className={styles.li_a}href={item.ref}>{item.title}</a>
        </li>
    ));
    return (
    <div>
        <ul className={styles.ul}>
            {navLinks}
            <li className={styles.li}>
            <a className={styles.li_a}href={user}>{"My Profile"}</a>
            </li>
         </ul>
    </div>)
};

export default NavBar;