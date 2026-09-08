import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({ name, location, quote, rating, isActive }) => {
  // Generate a random avatar (you could also add this to your data)
  const avatars = ["👩🏼", "👨🏽", "👩🏽", "👨🏻", "👩🏾"];
  const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-2xl p-6 shadow-lg flex flex-col h-full ${
        isActive ? "border-2 border-blue-400" : "border border-gray-200"
      }`}
      style={{ minWidth: "300px", maxWidth: "350px", margin: "0 12px" }}
    >
      <div className="flex justify-center mb-4">
        <div className="text-4xl mb-2">{randomAvatar}</div>
      </div>
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-xl ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <blockquote className="text-gray-600 italic text-center mb-6 flex-grow">
        "{quote}"
      </blockquote>
      <div className="text-center">
        <div className="text-gray-800 font-semibold">{name}</div>
        <div className="text-gray-500 text-sm">{location}</div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
