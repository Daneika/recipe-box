import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const useStyles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#AECDD2",
      color: "white",
      height: "3em",
    },
    title: {
      display: "inline",
      fontSize: "1.8em",
      
    },
    icon: {
      fontSize: "1.8em",
      display: "inline",
    },
    link: {
      color: "inherit",
    },
  };
  return (
    <div>
      <Navbar style={useStyles.navbar}>
        <Nav.Link style={useStyles.link} href="/">
          <FontAwesomeIcon style={useStyles.icon} icon={faUtensils} size="lg" />
          <h4 style={useStyles.title}> Recipe Box</h4>
        </Nav.Link>
        <Nav.Link href="https://github.com/Daneika/recipe-box">
          <img src="/github-logo.png" alt="github logo"></img>
        </Nav.Link>
      </Navbar>
    </div>
  );
}
