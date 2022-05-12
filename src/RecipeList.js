import React from "react";

function RecipeList({ recipes, setRecipes }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  function deleteRecipe(event) {
    const deleteName = event.target.parentNode.parentNode.firstChild.innerHTML;
    const newList = recipes.filter((recipe) => recipe.name !== deleteName);
    setRecipes(newList);
  }

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr className="noColor">
            <th>Name</th>
            <th>Cuisine</th>
            <th>photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => {
            return (
              <tr key={index}>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td>
                  <img src={recipe.photo}></img>
                </td>
                <td className="content_td">
                  <p>{recipe.ingredients}</p>
                </td>
                <td className="content_td">
                  <p>{recipe.preparation}</p>
                </td>
                <td>
                  <button name="delete" onClick={deleteRecipe}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
