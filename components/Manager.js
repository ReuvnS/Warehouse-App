import React from "react";
import { Link } from "react-router-dom";
export default function Manager({ persons, choosePerson }) {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <table
        style={{
          border: "4px solid black",
          borderCollapse: "collapse",
          marginLeft: "300px",
        }}
      >
        <tr>
          <th
            style={{
              border: "4px solid black",
              borderCollapse: "collapse",
              width: "300px",
              height: "80px",
            }}
          >
            No.
          </th>
          <th
            style={{
              border: "4px solid black",
              borderCollapse: "collapse",
              width: "300px",
              height: "80px",
            }}
          >
            Full Name
          </th>
          <th
            style={{
              border: "4px solid black",
              borderCollapse: "collapse",
              width: "300px",
              height: "80px",
            }}
          >
            Count
          </th>
        </tr>
        {persons.map((person, index) => {
          return (
            <tr>
              <td
                style={{
                  border: "4px solid black",
                  borderCollapse: "collapse",
                  width: "300px",
                  height: "80px",
                }}
              >
                {person.serial}
              </td>
              <td
                style={{
                  border: "4px solid black",
                  borderCollapse: "collapse",
                  width: "300px",
                  height: "80px",
                }}
              >
                {person.fullName}
              </td>
              <td
                style={{
                  border: "4px solid black",
                  borderCollapse: "collapse",
                  width: "300px",
                  height: "80px",
                }}
              >
                {person.count}
              </td>
            </tr>
          );
        })}
      </table>
      <br />
      <Link to="/">
        <button className="btn">Log out</button>
      </Link>
    </div>
  );
}
