import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [jobtitle, setJobtitle] = useState("");
  const [pending, setPending] = useState(false);

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const user = { name, company, email, jobtitle };
    console.log(user);
    setPending(true);
    setTimeout(() => {
      fetch("http://localhost:8000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }).then(() => {
        console.log("USER ADDED TO THE LIST");
        setPending(false);
      });
    }, 1000);

    navigate("/");
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="job title"
          value={jobtitle}
          onChange={(e) => setJobtitle(e.target.value)}
        />
        <br />

        {pending && (
          <input type="submit" disabled value="Adding user to the list" />
        )}
        {!pending && <input type="submit" value="Add user" />}
      </form>
      {/* <h4>{name}</h4>
      <h4>{jobtitle}</h4>
      <h4>{company}</h4>
      <h4>{email}</h4> */}
    </div>
  );
};

export default Create;
