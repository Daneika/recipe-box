import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import "./Recipes.css";

export default function Recipes(props) {
  const createHandler = (recipe) => (e) => {
    e.preventDefault();
    console.log("The link was clicked.");
    window.open(recipe.sourceUrl);
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        {props.recipes.map((recipe) => {
          return (
            <Col
              xs={12}
              sm={6}
              md={"auto"}
              className="card-layout"
              key={recipe.id}
            >
              <Card variant="top" className="recipeCard">
                <Card.Img
                  src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}
                />
                <Card.Body className="text-center">
                  <OverlayTrigger
                    key={recipe.title}
                    placement="top"
                    overlay={<Tooltip>{recipe.title}</Tooltip>}
                  >
                    <Card.Title>
                      {recipe.title.length < 20
                        ? `${recipe.title}`
                        : `${recipe.title.substring(0, 20)}...`}
                    </Card.Title>
                  </OverlayTrigger>
                  <Card.Footer>
                    {`Duration: ${recipe.readyInMinutes}mins`}
                    <div>{`Serves: ${recipe.servings}`}</div>
                    <Button
                      onClick={createHandler(recipe)}
                      className="view-recipe"
                    >
                      View Recipe
                    </Button>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
