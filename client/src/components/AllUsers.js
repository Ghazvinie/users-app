import React from "react";
import { Link } from "react-router-dom";

export default function AllUsers({ usersData }) {

    const users = usersData.map(user => (
        <Link to={`/user/${user.login.username}`}>
            <div className='user' key={user.id.value}>

                <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />

                <p>{user.name.title}. {`${user.name.first} ${user.name.last}`}</p>

                <p>{user.login.username}</p>

                <p>{user.email}</p>

            </div>
        </Link>
    ))


    return (
        <div>
            {users}
        </div>
    );

}

