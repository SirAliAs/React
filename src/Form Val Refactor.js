import React from "react";
import { useState } from "react";

export default function FormRef() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const registerHandler = (event) => {
    event.preventDefault();

    let userInfo = {
      firstName,
      lastName,
      email,
    };

    fetch("https://siraliasreact-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      body: JSON.stringify(userInfo),
    }).then((response) => console.log(response));
  };

  return (
    <div className="bg-green-500 h-screen">
      <form
        action="#"
        autoComplete="off"
        className="flex flex-col items-center pt-5"
        onSubmit={registerHandler}
      >
        <div className="flex flex-col bg-white shadow-2xl h-full rounded">
          <input
            type="text"
            id="FirstName"
            autoComplete="off"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className=" p-2 mt-4 mx-3 bg-slate-200 rounded"
            placeholder="First Name"
          />

          <input
            type="text"
            id="LastName"
            autoComplete="off"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className=" p-2 mt-5 mx-3 bg-slate-200 rounded"
            placeholder="Last Name"
          />

          <input
            type="email"
            id="Email"
            value={email}
            autoComplete="off"
            onChange={(event) => setEmail(event.target.value)}
            className=" p-2 mt-5 mx-3 bg-slate-200 rounded"
            placeholder="Email"
          />

          <button
            type="submit"
            className=" p-2 mt-5 mx-3 bg-green-500 mb-5 rounded "
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
