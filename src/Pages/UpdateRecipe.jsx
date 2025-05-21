import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateRecipe = () => {
    const recipe = useLoaderData();
    const nevigate = useNavigate();
    const handleUpdateRecipe=(e)=>{
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const ingredients = form.ingredients.value;
        const instructions = form.instructions.value;
        const cuisine = form.cuisine.value;
        const prepTime = form.prepTime.value;
        const categories = Array.from(form.categories).filter((cat) => cat.checked).map((cat) => cat.value);
        const likeCount = recipe.likeCount;
        const id = recipe._id;
        const email = recipe.email;

        const updatedRecipe = {
            image,
            title,
            ingredients,
            instructions,
            cuisine,
            prepTime,
            categories,
            likeCount,
            email
        };
        console.log(updatedRecipe);

        fetch(`http://localhost:3000/recipes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedRecipe)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
              
              Swal.fire({
  position: "top-end",
  icon: "success",
  title: `Recipe updated successfully`,
  text: "Your recipe has been updated.",
  showConfirmButton: false,
  timer: 1500
});
              
                form.reset();
                nevigate(-1);
            }
        })
    }
    return (
        <div>
            <div className="p-6 md:p-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Update Recipe</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Update your recipe details below.
        </p>
      </div>

      <form onSubmit={handleUpdateRecipe} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="label font-bold text-gray-400">Image URL</label>
            <input
              type="text"
              name="image"
              defaultValue={recipe.image}
              className="input input-bordered border-gray-100 w-full"
              required
            />
          </div>
          <div>
            <label className="label font-bold text-gray-400">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={recipe.title}
              className="input input-bordered border-gray-100 w-full"
              required
            />
          </div>
          <div>
            <label className="label font-bold text-gray-400">Ingredients</label>
            <textarea
              name="ingredients"
              rows="4"
              defaultValue={recipe.ingredients}
              className="textarea border-gray-100 textarea-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label font-bold text-gray-400">Instructions</label>
            <textarea
              name="instructions"
              rows="4"
              defaultValue={recipe.instructions}
              className="textarea border-gray-100 textarea-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label font-bold text-gray-400">Cuisine Type</label>
            <select
              name="cuisine"
              defaultValue={recipe.cuisine}
              className="select select-bordered border-gray-100 w-full"
              required
            >
              <option value="">Select</option>
              <option value="Italian">Italian</option>
              <option value="Mexican">Mexican</option>
              <option value="Indian">Indian</option>
              <option value="Chinese">Chinese</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div>
            <label className="label font-bold text-gray-400">Preparation Time (minutes)</label>
            <input
              type="number"
              name="prepTime"
              defaultValue={recipe.prepTime}
              className="input border-gray-100 input-bordered w-full"
              required
            />
          </div>
        </div>

        <div>
          <label className="label font-bold text-gray-400">Categories</label>
          <div className="flex flex-wrap gap-4 text-gray-600 font-semibold">
            {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="categories"
                  value={cat}
                  defaultChecked={recipe.categories.includes(cat)}
                  className="checkbox text-blue-300"
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

       

        <button
          type="submit"
          className="mt-10 btn w-full btn-soft border-blue-300 rounded-2xl px-7 hover:text-white btn-info"
        >
          Update Recipe
        </button>
      </form>
    </div>
        </div>
    );
};

export default UpdateRecipe;