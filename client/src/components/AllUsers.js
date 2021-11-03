import React from "react";
import { Link } from "react-router-dom";
import '../styles/allusers.css'

export default function AllUsers({ usersData }) {

    const users = usersData.map((user, idx) => (
        <div className='user-info-container' >
            <div className='img-container'>
                <Link to={`/user/${user.login.username}`} key={idx} style={{ textDecoration: 'none' }}>
                    <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />
                </Link>
            </div>
            <div className='user-text'>
                <p  className='title'>{user.name.title}. {`${user.name.first} ${user.name.last}`}</p>
                <p>{user.login.username}</p>
                <p>{user.email}</p>
            </div>
        </div>
    ))


    return (
        <div className='users-container'>
            {users}
        </div>
    );

}

