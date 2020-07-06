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
    form: {
      display: "flex",
      textAlign: "center",
      alignItems: "center",
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
        `https://api.spoonacular.com/recipes/search?query=${recipeName}&number=14&apiKey=${process.env.REACT_APP_API_KEY}`
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
      <Container fluid>
        <Row style={useStyles.form}>
          <Col xs={{ span: 5 }} sm={{ span: 4 }} lg={{ span: 2 }}>
            <SearchForm getRecipe={getRecipe} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Recipes recipes={recipes} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
