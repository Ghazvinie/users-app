import React from "react";
import { useParams, Redirect, useHistory } from 'react-router-dom';
import UserDetail from "./UserDetail";
import UserNotFound from "./UserNotFound";

export default function SingleUser({ usersData }) {
    const { id } = useParams();
    const singleUser = usersData.find(user => user.login.username === id)

    const { goBack } = useHistory()

    return (
        <div className='single-page'>
            <div>Back</div>
            {
                singleUser ? <UserDetail user={singleUser} /> : goBack()
            }
        </div>
    )
}