import React, { use, useEffect, useState } from "react";


import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const RecipeDetails = () => {
  const { id } = useParams();
//   console.log(id);
const {user}= use(AuthContext)
console.log(user?.email);
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
    if(email == user?.email){
        return 
    }
 else{

     setLikes(likes + 1);
     fetch(`http://localhost:3000/recipes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ likeCount: likes }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
 }
    
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
       <button onClick={handleLike}
        // disabled={email == user?.email}
       className="btn btn-soft border-blue-300 rounded-2xl px-4 py-0 hover:text-white btn-info flex items-center gap-1">
         Like {likes} 
       </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
