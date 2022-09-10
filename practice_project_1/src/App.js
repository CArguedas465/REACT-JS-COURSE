import FormCapture from "./components/FormCapture";
import { useState } from "react";

import "./styles/App.css";
import "./styles/Button.css";
import "./styles/General.css";
import Container from "./common/Container";
import AddedUser from "./common/AddedUser";
import ErrorModal from "./components/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorDescription, setErrorDescription] = useState("");

  const setErrorData = (title, description) => {
    setErrorTitle(title);
    setErrorDescription(description);
    setIsValid(true);
  };

  const checkClick = e => {
    console.log(e.target.className)
    if (e.target.tagName === 'button' ){
        closeModal();
    } else if (!(e.target.className === 'modal-position' || 
    e.target.className === 'modal-header' || 
    e.target.className === 'modal')) {
        closeModal();
    }
};

  const validate = (user) => {
    if (user.username === "" || user.age === "") {
      setErrorData("Invalid Input", "All fields need to be completed before submitting.");
      return false;
    }

    if (Number.parseInt(user.age) < 0) {
      setErrorData("Invalid Input", "Age value must be a positive number.");
      return false;
    }

    return true;
  };

  const closeModal = () => {
    setIsValid(false);
  };

  const addUserHandler = (user) => {
    if (!validate(user)) {
      return;
    }

    setUsers((users) => {
      return [user, ...users];
    });
  };

  return (
    <div onClick={checkClick}>
      {isValid && (
        <ErrorModal
          checkClick={checkClick}
          errorTitle={errorTitle}
          errorDescription={errorDescription}
        />
      )}
      <div
        style={
          isValid
            ? { height: "100%", filter: "brightness(50%)", margin: "0px" }
            : {}
        }
      >
        <Container>
          <FormCapture addUserHandler={addUserHandler} />
        </Container>
        <br />
        <br />
        {users.length !== 0 && (
          <Container>
            {users.map((user) => (
              <AddedUser username={user.username} age={user.age} />
            ))}
          </Container>
        )}
      </div>
    </div>
  );
}

export default App;
