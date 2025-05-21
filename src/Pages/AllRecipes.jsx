import React, { useState } from "react";
import { NavLink, useLoaderData } from "react-router";
import RecipeCard from "../components/RecipeCard";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const AllRecipes = () => {
  const initialData = useLoaderData();
  const [data, setData] = useState(initialData);
  const [active , setActive] = useState("All");
  console.log(data);
  const filterItalian = initialData.filter(
    (recipe) => recipe.cuisine == "Italian"
  );
  const filterIndian = initialData.filter(
    (recipe) => recipe.cuisine == "Indian"
  );
  const filterChinese = initialData.filter(
    (recipe) => recipe.cuisine == "Chinese"
  );
  const filterMexican = initialData.filter(
    (recipe) => recipe.cuisine == "Mexican"
  );

    const btnClass = "text-green-500 border-green-300 rounded-2xl px-5 hover:text-gray-50 hover:bg-green-400";
  const activeClass = "bg-green-400 text-white font-semibold italic"; 


  return (
    <div>
         <Helmet>
        <title>RecipeBook || {active}</title>
      </Helmet>
      <div className="flex flex-col items-center py-5 gap-4">
        <div className="flex justify-center items-center py-5 gap-4"> 
          <button
            onClick={() => {
              setData(initialData);
                setActive("All");
            }}
             className={`${btnClass} ${active === "All" ? activeClass : ""}`}
          >
            All
          </button>
          <button
            onClick={() => {
              setData(filterIndian);
                setActive("Indian");
            }}
             className={`${btnClass} ${active=== "Indian" ? activeClass : ""}`}
          >
            Indean
          </button>
          <button
            onClick={() => {
              setData(filterItalian);
                setActive("Italian");
            }}
             className={`${btnClass} ${active === "Italian" ? activeClass : ""}`}
          >
            Italian
          </button>
          <button
            onClick={() => {
              setData(filterChinese);
                setActive("Chinese");
            }}
             className={`${btnClass} ${active === "Chinese" ? activeClass : ""}`}
          >
            Chinese{" "}
          </button>
          <button
            onClick={() => {
              setData(filterMexican);
                setActive("Mexican");
            }}
             className={`${btnClass} ${active === "Mexican" ? activeClass : ""}`}
          >
            Mexican{" "}
          </button>
        </div>
        <h1 className="text-xl font-bold text-gray-400">Total Recipe <span className="text-green-400"> {data.length}</span> found</h1>
       
      </div>
      <Zoom>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto p-2 md:p-4">
          {data.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
          ))}
        </div>
      </Zoom>
    </div>
  );
};

export default AllRecipes;
