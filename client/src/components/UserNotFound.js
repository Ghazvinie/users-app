import { Link } from "react-router-dom"
export default function UserNotFound(){
    return (
        <>
        <p>User Not Found</p>
        <Link to='/' >
            Return 
            </Link>
        </>
    );
}