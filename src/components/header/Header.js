import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
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
      fontSize: "1.8em",
    },
    link: {
      color: "inherit",
    }
  };
  return (
    <div>
      <Navbar style={useStyles.navbar}>
        <FontAwesomeIcon style={useStyles.icon} icon={faUtensils} size="lg" />
        <Nav.Link style={useStyles.link} href="/"><h3>Recipe Box</h3></Nav.Link>
      </Navbar>
    </div>
  );
}
