import React, { useContext } from "react";
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { Context } from '../App';

import UserDetail from "./UserDetail";
import UserNotFound from "./UserNotFound";

export default function SingleUser() {
    const usersData = useContext(Context);

    const { id } = useParams();
    const singleUser = usersData.find(user => user.login.username === id)

    const { goBack } = useHistory()

    return (
        <div className='single-page'>
            <div>Back</div>
            {
                singleUser ? <UserDetail user={singleUser} /> : <UserNotFound />
            }
        </div>
    )
}