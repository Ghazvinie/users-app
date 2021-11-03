import React from "react";
import '../styles/singleuser.css'

export default function UserDetail({ user }) {
    return (
        <div className='single-container'>
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />

            <div className='user-details'>
                <p className='title'>Full Name: {user.name.title}. {`${user.name.first} ${user.name.last}`}</p>

                <p>Username: {user.login.username}</p>

                <p>Country: {user.location.country}</p>

                <p>Email: {user.email}</p>
            </div>

        </div>
    )
}