import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../../Api.module'

const UserProfile = (props: {user: string}): JSX.Element => {

    const [data, setData] = React.useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
          let result: never[] = await fetchPosts(props.user);
          setData(result);
        }
        fetchMyAPI()
      }, [])

    let table: JSX.Element[] = data.map((row: any) => (
        <tr key={row.id}>
            <td>{row.title}</td>
            <td>{row.text}</td>
        </tr>
    ));

   return <div>{table}</div>
};

export default UserProfile;