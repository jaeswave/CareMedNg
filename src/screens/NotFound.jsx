import React from "react";
import { Link } from "react-router-dom"; // Only if you're using React Router
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#fff5f5] to-[#e6f0ff] px-4 py-16">
      <h1 className="text-[9rem] font-bold text-customBlue mb-4">404</h1>
      <p className="text-xl font-semibold mb-6 text-muted-foreground">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 bg-customBlue text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
      >
        <ArrowLeft size={18} />
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
