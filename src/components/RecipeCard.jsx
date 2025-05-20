import React from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router";

const RecipeCard = ({recipe}) => {
    const {image,title,likeCount,cuisine,ingredients,_id} = recipe;
  return (
    <div>
      <div className="card bg-white/80 shadow-sm">
        <figure>
          <img
            src={image}
            alt={title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{cuisine}</div>
          </h2>
          <p>
           {ingredients}
          </p>
          <div className="card-actions justify-between items-center">
            <div className="flex  items-center gap-1">
                <FcLike /> {likeCount}</div>
            <Link to={`/recipes/${_id}`}  className="btn btn-soft border-blue-300 rounded-2xl px-4 py-0 hover:text-white btn-info ">Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
