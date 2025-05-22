import React from "react";
import { useNavigate } from "react-router";
import { Typewriter } from "react-simple-typewriter";



const cuisines = [
  { name: "Indian", image: "https://i.ibb.co/kTpFYmx/indea.jpg" },
  { name: "Italian", image: "https://i.ibb.co/zV5DrGSY/itali.jpg" },
  { name: "Chinese", image: "https://i.ibb.co/27KYSjwb/china.jpg" },
  { name: "Mexican", image: "https://i.ibb.co/LdmKPqpj/mexico.jpg" },
];

const FeaturedChefs = () => {
  const nevigate = useNavigate();
  return (
    <section className="text-center py-10  rounded-2xl">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
        {" "}
        Explore Our Cuisine
      </h2>
      <h3 className="text-xl text-blue-500 font-semibold italic bg-white/60 mb-8 inline-block p-2 rounded-full shadow-md">
        <Typewriter
          words={[
            "For You",
            "For Your Family",
            "For Your Friends",
            "For Your Guests",
            "For Your Loved Ones",
            "For Your Special Occasions",
            "For Your Celebrations",
            "For Inthusiast",
            "For EveryOne",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {cuisines.map((cuisine, idx) => (
          <div
            onClick={() => {
              nevigate("/allRecipes");
            }}
            key={idx}
            className="bg-white/80 rounded-t-full p-5 rounded-br-full h-50  w-50  shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer m-2 mx-auto"
          >
            <img
              src={cuisine.image}
              alt={cuisine.name}
              className="h-32 w-32 rounded-t-full rounded-br-full mx-auto object-cover"
            />
            <div className="p-3 text-center">
              <h3 className="text-xl font-semibold text-gray-700">
                {cuisine.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedChefs;
