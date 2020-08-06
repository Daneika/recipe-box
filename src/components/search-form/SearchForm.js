import React from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./SearchForm.css";

export default function SearchForm(props) {
  return (
    <div>
      <Form onSubmit={props.getRecipe}>
        <Form.Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Search for recipes..."
              name="recipeName"
            />
            <Button type="submit" className="search-button">
              Search
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
}
