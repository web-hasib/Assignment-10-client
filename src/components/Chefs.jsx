import React from "react";
import { Typewriter } from "react-simple-typewriter";



const cuisines = [
  { name: "Indian", image: "https://i.ibb.co/YZpLMyF/indian.jpg" },
  { name: "Italian", image: "https://i.ibb.co/YRkN3Km/italian.jpg" },
  { name: "Chinese", image: "https://i.ibb.co/MR5dYhY/chinese.jpg" },
  { name: "Mexican", image: "https://i.ibb.co/4Vz1Crc/mexican.jpg" },

];

const FeaturedChefs = () => {
  return (
    <section className="text-center py-10 bg-green-50/50 rounded-2xl">
   
      <h3 className="text-xl text-blue-500 font-semibold">
        <Typewriter
          words={cuisines.name}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h3>

       <h2 className="text-3xl font-bold text-center mb-8">🍲 Explore by Cuisine</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {cuisines.map((cuisine, idx) => (
          <div
            key={idx}
            className="bg-white/80 rounded-t-full p-5 rounded-br-full h-50  w-50  shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
          >
            <img
              src={cuisine.image}
              alt={cuisine.name}
              className="h-32 w-32 rounded-t-full rounded-br-full mx-auto object-cover"
            />
            <div className="p-3 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{cuisine.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedChefs;
