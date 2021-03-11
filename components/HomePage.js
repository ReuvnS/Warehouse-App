import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div style={{ height: "700px" }}>
      <p style={{ fontSize: "20px", fontWeight: "bold", color: "blueviolet" }}>
        Hello ,please login or sign in
      </p>
      <Link to="/login">
        <button className="btn">Login</button>
      </Link>
      <br />
      <Link to="/signin">
        <button className="btn">Sign In</button>
      </Link>
    </div>
  );
}
