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
  }
    const getRecipe = (e) => {
      const recipeName = e.target.elements.recipeName.value
      e.preventDefault();
console.log(recipeName);
    }
  
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
