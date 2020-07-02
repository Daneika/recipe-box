import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function SearchForm() {
  const useStyles = {
    body: {
      textAlign: "center",
      padding: 10,
      maxWidth: 300,
    },
    form: {
      display: "inline-block",
    },
    button: {
      margin: 3,
    },
  };

  return (
    <div style={useStyles.body}>
      <Form style={useStyles.form}>
        <Form.Control type="text" />
        <Button style={useStyles.button} variant="success">
          Search
        </Button>
      </Form>
    </div>
  );
}
