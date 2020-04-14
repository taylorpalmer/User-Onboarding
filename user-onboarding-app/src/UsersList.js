import React from "react";

const UsersList = props => {
  return (
    <div className="users-list">
      {props.users.map(user => (
        <div className="user" key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.password}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
