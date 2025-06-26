import React, { use, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

import CardForMyRecipe from "../components/CardForMyRecipe";
import EmptyPage from "./EmptyPage";

const MyRecipe = () => {
  const { user } = use(AuthContext);

  const initialData = useLoaderData();
  const [data, setData] = useState(initialData);

  const handleFilter = (id) => {
    // console.log(id);
    const remaining = data.filter((recipe) => recipe._id !== id);
    setData(remaining);
  };

  // console.log(data);
  const myRecipe = data.filter((recipe) => recipe.email === user?.email);
  // console.log(myRecipe);
  return (
    <div>
      <Slide>
        <Helmet>
          <title>RecipeBook || My Recipe</title>
        </Helmet>
        {myRecipe.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto p-2 md:p-4 relative">
            {myRecipe.map((recipe) => (
              <CardForMyRecipe
                key={recipe._id}
                handleFilter={handleFilter}
                recipe={recipe}
              ></CardForMyRecipe>
            ))}
          </div>
        ) : (
          <EmptyPage />
        )}
      </Slide>
    </div>
  );
};

export default MyRecipe;
