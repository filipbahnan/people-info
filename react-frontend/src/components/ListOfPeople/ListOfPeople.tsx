import React from 'react'
import styles from './ListOfPeople.module.css'

const ListOfPeople = (props: { users: never[]; }): JSX.Element => {
    console.log(typeof(props));
    let table: JSX.Element[] = props.users.map((row: any) => (
        <tr key={row.id}>
            <td className={styles.td}>{row.name}</td>
            <td className={styles.td}>{row.email}</td>
            <td className={styles.td}>{row.id}</td>
        </tr>
    ));

    return <div><table className={styles.table}>{table}</table></div>;
};

export default ListOfPeople;