import React, { useContext, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";
import { FaDollarSign, FaShoppingCart, FaUser, FaList } from "react-icons/fa";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const DashboardHome = () => {
  const { user } = useContext(AuthContext);

  // সব রেসিপি লোড করা
  const { data: allRecipes = [] } = useQuery({
    queryKey: ["all-recipes"],
    queryFn: async () => {
      const res = await fetch(
        "https://recipe-book-server-gold.vercel.app/recipes"
      );
      return res.json();
    },
  });

  // সব ইউজার লোড করা
  const { data: allUsers = [] } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await fetch(
        "https://recipe-book-server-gold.vercel.app/users"
      );
      return res.json();
    },
  });

  // My Recipes বের করা (Logged-in User এর রেসিপি)
  const myRecipes = allRecipes.filter(
    (recipe) => recipe?.email === user?.email
  );
// Pie Chart এর জন্য Cuisine-wise Data তৈরি করা
const categoryData = useMemo(() => {
  const cuisineCount = {};

  allRecipes.forEach(recipe => {
    // যদি cuisine আগে থেকে থাকে, তাহলে count বাড়াবে
    if (cuisineCount[recipe.cuisine]) {
      cuisineCount[recipe.cuisine] += 1;
    } else {
      // না থাকলে নতুন করে 1 set করবে
      cuisineCount[recipe.cuisine] = 1;
    }
  });

  // Object কে Array বানানো Pie Chart এর জন্য
  return Object.entries(cuisineCount).map(([cuisine, count]) => ({
    name: cuisine,
    value: count
  }));
}, [allRecipes]);

  // Pie Chart এর Color Array
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA336A', '#8884D8'];

  return (
    <>
      <div className="p-6 space-y-10">
        <h2 className="text-3xl py-10 pl-1  font-bold mb-6 text-primary text-start ">
          Dashboard Overview
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Revenue */}
          <div className="flex items-center bg-orange-700/70 hover:scale-110 duration-300 p-4 rounded-lg shadow text-gray-800 dark:text-white">
            <FaDollarSign className="text-4xl mr-4" />
            <div>
              <p>Total Revenue</p>
              <p className="text-2xl font-bold">$120</p>
            </div>
          </div>

          {/* Total Recipes */}
          <div className="flex items-center bg-blue-700/70 p-4 rounded-lg shadow text-gray-800 dark:text-white hover:scale-110 duration-300">
            <FaShoppingCart className="text-4xl mr-4" />
            <div>
              <p>Total Recipes</p>
              <p className="text-2xl font-bold">{allRecipes.length}</p>
            </div>
          </div>

          {/* My Recipes */}
          <div className="flex items-center bg-pink-700/70 p-4 rounded-lg shadow text-gray-800 dark:text-white hover:scale-110 duration-300">
            <FaList className="text-4xl mr-4" />
            <div>
              <p>My Recipes</p>
              <p className="text-2xl font-bold">{myRecipes.length}</p>
            </div>
          </div>

          {/* Total Users */}
          <div className="flex items-center bg-green-700/70 p-4 rounded-lg shadow text-gray-800 dark:text-white hover:scale-110 duration-300">
            <FaUser className="text-4xl mr-4" />
            <div>
              <p>Total Users</p>
              <p className="text-2xl font-bold">{allUsers.length}</p>
            </div>
          </div>
        </div>

        {/* Latest 3 Recipes Section */}
        <div>
          <h3 className="text-3xl py-10 pl-1  font-semibold mb-6 text-primary text-start ">
            Latest 3 Recipes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allRecipes.slice(-3).map((recipe) => (
              <div
                key={recipe._id}
                className="relative group bg-base-300 p-4 rounded-2xl shadow-lg transform transition-all duration-300 hover:-rotate-1 hover:scale-110"
              >
                <div className="overflow-visible rounded-xl mb-4">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="h-40 w-full object-cover rounded-xl transform group-hover:scale-120 transition-transform duration-300"
                  />
                </div>

                <h4 className="text-xl font-bold italic mb-2 text-base-content/50">
                  {recipe.title}
                </h4>

                <p className="text-sm text-base-content/70 p-2">
                  {recipe?.instructions?.length > 40
                    ? `${recipe?.instructions.slice(0, 40)}...`
                    : recipe?.instructions}
                </p>

                {/* Bottom Bar Animation */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary group-hover:w-full transition-all duration-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Pie Chart Section */}
        <div>
          <h3 className="text-3xl py-10 pl-1  font-semibold  my-10 text-primary text-start ">
            Recipe Category Distribution
          </h3>

          <div className="w-full h-[400px]">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
