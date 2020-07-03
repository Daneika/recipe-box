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
              <Col xs={12} sm={6} md={4} lg={3} xl={2} style={{height: "30rem"}} key={recipe.title}>
                <Card variant="top" style={{maxWidth:"20rem", minWidth:"12rem", height:"98%"}}>
                  <Card.Img
                    src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}
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
                    <Card.Footer>
                    {`Duration: ${recipe.readyInMinutes}mins`}
                      <div>{`Serves: ${recipe.servings}`}</div>
                    <Button style={{margin:"1rem", backgroundColor:"#AECDD2", border:"white"}}>View Recipe</Button>
                    
                    </Card.Footer>
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
