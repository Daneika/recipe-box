import React from "react";


import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SearchForm(props) {
  const useStyles = {
    button: {
      backgroundColor:"#AECDD2",
      border: "white",
      margin: 5,
    },
  };

  return (
    <div>
      <Form onSubmit={props.getRecipe}>
        <Form.Row >
          <Col>
            <Form.Control type="text" placeholder="Search for recipes..." name="recipeName" />
            <Button type="submit" style={useStyles.button}>
              Search
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
}
