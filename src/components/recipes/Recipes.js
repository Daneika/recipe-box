import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function Recipes(props) {
  return (
    <div>
      <Container fluid>
        <Row>
          {props.recipes.map((recipe) => {
            return (
              <Col key={recipe.title}>
                <Card style={{ width: "18rem", height: "22rem" }}>
                  <Card.Img
                    src={`https://spoonacular.com/recipeImages/${recipe.id}-312x150.jpg`}
                  />
                  <Card.Body>
                    <OverlayTrigger
                      key={recipe.title}
                      placement="right"
                      overlay={<Tooltip>{recipe.title}</Tooltip>}
                    >
                      <Card.Title>
                        {recipe.title.length < 20
                          ? `${recipe.title}`
                          : `${recipe.title.substring(0, 25)}...`}
                      </Card.Title>
                    </OverlayTrigger>
                    <Card.Text>
                      {`Duration: ${recipe.readyInMinutes}mins`}
                      <div>{`Serves: ${recipe.servings}`}</div>
                    </Card.Text>
                    <Button variant="success">View Recipe</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
