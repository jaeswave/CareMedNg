import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaTimes, FaWhatsapp, FaTiktok, FaTwitter,
  FaChevronLeft, FaChevronRight,
} from "react-icons/fa";
import Button from "./Button";
import { amuwoGallery, amuwoContact } from "../data";

const SESSION_KEY = "amuwo_popup_seen";

const AmuwoPopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem(SESSION_KEY);
    if (!alreadySeen) {
      const timer = setTimeout(() => setIsOpen(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % amuwoGallery.length);
    }, 3500);
    return () => clearInterval(id);
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const prevSlide = () =>
    setSlide((s) => (s - 1 + amuwoGallery.length) % amuwoGallery.length);
  const nextSlide = () =>
    setSlide((s) => (s + 1) % amuwoGallery.length);

  const close = () => {
    setIsOpen(false);
    sessionStorage.setItem(SESSION_KEY, "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/85 flex items-center justify-center"
          onClick={close}
        >
          {/* Close button — always visible top-right */}
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 z-[300] w-11 h-11 flex items-center justify-center rounded-full bg-white text-gray-800 shadow-xl hover:bg-gray-100 transition-colors text-lg"
          >
            <FaTimes />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full flex flex-col lg:flex-row overflow-hidden"
          >
            {/* LEFT — Full image slideshow */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[50vh] lg:min-h-0">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slide}
                  src={amuwoGallery[slide].src}
                  alt={amuwoGallery[slide].alt}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>

              {/* Prev/Next arrows */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition-all"
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition-all"
              >
                <FaChevronRight />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {amuwoGallery.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setSlide(i)}
                    aria-label={`Image ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === slide ? "bg-white w-6" : "bg-white/40 w-2"
                    }`}
                  />
                ))}
              </div>

              {/* Image counter */}
              <div className="absolute top-4 left-4 bg-black/40 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                {slide + 1} / {amuwoGallery.length}
              </div>
            </div>

            {/* RIGHT — Info panel */}
            <div className="w-full lg:w-[400px] bg-white flex flex-col justify-center p-8 lg:p-10 font-outfit overflow-y-auto">
              <span className="inline-block w-fit text-xs font-semibold px-3 py-1 rounded-full bg-pink-100 text-pink-700 mb-4">
                New Partnership
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                Amuwo Odofin Maternal & Child Centre
              </h2>
              <p className="text-customBlue font-semibold mb-3">
                Cardio-Fetal Diagnostic Service
              </p>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                Advanced diagnostics for a healthier pregnancy — BPP, CTG, ECG,
                Echocardiogram & Paediatric Ultrasound, now closer to every
                mother and child.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                <Link to="/partnerships/amuwo-mcc" onClick={close}>
                  <Button
                    title="See Full Details"
                    className="!bg-customBlue w-full"
                  />
                </Link>
                <a
                 href={amuwoContact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    title="Book on WhatsApp"
                    className="!bg-white !text-green-700 border-2 !border-green-600 hover:!bg-green-600 hover:!text-white w-full flex items-center justify-center gap-2"
                  />
                </a>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <p className="text-xs text-gray-400 mb-3">Follow us</p>
                <div className="flex items-center gap-4 text-xl">
                  <a
                  
                    href="https://www.tiktok.com/@caremed.connect"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="text-gray-400 hover:text-customBlue transition-colors"
                  >
                    <FaTiktok />
                  </a>
                  <a
                  
                    href="https://twitter.com/caremedng"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="text-gray-400 hover:text-customBlue transition-colors"
                  >
                    <FaTwitter />
                  </a>
                  <a
                  
                    href={amuwoContact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="text-gray-400 hover:text-green-600 transition-colors"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AmuwoPopupModal;