import React from "react";
import { Link } from "react-router-dom";
export default function User({
  persons,
  choosePerson,
  products,
  updateProduct,
}) {
  return (
    <div style={{ height: "1050px" }}>
      {persons.map((person, index) => {
        if (index == choosePerson.index) {
          return (
            <div>
              <h3>Welcome {person.fullName}</h3>
              <h1>Details:</h1>
              <p>Full name:{person.fullName}</p>
              <p>NO.:{person.serial}</p>
              <p>Forklift lisence:{person.forkLift}</p>
            </div>
          );
        }
      })}
      <h1>Products:</h1>
      {products.map((product, index) => {
        if (product.inPlace == false) {
          return (
            <div style={{ padding: "4px 4px", border: "3px solid black" }}>
              <p>ID: {product.id}</p>
              <p>Name :{product.name}</p>
              <p> {product.needforklift}</p>
              <button
                className="btn"
                onClick={() => updateProduct(index, product.id)}
              >
                Update
              </button>
            </div>
          );
        }
      })}
      <br />
      <br />

      <Link to="/">
        <button className="btn">Log out</button>
      </Link>
    </div>
  );
}
