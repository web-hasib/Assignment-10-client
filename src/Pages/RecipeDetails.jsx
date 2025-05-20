import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { useLoaderData, useParams } from "react-router";

const RecipeDetails = () => {
  const { id } = useParams();
  console.log(id);
  const {
    image,
    title,
    ingredients,
    instructions,
    cuisine,
    prepTime,
    categories,
    likeCount,
    email,
  } = useLoaderData();

  const [likes, setLikes] = useState(likeCount);

  const handleLike = () => {
    setLikes(likes + 1);
    // Optionally: update DB here with a PUT/PATCH request
  };

  return (
    <div>
      <div className="p-6 max-w-7xl mx-auto rounded-lg space-y-6">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-md"
        />
        <h2 className="text-3xl font-bold">{title}</h2>
        <p>
          <strong>Cuisine:</strong> {cuisine}
        </p>
        <p>
          <strong>Preparation Time:</strong> {prepTime} mins
        </p>
        <div>
          <strong>Categories:</strong>
          <ul className="list-disc list-inside pl-2">
            {categories.map((cat, i) => (
              <li key={i}>{cat}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Ingredients</h3>
          <p>{ingredients}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Instructions</h3>
          <p>{instructions}</p>
        </div>
        <button 
          onClick={handleLike}
          className="bg-blue-100 hover:bg-pink-600 text-white px-4 py-2 rounded"
        >
           Like ({likes})
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
