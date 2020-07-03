import React from "react";

export default function Recipes(props) {
   
  
    return (
      <div>
        {props.recipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <img src={`https://spoonacular.com/recipeImages/${recipe.id}-312x150.jpg`} alt={recipe.title} />
              <p>{recipe.title}</p>
            </div>
          );
        })}
      </div>
    );
  }