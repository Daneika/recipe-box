import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

export default function Header() {
  return (
    <div>
      <Navbar className="header">
        <Nav.Link className="home-link" href="/">
          <FontAwesomeIcon
            className="utensils-icon"
            icon={faUtensils}
            size="lg"
          />
          <h3 className="title"> Recipe Box </h3>
        </Nav.Link>
        <Nav.Link href="https://github.com/Daneika/recipe-box">
          <img src="/github-logo.png" alt="github logo"></img>
        </Nav.Link>
      </Navbar>
    </div>
  );
}
