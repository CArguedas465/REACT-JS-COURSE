import '../styles/Input.css'

const AddedUser = (props) => {
    return (
        <input type="text" value={`${props.username} (${props.age} years old)`} disabled/>
    );
}

export default AddedUser;