import React, { useState } from "react";

function RecipeCreate({ newRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [data, setData] = useState({ ...initialState });
  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newRecipe(data);
    setData({ ...initialState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                value={data.name}
                required
              ></input>
            </td>
            <td>
              <input
                name="cuisine"
                id="cuisine"
                type="text"
                placeholder="Cuisine"
                onChange={handleChange}
                value={data.cuisine}
                required
              ></input>
            </td>
            <td>
              <input
                name="photo"
                id="photo"
                type="url"
                placeholder="URL"
                onChange={handleChange}
                value={data.photo}
                required
              ></input>
            </td>
            <td>
              <textarea
                name="ingredients"
                id="ingredients"
                placeholder="Ingredients"
                onChange={handleChange}
                value={data.ingredients}
                required
              ></textarea>
            </td>
            <td>
              <textarea
                name="preparation"
                id="preparation"
                placeholder="Preparation"
                onChange={handleChange}
                value={data.preparation}
                required
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
