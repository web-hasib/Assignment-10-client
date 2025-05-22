import React from "react";
import { FaEdit } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CardForMyRecipe = ({ recipe,handleFilter }) => {


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
                //   nevigate(-1);
                handleFilter(id);
                }
              });
          }
        });
      };


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
          <div className="flex  items-center justify-end p-2 gap-1">
              <FcLike /> {likeCount}
            </div>
          <div className="card-actions justify-between items-center">

            {/* edit and delete button  */}
            
            <div className="flex  items-center gap-1">
              <Link
                className="btn rounded-2xl  mx-auto px-5 bg-blue-50 hover:bg-blue-400 hover:text-white "
                to={`/update/${recipe._id}`}
              >
                <FaEdit size={25} />
              </Link>
              <button
                className="btn rounded-2xl  mx-auto px-5  bg-blue-50 hover:bg-red-400 hover:text-white "
                onClick={() => {
                    handleDelete(recipe._id);
                }}
              >
                <MdDeleteOutline size={25} />
              </button>
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

export default CardForMyRecipe;
