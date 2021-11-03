import React, { useContext } from "react";
import { useParams, useHistory } from 'react-router-dom';
import { Context } from '../App';

import UserDetail from "./UserDetail";
import UserNotFound from "./UserNotFound";

export default function SingleUser() {
    const usersData = useContext(Context);
    const { id } = useParams();
    const { goBack } = useHistory();

    if (usersData == null) return <UserNotFound />; // No user data

    const singleUser = usersData.find(user => user.login.username === id);
    if (singleUser == null) return <UserNotFound />; // No single user found

    return (
        <div className='single-page'>
            <div onClick={() => goBack()}>Back</div>
            <UserDetail user={singleUser} />
        </div>
    );
}