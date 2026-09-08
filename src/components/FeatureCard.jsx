// src/components/FeatureCard.js
import { useState } from "react";

const FeatureCard = ({ title, description, Icon, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full h-full bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center text-center h-full">
        {/* Icon container with gradient background on hover */}
        <div
          className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
            isHovered
              ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white"
              : "bg-blue-50 text-blue-500"
          }`}
        >
          <Icon className="w-10 h-10" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-outfit text-gray-800 mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 font-urbanist leading-relaxed flex-grow">
          {description}
        </p>

        {/* Learn more link */}
        <div className="mt-6 w-full">
          <div
            className={`inline-flex items-center text-sm font-semibold transition-all duration-300 ${
              isHovered ? "text-blue-500" : "text-gray-400"
            }`}
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                isHovered ? "translate-x-1" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
