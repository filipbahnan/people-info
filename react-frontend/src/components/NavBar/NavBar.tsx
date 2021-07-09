import styles from './NavBar.module.css';
import React from 'react'

// type AppProps = {
//     message: string;
// };

const NavBar = (): JSX.Element => {
    return (
    <div>
        <ul className={styles.ul}>
            <li className={styles.li}><a className={styles.li_a}href="default.asp">Home</a></li>
            <li className={styles.li}><a className={styles.li_a}href="default.asp">Home</a></li>
            <li className={styles.li}><a className={styles.li_a}href="default.asp">Home</a></li>
            <li className={styles.li}><a className={styles.li_a}href="default.asp">Home</a></li>
            <li className={styles.li}><a className={styles.li_a}href="default.asp">Home</a></li>
            <li className={styles.li}><a className={styles.li_a}href="default.asp">Home</a></li>
            <li className={styles.li}><a className={styles.li_a}href="default.asp">Home</a></li>
            <li className={styles.li}><a className={styles.li_a}href="default.asp">Home</a></li>
            <li className={styles.li}><a className={styles.li_a}href="default.asp">Home</a></li>
            <li className={styles.li}><a className={styles.li_a}href="default.asp">Home</a></li>
            <li className={styles.li}><a className={styles.li_a}href="default.asp">Home</a></li>
            <li className={styles.li}><a className={styles.li_a}href="default.asp">Home</a></li>

        </ul>
    </div>)
};

export default NavBar;