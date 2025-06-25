import React from "react";
import Banner from "../components/Banner";
import { Fade, Zoom } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router";
import TopCard from "../components/TopCard";
import { Helmet } from "react-helmet";
import FAQ from "../components/FAQ";
import FeaturedChefs from "../components/Chefs";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Helmet>
        <title>RecipeBook || Home</title>
      </Helmet>
      <Fade direction="up" triggerOnce cascade damping={2}>
        <div className="pt-2np">
          <Banner></Banner>
        </div>
      </Fade>
      <section>
        <h1 className="text-center py-10 text-3xl text-blue-400 font-bold">
          Top Recipes
        </h1>

        <Zoom>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.map((recipe) => (
              <TopCard key={recipe._id} recipe={recipe}></TopCard>
            ))}
          </div>
        </Zoom>
        <div className="items-center flex justify-center py-10">
          <Link
            to="/allRecipes"
            className="btn btn-soft border-blue-300 rounded-2xl px-7 hover:text-white btn-info"
          >
            Show all
          </Link>
        </div>
      </section>
      <section>
        <Fade>
          <FAQ></FAQ>
        </Fade>
      </section>
      <section>
        <FeaturedChefs></FeaturedChefs>
      </section>
    </div>
  );
};

export default Home;
