import React from "react";


import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



export default function SearchForm(props) {
  const useStyles = {
    button: {
      margin: 3,
    },
  };

  return (
    <div>
      <Form onSubmit={props.getRecipe}>
        <Form.Control type="text" name="recipeName" />
        <Button variant="success" type="submit" style={useStyles.button}>
          Search
        </Button>
      </Form>
    </div>
  );
}
