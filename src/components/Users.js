import React, { useState } from 'react'
import { CallApi } from './CallApi';

export const Users = () => {

    // const [users, setUsers] = useState([])


    const onSuccess = (data) => {
        console.log("Sucess msg", data);
        // setUsers(data)

    }
    const onError = (error) => {
        console.log("Error msg");
    }

    const { data, error, isLoading, isFetching, enable } = CallApi('users',

        {
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users',

        },
        {
            onError,
            onSuccess,
        }
    )

    // console.log(data, isLoading);

    return (
        <div>
            {isLoading ? (<>loading.....</>) :
                data?.data.map((user) => (
                    <p key={user.id}>{user.name}</p>
                ))

            }

        </div>
    )
}
