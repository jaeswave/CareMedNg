import logo from "../assets/logo-new.png";
import Button from "../components/Button";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import useScreenSize from "../hooks/UseScreenSize";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  useScreenSize(setNavOpen);

  const toggleNav = () => setNavOpen(!navOpen);
  const closeMenu = () => setNavOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="flex h-18 w-full items-center px-6 lg:px-12 justify-between max-w-7xl mx-auto py-3">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="CareMed Connect" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={label}
                to={path}
                className={`text-sm font-semibold transition-colors duration-200 relative group ${
                  isActive ? "text-customBlue" : "text-gray-600 hover:text-customBlue"
                }`}
              >
                {label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-customRed transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://caremedconnect.continuouscare.io/secure/login/auth/?lang=en_US"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-customBlue border border-customBlue rounded-lg hover:bg-customBlue hover:text-white transition-all duration-200"
          >
            Login
          </a>
          <a
            href="https://caremedconnect.continuouscare.io/secure/registration/?lang=en_US"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-customBlue rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-sm"
          >
            Book Now
          </a>
          <button className="text-2xl cursor-pointer lg:hidden text-gray-700" onClick={toggleNav}>
            {navOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white border-t border-gray-100 lg:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  className="text-base font-semibold text-gray-700 hover:text-customBlue transition-colors"
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                <a
                  href="https://caremedconnect.continuouscare.io/secure/login/auth/?lang=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-2.5 rounded-lg border border-customBlue text-customBlue font-semibold text-sm"
                  onClick={closeMenu}
                >
                  Login
                </a>
                <a
                  href="https://caremedconnect.continuouscare.io/secure/registration/?lang=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-2.5 rounded-lg bg-customBlue text-white font-semibold text-sm"
                  onClick={closeMenu}
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
