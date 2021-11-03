import React from "react";

export default function UserDetail({user}) {
    return (
        <div>
        <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />

        <p>{user.name.title}. {`${user.name.first} ${user.name.last}`}</p>

        <p>{user.login.username}</p>

        <p>{user.location.country}</p>

        <p>{user.email}</p>

    </div>
    )
}