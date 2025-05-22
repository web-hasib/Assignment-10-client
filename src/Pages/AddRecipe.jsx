import React, { use } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const AddRecipe = () => {
  const navigate = useNavigate();
  const {user}= use(AuthContext)
  const email = user?.email || '';
  // console.log(user.email);
  


  const handleAddRecipe = (e) => {
    e.preventDefault();

    const form = e.target;
    const recipe = {
      image: form.image.value,
      title: form.title.value,
      ingredients: form.ingredients.value,
      instructions: form.instructions.value,
      cuisine: form.cuisine.value,
      prepTime: form.prepTime.value,
      categories: Array.from(form.categories)
        .filter((cat) => cat.checked)
        .map((cat) => cat.value),
      likeCount: 0,
      email:email,


      
    };

    // Replace with your backend call
    // console.log("New Recipe:", recipe);
    fetch("http://localhost:3000/recipes",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    }).then((res) => res.json())
    .then((data) => { 
      // console.log ( 'from server', data);
      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Recipe added successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        form.reset();
        navigate("/myRecipes");
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to add recipe.",
          icon: "error",
          confirmButtonText: "OK",
        });
      } 
    })



  };

  return (
    <Slide>
       <Helmet>
        <title>RecipeBook || Add new </title>
      </Helmet>

    <div className="p-6 md:p-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl text-blue-400  font-bold">Add New Recipe</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Fill in the form below to share your recipe with others.
        </p>
      </div>

      <form onSubmit={handleAddRecipe} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="label font-bold text-gray-400">Image URL</label>
            <input type="text" name="image" className="input input-bordered border-gray-100 w-full" placeholder="https://..." required />
          </div>
          <div>
            <label className="label font-bold text-gray-400">Title</label>
            <input type="text" name="title" className="input input-bordered border-gray-100  w-full" placeholder="Delicious Pasta" required />
          </div>
          <div>
            <label className="label font-bold text-gray-400">Ingredients</label>
            <textarea name="ingredients" rows="4" className="textarea border-gray-100  textarea-bordered w-full" placeholder="List ingredients..." required />
          </div>
          <div>
            <label className="label font-bold text-gray-400">Instructions</label>
            <textarea name="instructions" rows="4" className="textarea border-gray-100  textarea-bordered w-full" placeholder="Cooking instructions..." required />
          </div>
          <div>
            <label className="label font-bold text-gray-400">Cuisine Type</label>
            <select name="cuisine" className="select select-bordered border-gray-100  w-full" required>
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
            <input type="number" name="prepTime" className="input border-gray-100  input-bordered w-full" placeholder="e.g., 30" required />
          </div>
        </div>

        <div>
          <label className="label font-bold text-gray-400">Categories</label>
          <div className="flex flex-wrap gap-4 text-gray-600 font-semibold">
            {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map((cat) => (
              <label key={cat} className="flex items-center  gap-2">
                <input type="checkbox" name="categories" value={cat} className="checkbox text-blue-300" />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <input type="hidden" name="likeCount" value="0" />

        <button type="submit" className="mt-10 btn w-full btn-soft border-blue-300 rounded-2xl px-7 hover:text-white btn-info">
          Add Recipe
        </button>
      </form>
    </div>
    </Slide>
  );
};

export default AddRecipe;
