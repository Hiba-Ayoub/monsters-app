import React, { Component } from "react";

import { useState } from "react";

function nameNam() {
  const [people, setPeople] = useState([
    { firstName: "hussein", lastName: "salloum" },
    { firstName: "hiba", lastName: "ayoub" },
  ]);

  const [person, setPerson] = useState({ firstName: "", lastName: "" });

  const onChange = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (person.firstName.trim() === "" || person.lastName.trim() === "") return;

    const newPerson = {
      firstName: person.firstName.trim(),
      lastName: person.lastName.trim(),
    };

    setPeople([...people, newPerson]);

    person.firstName = "";
    person.lastName = "";
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Add aperson:</h2>
          <hr />
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="firstName"
                onChange={onChange}
                placeholder="first name"
                value={person.firstName}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="lastName"
                onChange={onChange}
                placeholder="last name"
                value={person.lastName}
              />
            </div>
            <button className="btn btn-success" type="submit">
              Add Person
            </button>
          </form>
        </div>
        <div className="col">
          <h2>People:</h2>
          <hr />
          {people.map((person) => (
            <div key={Math.random() * 10000000}>
              <p>
                {person.firstName} {person.lastName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default nameNam;
