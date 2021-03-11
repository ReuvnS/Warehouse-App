import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function SignIn(props) {
  const [serial, setSerial] = useState("");
  const [fullName, setFullName] = useState("");
  const [forkLift, setForkLift] = useState("no");
  const [serialEroor, setSerialEroor] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  
  const serValid = (e) => {
    if (e.length > 5 || e.length < 5) {
      setSerialEroor("Must have 5 digits");
    } else {
      setSerialEroor("");
    }
  };
  const nameValid = (e) => {
    //  check if numbers                check if space
    if (/\d/g.test(e) || e.length < 4 || !/\s/.test(e)) {
      setFullNameError(
        "the name must contain minimum 4 characters and only letters and one space."
      );
    } else {
      setFullNameError("");
    }
  };
  return (
    <div style={{ height: "700px" }}>
      <input
        onChange={(e) => {
          serValid(e.target.value);
          setSerial(e.target.value);
        }}
        type="number"
        placeholder="Enter serial"
      />
      <br />
      <p  style={{color:'red'}}>{serialEroor}</p>
      <br />
      <input
        onChange={(e) => {
          nameValid(e.target.value);
          setFullName(e.target.value);
        }}
        type="text"
        placeholder="Enter Full name"
      />
      <br />
      <p style={{color:'red'}}>{fullNameError}</p>
      <br />
      <p>Forklift license: </p>
      <input
        type="radio"
        id="no"
        name="forklift"
        value="no"
        checked="cheked"
        onChange={(e) => {
          setForkLift(e.target.value);
        }}
      />
      <label for="no">No</label>
      <input
        type="radio"
        id="yes"
        name="forklift"
        value="yes"
        onChange={(e) => {
          setForkLift(e.target.value);
        }}
      />
      <label for="yes">Yes</label>
      <button className='btn'
        onClick={() => {
          props.add(serial, fullName, forkLift);
        }}
      >
        Create
      </button>
    </div>
  );
}
