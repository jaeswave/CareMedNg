// src/components/StepCards.js
import React from "react";

const StepCards = ({ number, title, description, Icon, isActive, onClick }) => {
  return (
    <div
      className={`w-full h-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
        isActive ? "shadow-xl border-blue-100" : "hover:shadow-xl"
      }`}
      onClick={onClick}
    >
      <div className={`flex flex-col items-center text-center h-full`}>
        {/* Number indicator with animation */}
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
            isActive
              ? "bg-blue-100 text-blue-600 scale-110"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <span className="text-2xl font-bold">{number}</span>
        </div>

        {/* Icon with color change on active */}
        <div
          className={`mb-6 transition-colors duration-500 ${
            isActive ? "text-blue-500" : "text-gray-400"
          }`}
        >
          <Icon className="w-16 h-16" />
        </div>

        {/* Content */}
        <h3
          className={`text-2xl font-bold mb-4 font-outfit transition-colors duration-500 ${
            isActive ? "text-blue-700" : "text-gray-800"
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-gray-600 font-urbanist leading-relaxed transition-colors duration-500 ${
            isActive ? "text-gray-700" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default StepCards;
