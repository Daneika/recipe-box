import React from "react";
import { useState } from "react";

import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "./components/header";
import SearchForm from "./components/search-form";
import Recipes from "./components/recipes";

function App() {
  const useStyles = {
    body: {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      marginTop: 30,
    },
  };

  const getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    console.log(process.env);
    try {
      const apiCall = await fetch(
        `https://api.spoonacular.com/recipes/search?query=${recipeName}&number=12&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await apiCall.json();
      console.log(data);
      setRecipes(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  const [recipes, setRecipes] = useState([]);
  // console.log(recipes);

  return (
    <div>
      <Header />
      <div>
        <Container fluid>
          <Row style={useStyles.body}>
            <Col md={{ span: 3 }}>
              <SearchForm getRecipe={getRecipe} />
            </Col>
          </Row>
          <Row style={useStyles.body}>
            <Col>
              <Recipes recipes={recipes} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default App;
