import React from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router";

const TopCard = ({ recipe }) => {
  const { image, title, cuisine, likeCount, _id } = recipe;
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm border bg-red-50/80 border-gray-100 border-dashed hover:shadow-xl transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-96 md:h-52 lg:h-46 object-cover"
      />
      <div className="p-3 space-y-2">
        <h2 className="text-xl lg:text-lg font-semibold">{title}</h2>
        <p className="text-sm lg:text-xs text-gray-500">
          Cuisine: <span className="italic text-yellow-400">{cuisine}</span>
        </p>
        <p className="text-sm lg:text-xs text-gray-500 font-semibold flex items-center gap-1">
          <FcLike color="red" /> Likes: {likeCount}
        </p>
        <Link
          to={`/recipes/${_id}`}
          className="btn bg-green-200
         border-green-300 dark:text-black rounded-2xl px-5 hover:text-white hover:bg-green-400"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TopCard;
