import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import RecipeCard from "../components/RecipeCard";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const MyRecipe = () => {
  const { user } = use(AuthContext);
  const data = useLoaderData();
  // console.log(data);
  const myRecipe = data.filter((recipe) => recipe.email === user?.email);
  console.log(myRecipe);
  return (
    <div>
      <Slide>
        <Helmet>
          <title>RecipeBook || My Recipe</title>
        </Helmet>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto p-2 md:p-4">
          {myRecipe.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
          ))}
        </div>
      </Slide>
    </div>
  );
};

export default MyRecipe;
