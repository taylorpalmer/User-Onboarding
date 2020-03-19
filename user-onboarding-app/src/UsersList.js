import React from "react";

const UsersList = props => {
  return (
    <div className="users-list">
      {props.users.map(user => (
        <div className="user" key={user.id}>
          <h2></h2>
          <p></p>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
