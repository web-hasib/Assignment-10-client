import React, { useState } from "react";
import {  useLoaderData } from "react-router";
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

  


  return (
    <div>
         <Helmet>
        <title>RecipeBook || {active}</title>
      </Helmet>
      <div className="flex flex-col items-center py-5 gap-4">
        
        <div className="flex justify-center items-center py-5 ">
  <select
    onChange={(e) => {
      const value = e.target.value;
      setActive(value);
      switch (value) {
        case "All":
          setData(initialData);
          break;
        case "Indian":
          setData(filterIndian);
          break;
        case "Italian":
          setData(filterItalian);
          break;
        case "Chinese":
          setData(filterChinese);
          break;
        case "Mexican":
          setData(filterMexican);
          break;
        default:
          setData(initialData);
      }
    }}
    value={active}
    className="px-4 py-2 bg-green-200 rounded-lg text-sm md:text-xl md:italic shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option className="bg-green-50" value="All">All</option>
    <option className="bg-green-50" value="Indian">Indian</option>
    <option className="bg-green-50" value="Italian">Italian</option>
    <option className="bg-green-50" value="Chinese">Chinese</option>
    <option className="bg-green-50" value="Mexican">Mexican</option>
  </select>
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
