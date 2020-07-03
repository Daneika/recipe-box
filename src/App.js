import React from "react";
import { useState } from "react";

import "./App.css";

import Header from "./components/header";
import SearchForm from "./components/search-form";

function App() {
  const useStyles = {
    body: {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      margin: 40,
    },
  };

  const getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    console.log(process.env);
    const apiCall = await fetch(
      `https://api.spoonacular.com/recipes/search?query=${recipeName}&number=3&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await apiCall.json();

    setRecipes(data.results);
  };

  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  return (
    <div>
      <Header />
      <div style={useStyles.body}>
        <SearchForm getRecipe={getRecipe} />
      </div>
    </div>
  );
}
export default App;
