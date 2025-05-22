import React from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router";

const RecipeCard = ({ recipe }) => {
  const { image, title, likeCount, cuisine, ingredients, _id } = recipe;
  return (
    <div>
      <div className="card bg-white/80 shadow-sm h-full">
        <figure>
          <img
            className="h-96 max-h-60 md:h-52 w-full object-cover rounded-t-lg"
            src={image}
            alt={title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{cuisine}</div>
          </h2>
          <p>{ingredients}</p>
          <div className="card-actions justify-between items-center">
            <div className="flex  items-center gap-1">
              <FcLike /> {likeCount}
            </div>
            <Link
              to={`/recipes/${_id}`}
              className="btn bg-green-200
         border-green-300 rounded-2xl px-5 hover:text-white hover:bg-green-400"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
