import React from "react";
import { useParams } from 'react-router-dom';

export default function SingleUser({ usersData }) {
    const { id } = useParams();
    const singleUser = usersData.find(user => user.login.username == id);

    

    return (
        <div>
          <div>
            <img src={singleUser.picture.large} alt={`${singleUser.name.first} ${singleUser.name.last}`}/>

            <p>{singleUser.name.title}. {`${singleUser.name.first} ${singleUser.name.last}`}</p>

            <p>{singleUser.login.username}</p>

            <p>{singleUser.location.country}</p>

            <p>{singleUser.email}</p>


        </div>
        </div>
    )
}