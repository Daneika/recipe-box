import React from "react";

import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const useStyles = {
    navbar: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textColor: "white"
    },
    icon: {
      margin: 7,
    },
  };
  return (
    <div>
      <Navbar style={useStyles.navbar} expand="lg" variant="light" bg="success">
        <h3>Recipe Box</h3>
        <FontAwesomeIcon style={useStyles.icon} icon={faUtensils} size="lg" />
      </Navbar>
    </div>
  );
}
