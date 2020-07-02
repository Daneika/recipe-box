import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="success">
        <h1>Recipe Box</h1>
      </Navbar>
    </div>
  );
}
