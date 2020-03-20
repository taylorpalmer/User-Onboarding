import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import UserForm from "./UserForm";
import UsersList from "./UsersList";

function App() {
  const [usersListState, setUsersListState] = useState([]);

  const addUserHandler = newUser => {
    console.log("adding user", newUser);
    setUsersListState([...usersListState, newUser]);
  };

  axios
    .post(`https://reqres.in/api/${UserForm}`)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });

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
