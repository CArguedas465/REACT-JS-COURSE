import { useState } from "react";
import "../styles/Input.css";

const FormCapture = props => {

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    let user = {
      username : username,
      age : age
    }

    props.addUserHandler(user);
  };

  const usernameChangeHandler = e => {
    setUsername(e.target.value);
  };

  const ageChangeHandler = e => {
    setAge(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="username">Username</label>
      <br />
      <input value={username} onChange={usernameChangeHandler} type="text" />
      <label htmlFor="Age">Age</label>
      <br />
      <input value={age} onChange={ageChangeHandler} type="text" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default FormCapture;
