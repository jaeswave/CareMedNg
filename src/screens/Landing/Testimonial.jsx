import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "../../components/TestimonialCard";
import { testimonials } from "../../data";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0); // 0: no direction, 1: forward, -1: backward

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Animation variants for framer-motion
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="w-full min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white to-indigo-100/70"></div>

        {/* Medical icons pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Medical cross icons */}
            <path
              d="M10,10 L14,10 L14,6 L18,6 L18,10 L22,10 L22,14 L18,14 L18,18 L14,18 L14,14 L10,14 Z"
              fill="#3b82f6"
            />
            <path
              d="M80,20 L84,20 L84,24 L88,24 L88,28 L84,28 L84,24 L80,24 Z"
              fill="#3b82f6"
            />
            <path
              d="M70,70 L74,70 L74,74 L78,74 L78,78 L74,78 L74,74 L70,74 Z"
              fill="#6366f1"
            />
            <path
              d="M30,80 L34,80 L34,84 L38,84 L38,88 L34,88 L34,84 L30,84 Z"
              fill="#6366f1"
            />
          </svg>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-blue-200/30"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full bg-indigo-200/30"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-blue-100/40"></div>

        {/* Quote marks */}
        <div
          className="absolute top-1/4 left-1/4 opacity-5 text-blue-300"
          style={{ fontSize: "15rem" }}
        >
          "
        </div>
        <div
          className="absolute bottom-1/4 right-1/4 opacity-5 text-indigo-300"
          style={{ fontSize: "15rem" }}
        >
          "
        </div>
      </div>

      <div className="w-[90%] mx-auto max-w-4xl z-10 px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 sm:text-5xl"
          >
            What Our Patients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Real experiences from real people who have trusted us with their
            healthcare needs
          </motion.p>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Previous button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md transition-all hover:scale-110 md:-translate-x-6 md:p-3 z-20"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5 text-gray-700 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Testimonial card container */}
          <div className="w-full max-w-2xl mx-4 h-96 flex items-center justify-center overflow-hidden">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full absolute"
              >
                <TestimonialCard
                  name={testimonials[currentIndex].name}
                  location={testimonials[currentIndex].location}
                  quote={testimonials[currentIndex].quote}
                  rating={testimonials[currentIndex].rating}
                  isActive={true}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md transition-all hover:scale-110 md:translate-x-6 md:p-3 z-20"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5 text-gray-700 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
