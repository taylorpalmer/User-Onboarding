import React, { useState } from "react";
import "./App.css";
import UserForm from "./UserForm";
import UsersList from "./UsersList";

function App() {
  const [usersListState, setUsersListState] = useState([]);

  const addUserHandler = newUser => {
    console.log("adding user", newUser);
    setUsersListState([...usersListState, newUser]);
  };

  return (
    <div className="App">
      <UserForm
        // @ts-ignore
        addUser={addUserHandler}
      />
      <UsersList users={usersListState} />
    </div>
  );
}

export default App;
