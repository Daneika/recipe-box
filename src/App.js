import React from "react";
import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";
import Header from "./components/header";
import SearchForm from "./components/search-form";
import Recipes from "./components/recipes";

export default function App() {
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
      setRecipes(
        data.results.filter((recipe) => recipe.hasOwnProperty("image"))
      );
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
        <Row className="form">
          <Col
            xs={{ span: 7 }}
            sm={{ span: 6 }}
            md={{ span: 5 }}
            lg={{ span: 2 }}
          >
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

