import React from 'react'

// const rows = [
//     {type: "Frozen yoghurt", id: 159},
//     {type: "Ice cream sandwich", id: 237},
//     {type: "Eclair", id: 262},
//     {type: "Cupcake", id: 305},
//     {type: "Gingerbread", id: 356}
// ];

const ListOfPeople = (props: any): JSX.Element => {
    console.log(props);
    let table: JSX.Element[] = props.users.map((row: any) => (
        <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.id}</td>
        </tr>
    ));

    return <div><table>{table}</table></div>;
};

export default ListOfPeople;