
export default function UserList(props) {
    const {listOfUser} = props
    return (
        <ul className="App">
            {listOfUser.map(user => <li>Name: {user.name} , email: {user.email} , city: {user.address.city} </li>)}
        </ul>
    )
}