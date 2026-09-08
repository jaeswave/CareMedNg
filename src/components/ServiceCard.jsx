import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "./Button";
import { Link } from "react-router-dom";

const ServiceCard = ({
  badge,
  title,
  description,
  points,
  items,
  buttonText,
  isPrimary,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 120,
        damping: 14,
      }}
      className={`font-outfit border transition-all duration-300 ${
        isPrimary
          ? "border-blue-100 bg-gradient-to-br from-blue-50 to-purple-50"
          : "border-gray-200 bg-white"
      } shadow-lg hover:shadow-xl rounded-2xl p-8`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Status Badge */}
      <div className="mb-6">
        <span
          className={`inline-flex items-center text-sm font-semibold px-4 py-2 rounded-full mb-4 ${
            isPrimary
              ? "bg-blue-100 text-blue-700"
              : "bg-purple-100 text-purple-700"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full mr-2 ${
              isPrimary ? "bg-blue-500" : "bg-purple-500"
            }`}
          ></span>
          {badge}
        </span>

        {/* Title */}
        <h3
          className={`text-2xl font-bold ${
            isPrimary ? "text-blue-700" : "text-gray-800"
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mt-3 leading-relaxed">{description}</p>
      </div>

      {/* Points list (current services) */}
      {points && (
        <ul className="space-y-4 mb-8">
          {points.map((text, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaCheckCircle
                className={`text-lg mt-0.5 flex-shrink-0 ${
                  isPrimary ? "text-blue-600" : "text-purple-600"
                }`}
              />
              <span className="text-gray-700">{text}</span>
            </motion.li>
          ))}
        </ul>
      )}

      {/* Items list (upcoming services) */}
      {items && (
        <ul className="space-y-4 mb-8">
          {items.map((text, i) => (
            <li key={i} className="flex items-start gap-4">
              <div
                className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${
                  isPrimary ? "bg-blue-600" : "bg-purple-600"
                }`}
              />
              <span className="text-gray-700">{text}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA Button */}
      {buttonText && (
        <a
          href="https://caremedconnect.continuouscare.io/secure/login/auth/?lang=en_US"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
              title={buttonText}
              className={`!w-full py-4 rounded-xl font-semibold transition-all ${
                isPrimary
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                  : "bg-gray-100 text-gray-600 cursor-not-allowed"
              } ${isHovered && isPrimary ? "shadow-md" : ""}`}
              disabled={!isPrimary}
            />
          </motion.div>
        </a>
      )}

      {/* Additional info for coming soon */}
      {!isPrimary && (
        <p className="text-center text-gray-500 text-sm mt-4">
          We're working hard to bring this service to you soon
        </p>
      )}
    </motion.div>
  );
};

export default ServiceCard;
