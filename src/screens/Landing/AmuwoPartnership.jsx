import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
// import { FaWhatsapp, FaPhoneAlt, FaTimes } from "react-icons/fa";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaTimes,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import Button from "../../components/Button";
import { amuwoServices, amuwoGallery, amuwoContact } from "../../data";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const AmuwoPartnership = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#fdf1f5] via-white to-[#eef4ff] font-outfit relative overflow-hidden">
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-pink-100 rounded-full opacity-60 blur-2xl" />
      <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-blue-100 rounded-full opacity-60 blur-2xl" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="w-[90%] max-w-6xl mx-auto relative z-10"
      >
        {/* Section label */}
        <motion.div variants={fadeInUp} className="text-center mb-4">
          <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-pink-100 text-pink-700">
            <span className="w-2 h-2 rounded-full bg-pink-500" />
            Featured Partnership
          </span>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800"
        >
          Amuwo Odofin Maternal &amp; Child Centre
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-center text-customBlue font-semibold mt-1 mb-6"
        >
          Cardio-Fetal Diagnostic Service
        </motion.p>
        <motion.p
          variants={fadeInUp}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Through our partnership with Amuwo Odofin Maternal &amp; Child Centre,
          Caremed Connect brings advanced cardio-fetal diagnostics closer to
          every mother and child — for early insight and better outcomes, every
          step of the way.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: services + CTA */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold text-gray-800 mb-5">
              Our Cardio-Fetal Services
            </h3>
            <ul className="space-y-4 mb-8">
              {amuwoServices.map((s) => (
                <li
                  key={s.title}
                  className="flex items-start gap-4 bg-white/70 rounded-xl p-4 border border-pink-100 shadow-sm"
                >
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-pink-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">{s.title}</p>
                    <p className="text-sm text-gray-600">{s.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/partnerships/amuwo-mcc">
                <Button
                  title="See Full Details"
                  className="!bg-customBlue w-full sm:w-auto"
                />
              </Link>
              <a
                href={amuwoContact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  title="Book on WhatsApp"
                  className="!bg-white !text-pink-600 border-2 !border-pink-500 hover:!bg-pink-500 hover:!text-white w-full sm:w-auto flex items-center gap-2"
                />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-gray-600">
              <a
                href={`tel:${amuwoContact.phone}`}
                className="flex items-center gap-2 hover:text-customBlue"
              >
                <FaPhoneAlt className="text-customBlue" />
                {amuwoContact.phoneDisplay}
              </a>
              <a
                href={amuwoContact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-600"
              >
                <FaWhatsapp className="text-green-600" />
                WhatsApp
              </a>
              <a
                href="https://www.tiktok.com/@caremedng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-customBlue"
                aria-label="Caremed on TikTok"
              >
                <FaTiktok />
                TikTok
              </a>
              <a
                href="https://twitter.com/caremedng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-customBlue"
                aria-label="Caremed on Twitter/X"
              >
                <FaTwitter />
                Twitter
              </a>
            </div>
          </motion.div>

          {/* Right: image gallery */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
            {amuwoGallery.map((img, i) => (
              <motion.button
                key={img.src}
                type="button"
                onClick={() => setActiveImage(img)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`rounded-2xl overflow-hidden shadow-lg border border-white/60 ${
                  i === 0 ? "col-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-6"
            onClick={() => setActiveImage(null)}
          >
            <button
              type="button"
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setActiveImage(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[85vh] max-w-full rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AmuwoPartnership;
