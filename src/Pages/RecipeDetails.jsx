import React, { use, useState } from "react";

import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

const RecipeDetails = () => {
  const { id } = useParams();
  const nevigate = useNavigate();
  //   console.log(id);
  const { user } = use(AuthContext);
  const userEmail = user?.email;
  const {
    image,
    title,
    ingredients,
    instructions,
    cuisine,
    prepTime,
    categories,
    likeCount,
    email,
  } = useLoaderData();

  const [likes, setLikes] = useState(likeCount);

  const handleLike = () => {
    if ( user && email == userEmail ) {
      return;
    } else {
      setLikes(likes + 1);
      fetch(`http://localhost:3000/recipes/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ likeCount: likes }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/recipes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              nevigate(-1);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="p-6 max-w-7xl mx-auto rounded-lg space-y-6">
        <div>
            {
                likes > 0 && <div className="text-center text-xl font-bold text-pink-300">
                    ({likes}) people interested in this recipe
                </div>
            }
        </div>
        <img
          src={image}
          alt={title}
          className="w-full h-64 md:h-[600px] object-cover rounded-md"
        />
        <h2 className="text-3xl font-bold">{title}</h2>
        <p>
          <strong>Cuisine:</strong> {cuisine}
        </p>
        <p>
          <strong>Preparation Time:</strong> {prepTime} mins
        </p>
        <div>
          <strong>Categories:</strong>
          <ul className="list-disc list-inside pl-2">
            {categories.map((cat, i) => (
              <li key={i}>{cat}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Ingredients</h3>
          <p>{ingredients}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Instructions</h3>
          <p>{instructions}</p>
        </div>

        {user && userEmail == email ? (
          <div className="flex items-center gap-1 justify-around">
            <p className="text-gray-500 font-bold">Like count : {likes}</p>
            <Link
              className="btn rounded-full mx-auto py-7 bg-blue-50 hover:bg-blue-400 hover:text-white "
              to={`/update/${id}`}
            >
              <FaEdit size={25} />
            </Link>
            <button
              className="btn rounded-full mx-auto py-7 bg-blue-50 hover:bg-red-400 hover:text-white "
              onClick={() => handleDelete(id)}
            >
              <MdDeleteOutline size={25} />
            </button>
          </div>
        ) : (
         <div className="flex items-center gap-5">
           <button
            onClick={handleLike}
            // disabled={email == user?.email}
            className="btn btn-soft border-blue-300 rounded-2xl px-4 py-0 hover:text-white btn-info flex items-center gap-1"
          >
            Like {likes}
          </button>
          <button className="btn btn-soft border-blue-300 rounded-2xl px-4 py-0 hover:text-white btn-info flex items-center gap-1">
            add to wishList
          </button>
         </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
