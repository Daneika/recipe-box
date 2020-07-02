import React from "react";

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
    const apiCall = await fetch(
      `https://api.spoonacular.com/recipes/search?query=cheese&number=3&apiKey=${process.env.APIKey}`
    );
    const data = await apiCall.json();
    console.log(data.results[0].title);
  };

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
