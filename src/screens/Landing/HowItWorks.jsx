import { useState, useEffect } from "react";
import StepCards from "../../components/StepCards";
import { howItWorks } from "../../data";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation trigger on component mount
    setIsVisible(true);

    // Auto-rotate steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % howItWorks.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f7ff] via-[#e6f2ff] to-[#f5f0ff] py-16 relative overflow-hidden font-bold">
      {/* Medical-themed background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30"></div>

        {/* Subtle medical pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Medical cross pattern */}
            <path
              d="M10,45 L20,45 L20,35 L30,35 L30,45 L40,45 L40,55 L30,55 L30,65 L20,65 L20,55 L10,55 Z"
              fill="#3b82f6"
            />
            <path
              d="M60,15 L70,15 L70,25 L80,25 L80,35 L70,35 L70,25 L60,25 Z"
              fill="#3b82f6"
            />
            <path
              d="M80,75 L90,75 L90,85 L80,85 L80,95 L70,95 L70,85 L80,85 Z"
              fill="#8b5cf6"
            />
            <path
              d="M40,80 L50,80 L50,90 L40,90 L40,100 L30,100 L30,90 L40,90 Z"
              fill="#8b5cf6"
            />
          </svg>
        </div>

        {/* Floating circles representing pills/bubbles */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-blue-200/20 blur-sm animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-purple-200/20 blur-sm animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-14 h-14 rounded-full bg-teal-200/20 blur-sm animate-float animation-delay-4000"></div>

        {/* Heartbeat line */}
        <div className="absolute bottom-1/3 left-0 right-0 opacity-5">
          <svg viewBox="0 0 100 10" className="w-full h-4">
            <path
              d="M0,5 C10,0 20,10 30,5 C40,0 50,10 60,5 C70,0 80,10 90,5 L100,5"
              stroke="#3b82f6"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>
      </div>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10% left-5% w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute top-60% right-10% w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute bottom-10% left-20% w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-4000"></div>
      </div>

      <div className="w-[90%] max-w-6xl mx-auto z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold font-outfit mt-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="mt-6 text-xl text-gray-600 font-urbanist max-w-2xl mx-auto leading-relaxed">
            Experience seamless healthcare in three simple steps. Our technology
            makes managing medications easier than ever.
          </p>
        </div>

        {/* Step navigation for mobile */}
        <div className="flex justify-center mb-8 lg:hidden">
          <div className="flex space-x-4">
            {howItWorks.map((step, index) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeStep ? "bg-blue-600 scale-125" : "bg-gray-300"
                }`}
                aria-label={`Go to step ${step.number}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 mt-10 lg:mt-20 w-full">
          {howItWorks.map((step, index) => (
            <div
              key={step.number}
              className={`w-full transition-all duration-500 ${
                index === activeStep
                  ? "lg:scale-110 z-10"
                  : "lg:scale-95 opacity-70"
              } ${
                index < activeStep
                  ? "lg:-translate-x-4"
                  : index > activeStep
                    ? "lg:translate-x-4"
                    : ""
              }`}
            >
              <StepCards
                number={step.number}
                title={step.title}
                description={step.description}
                Icon={step.Icon}
                isActive={index === activeStep}
                onClick={() => setActiveStep(index)}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`flex justify-center mt-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://caremedconnect.continuouscare.io/secure/login/auth/?lang=en_US"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center">
              Get Started Today
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
