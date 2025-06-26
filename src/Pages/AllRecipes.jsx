import React, { useState } from "react";
import { useLoaderData } from "react-router";
import RecipeCard from "../components/RecipeCard";
import { Slide, Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import EmptyPage from './EmptyPage';

const AllRecipes = () => {
  const initialData = useLoaderData();
  const [data, setData] = useState(initialData);
  const [active, setActive] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

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

  // Filter based on search query
  const filteredData = data.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Helmet>
        <title>RecipeBook || {active}</title>
      </Helmet>
      <div className="flex flex-col items-center py-5 gap-4">

        <div className="flex relative flex-col md:flex-row items-center justify-center w-full">

        {/* Search Box */}
        <div className="flex justify-center items-center py-2">
          <input
            type="text"
            placeholder="Search by recipe name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-72 md:w-96"
          />
        </div>


        {/* Category Filter for sm*/}
        <div className="flex md:hidden justify-center items-center py-3">
          <select
            onChange={(e) => {
              const value = e.target.value;
              setActive(value);
              setSearchQuery(""); // Reset search when changing category
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
            className="px-4 py-2 bg-green-300/50 rounded-lg text-sm md:text-xl md:italic shadow-sm focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
          >
            <option className="bg-green-50/10" value="All">All</option>
            <option className="bg-green-50/10" value="Indian">Indian</option>
            <option className="bg-green-50/10" value="Italian">Italian</option>
            <option className="bg-green-50/10" value="Chinese">Chinese</option>
            <option className="bg-green-50/10" value="Mexican">Mexican</option>
          </select>
        </div>
        {/* Category Filter for md and lg*/}
        <div className="hidden md:flex absolute right-4  justify-center items-center py-3">
          <select
            onChange={(e) => {
              const value = e.target.value;
              setActive(value);
              setSearchQuery(""); // Reset search when changing category
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
            className="px-4 py-2 bg-green-300/50 rounded-lg text-sm md:text-xl md:italic shadow-sm focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
          >
            <option className="bg-green-50/10" value="All">All</option>
            <option className="bg-green-50/10" value="Indian">Indian</option>
            <option className="bg-green-50/10" value="Italian">Italian</option>
            <option className="bg-green-50/10" value="Chinese">Chinese</option>
            <option className="bg-green-50/10" value="Mexican">Mexican</option>
          </select>
        </div>


        </div>


        {/* Total Recipes */}
        <h1 className="text-xl font-bold text-gray-400">
          Total Recipe <span className="text-green-400">{filteredData.length}</span> found
        </h1>
      </div>

      {/* Recipe Cards */}
      <Slide>
          {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto p-2 md:p-4">
           {
             filteredData.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
            ))
           }
        </div>
          ) : (
            <div>

              <EmptyPage/>
              <h1 className="text-center pb-7 text-primary/50">there is mo recipe available named : ({searchQuery})</h1>

            </div>
            
          )}
        
      </Slide>
    </div>
  );
};

export default AllRecipes;
