import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const { users, loading, error } = useFetch(
    "https://react-js-userbook.vercel.app/users/" + id
  );

  const navigate = useNavigate();

  const deleteUser = () => {
    fetch("https://react-js-userbook.vercel.app/users/" + users.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <h2>User Details {id}</h2>
      {loading && <div>Loading....</div>}
      <div>
        {users && (
          <div>
            <h2>{users.name}</h2>
            <h2>{users.email}</h2>
            <h2>{users.phone}</h2>
            <h2>{users.jobtitle}</h2>
            <button onClick={deleteUser}>Delete User</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
