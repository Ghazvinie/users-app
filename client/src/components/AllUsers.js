export default function AllUsers({ usersData }) {

    console.log(usersData)

    const usersTable = usersData.map(user => (
        <div className='user' key={user.id.value}>

                <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`}/>

                <p>{user.name.title}. {`${user.name.first} ${user.name.last}`}</p>


                <p>{user.login.username}</p>

                <p>{user.email}</p>

        </div>
    ))


    return (
        <div>
            {usersTable}
        </div>
    );

}

