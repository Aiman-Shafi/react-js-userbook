import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const AllUsers = ({ users }) => {
  return (
    <div className="all-user">
      {users.map((user) => (
        <div className="user-card">
          <h3>{user.name}</h3>
          <p>{user.company}</p>
          <p>{user.jobtitle}</p>
          <Link to={`users/${user.id}`}>View User</Link>
        </div>
      ))}
    </div>
  );
};

export default AllUsers;
