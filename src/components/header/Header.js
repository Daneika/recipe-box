import React from "react";

import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div>
      <Navbar className="header" expand="lg" variant="light" bg="success">
        <FontAwesomeIcon icon={faUtensils} size="lg" />
        <span>Recipe Box</span>
      </Navbar>
    </div>
  );
}
