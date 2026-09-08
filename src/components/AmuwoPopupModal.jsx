import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaTimes,
  FaWhatsapp,
  FaTiktok,
  FaTwitter,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Button from "./Button";
import { amuwoGallery, amuwoContact } from "../data";

// Shows once per browser session (sessionStorage) so returning visitors
// browsing between pages aren't interrupted every single time.
// To show it on every single visit instead, delete the sessionStorage lines
// marked below.
const SESSION_KEY = "amuwo_popup_seen";

const AmuwoPopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem(SESSION_KEY); // remove this line to show every visit
    if (!alreadySeen) {
      const timer = setTimeout(() => setIsOpen(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  // Auto-advance the slideshow every 3.5s while the modal is open.
  useEffect(() => {
    if (!isOpen) return;
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % amuwoGallery.length);
    }, 3500);
    return () => clearInterval(id);
  }, [isOpen]);

  const prevSlide = () =>
    setSlide((s) => (s - 1 + amuwoGallery.length) % amuwoGallery.length);
  const nextSlide = () => setSlide((s) => (s + 1) % amuwoGallery.length);

  const close = () => {
    setIsOpen(false);
    sessionStorage.setItem(SESSION_KEY, "true"); // remove this line to show every visit
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/70 flex items-center justify-center p-4"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[70vh] overflow-y-auto grid sm:grid-cols-2"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md hover:bg-gray-100"
            >
              <FaTimes />
            </button>

            <div
              className="relative w-full max-h-[50vh] sm:max-h-none sm:h-[80vh] bg-gray-50 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={slide}
                  src={amuwoGallery[slide].src}
                  alt={amuwoGallery[slide].alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="w-full h-full max-h-[50vh] object-contain sm:max-h-none sm:object-cover"
                />
              </AnimatePresence>

              {/* Prev / Next arrows */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 text-gray-700 shadow hover:bg-white"
              >
                <FaChevronLeft size={12} />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 text-gray-700 shadow hover:bg-white"
              >
                <FaChevronRight size={12} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {amuwoGallery.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setSlide(i)}
                    aria-label={`Go to image ${i + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === slide ? "bg-customBlue w-6" : "bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-center font-outfit">
              <span className="inline-block w-fit text-xs font-semibold px-3 py-1 rounded-full bg-pink-100 text-pink-700 mb-3">
                New Partnership
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                Amuwo Odofin Maternal &amp; Child Centre
              </h2>
              <p className="text-customBlue font-semibold mb-3">
                Cardio-Fetal Diagnostic Service
              </p>
              <p className="text-sm text-gray-600 mb-6">
                Advanced diagnostics for a healthier pregnancy — BPP, CTG, ECG,
                Echocardiogram &amp; Paediatric Ultrasound, now closer to every
                mother and child.
              </p>

              <div className="flex flex-col gap-3">
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

              <div className="flex items-center gap-4 mt-5 text-lg justify-center sm:justify-start">
                <span className="text-xs text-gray-400">Follow us:</span>
                <a
                  href="https://www.tiktok.com/@caremed.connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Caremed on TikTok"
                  className="text-gray-500 hover:text-customBlue"
                >
                  <FaTiktok />
                </a>
                <a
                  href="https://twitter.com/caremedng"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Caremed on Twitter/X"
                  className="text-gray-500 hover:text-customBlue"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AmuwoPopupModal;
