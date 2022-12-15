import React, { useEffect, useState } from "react";
import AllUsers from "./AllUsers";
import useFetch from "./useFetch";

const Home = () => {
  //   useEffect(() => {
  //     fetch("http://localhost:8000/users")
  //       .then((res) => res.json())
  //       .then((data) => setUsers(data));
  //   });

  const { users, loading, error } = useFetch("react-js-userbook.vercel.app/users");

  return (
    <div>
      <h1>{error && <div>{error}</div>}</h1>
      {loading && <div>Loading....</div>}
      {users && <AllUsers users={users}></AllUsers>}
    </div>
  );
};

export default Home;
