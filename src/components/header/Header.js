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
      backgroundColor: "#AECDD2",
      color: "white",
      height: "3em",
    },
    icon: {
      margin: 10,
      fontSize: "1.5em",
    },
  };
  return (
    <div>
      <Navbar style={useStyles.navbar}>
        <FontAwesomeIcon style={useStyles.icon} icon={faUtensils} size="lg" />
        <h3> Recipe Box</h3>
      </Navbar>
    </div>
  );
}
