// src/components/AudienceCard.js
import React from "react";

const AudienceCard = ({ Icon, title, description, isActive, index }) => {
  const gradientColors = [
    "from-blue-500 to-purple-500",
    "from-teal-500 to-blue-500",
    "from-purple-500 to-pink-500",
    "from-green-500 to-teal-500",
    "from-orange-500 to-red-500",
    "from-pink-500 to-red-500",
  ];

  const colorIndex = index % gradientColors.length;
  const gradient = gradientColors[colorIndex];

  return (
    <div
      className={`w-full h-full bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-500 transform ${
        isActive
          ? "-translate-y-2 shadow-xl border-blue-100"
          : "hover:-translate-y-1 hover:shadow-xl"
      }`}
    >
      <div className="flex flex-col items-center text-center h-full">
        {/* Icon container with gradient background */}
        <div
          className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
            isActive
              ? `bg-gradient-to-br ${gradient} text-white`
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <Icon className="w-10 h-10" />
        </div>

        {/* Title */}
        <h3
          className={`text-xl font-bold font-outfit mb-4 transition-colors duration-500 ${
            isActive ? "text-blue-700" : "text-gray-800"
          }`}
        >
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
              isActive ? "text-blue-500" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                isActive ? "translate-x-1" : ""
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

export default AudienceCard;
