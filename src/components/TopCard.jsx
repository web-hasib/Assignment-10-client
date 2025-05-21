import React from 'react';
import { FcLike } from 'react-icons/fc';
import { Link } from 'react-router';

const TopCard = ({recipe}) => {
    const { image, title, cuisine, likeCount, _id } = recipe;
    return (
        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 border-dashed hover:shadow-xl transition duration-300">
      <img
        src={image }
        alt={title}
        className="w-full h-52 object-cover"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">Cuisine: <span className='italic text-yellow-400'>{cuisine}</span></p>
        <p className="text-sm text-gray-500 font-semibold flex items-center gap-1"><FcLike color='red' /> Likes: {likeCount}</p>
        <Link
          to={`/recipes/${_id}`}
          className="btn bg-green-200
         border-green-300 rounded-2xl px-5 hover:text-white hover:bg-green-400"
        >
          View Details
        </Link>
      </div>
    </div>
    );
};

export default TopCard;