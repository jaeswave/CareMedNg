import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaGlobe,
} from "react-icons/fa";
import { amuwoGallery, amuwoContact } from "../../data";

const fetalServices = [
  {
    icon: "🤱",
    title: "Biophysical Profile (BPP) + CTG",
    desc: "Combines ultrasound and cardiotocography to assess 5 key signs of fetal wellbeing — movement, breathing, tone, fluid, and heart rate.",
    tag: "Most Requested",
  },
  {
    icon: "💓",
    title: "Non-Stress Test (NST)",
    desc: "Monitors your baby's heart rate and its response to movement — used when your doctor needs a closer look at fetal wellbeing.",
    tag: null,
  },
  {
    icon: "🔬",
    title: "Fetal & Paediatric Ultrasound",
    desc: "Pregnancy ultrasound, fetal assessment, paediatric ultrasound, and transfontanelle ultrasound performed by trained professionals.",
    tag: null,
  },
];

const cardiacServices = [
  {
    icon: "⚡",
    title: "ECG – Electrocardiogram",
    desc: "Quick, non-invasive recording of your heart's electrical activity. Useful for palpitations, chest discomfort, and routine cardiac assessment.",
    tag: null,
  },
  {
    icon: "🫀",
    title: "Echocardiogram",
    desc: "Ultrasound imaging of the heart — assessing structure, chambers, valves, function, and blood flow. Available for adults and children.",
    tag: null,
  },
  {
    icon: "🛡️",
    title: "Cardiac Screening",
    desc: "For women and men. Know your heart before symptoms appear. Don't wait — protect your future.",
    tag: "Available Now",
  },
];

const AmuwoPartnership = () => {
  const [lightbox, setLightbox] = useState(null);

  const prev = () =>
    setLightbox((i) => (i - 1 + amuwoGallery.length) % amuwoGallery.length);
  const next = () => setLightbox((i) => (i + 1) % amuwoGallery.length);

  return (
    <section className="w-full py-24 bg-gray-50 font-outfit relative overflow-hidden">
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-pink-100/60 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl" />

      <div className="w-[90%] max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 mb-4">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            Featured Partnership · Amuwo Odofin, Lagos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Amuwo Odofin Maternal &amp; Child Centre
          </h2>
          <p className="text-customBlue font-semibold text-lg mb-3">
            Caremed Connect · Cardiofetal Diagnostic Service
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto mb-6">
            Specialized cardiac and fetal diagnostics for mothers, babies,
            children, and adults — bringing accurate, timely care closer to
            every family in Lagos.
          </p>

          {/* Contact strip */}
          <div className="inline-flex flex-wrap justify-center gap-4 bg-white border border-gray-100 rounded-2xl px-6 py-4 shadow-sm text-sm">
            <a
              href={`tel:${amuwoContact.phone}`}
              className="flex items-center gap-2 text-gray-600 hover:text-customBlue transition-colors font-medium"
            >
              <FaPhoneAlt className="text-customBlue" />{" "}
              {amuwoContact.phoneDisplay}
            </a>
            <span className="text-gray-200 hidden sm:block">|</span>
            <a
              href={amuwoContact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors font-medium"
            >
              <FaWhatsapp className="text-green-600" /> WhatsApp
            </a>
            <span className="text-gray-200 hidden sm:block">|</span>
            <a
              href={`mailto:${amuwoContact.email}`}
              className="flex items-center gap-2 text-gray-600 hover:text-customBlue transition-colors font-medium"
            >
              <FaEnvelope className="text-customBlue" /> {amuwoContact.email}
            </a>
            <span className="text-gray-200 hidden sm:block">|</span>
            <span className="flex items-center gap-2 text-gray-500">
              <FaMapMarkerAlt className="text-customRed" />{" "}
              {amuwoContact.address}
            </span>
          </div>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">
          {/* LEFT — Services */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Fetal services */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🤱</span>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Fetal &amp; Pregnancy Diagnostics
              </h3>
            </div>
            <div className="space-y-3 mb-8">
              {fetalServices.map(({ icon, title, desc, tag }) => (
                <div
                  key={title}
                  className="flex gap-4 bg-white rounded-2xl p-5 border border-pink-100 shadow-sm hover:border-pink-300 transition-colors"
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <p className="font-bold text-gray-800 text-sm">{title}</p>
                      {tag && (
                        <span className="text-[10px] font-semibold bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cardiac services */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🫀</span>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Cardiac Diagnostics &amp; Screening
              </h3>
            </div>
            <div className="space-y-3 mb-8">
              {cardiacServices.map(({ icon, title, desc, tag }) => (
                <div
                  key={title}
                  className="flex gap-4 bg-white rounded-2xl p-5 border border-blue-100 shadow-sm hover:border-blue-300 transition-colors"
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <p className="font-bold text-gray-800 text-sm">{title}</p>
                      {tag && (
                        <span className="text-[10px] font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                to="/partnerships/amuwo-mcc"
                className="inline-flex items-center justify-center px-6 py-3 bg-customBlue text-white font-semibold rounded-xl hover:bg-blue-800 transition-all text-sm shadow-md shadow-customBlue/20"
              >
                See Full Details &amp; FAQ →
              </Link>
              <a
                href={amuwoContact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-50 border-2 border-green-500 text-green-700 font-semibold rounded-xl hover:bg-green-500 hover:text-white transition-all text-sm"
              >
                <FaWhatsapp /> Book on WhatsApp
              </a>
            </div>

            {/* Address card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Location &amp; Contact
              </p>
              <div className="space-y-2.5 text-sm">
                <div className="flex items-start gap-2.5 text-gray-600">
                  <FaMapMarkerAlt className="text-customRed mt-0.5 flex-shrink-0" />
                  <span>{amuwoContact.address}</span>
                </div>
                <a
                  href={`tel:${amuwoContact.phone}`}
                  className="flex items-center gap-2.5 text-gray-600 hover:text-customBlue transition-colors"
                >
                  <FaPhoneAlt className="text-customBlue flex-shrink-0" />
                  <span>{amuwoContact.phoneDisplay}</span>
                </a>
                <a
                  href={amuwoContact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-600 hover:text-green-600 transition-colors"
                >
                  <FaWhatsapp className="text-green-600 flex-shrink-0" />
                  <span>{amuwoContact.phoneDisplay} (WhatsApp)</span>
                </a>
                <a
                  href={`mailto:${amuwoContact.email}`}
                  className="flex items-center gap-2.5 text-gray-600 hover:text-customBlue transition-colors"
                >
                  <FaEnvelope className="text-customBlue flex-shrink-0" />
                  <span>{amuwoContact.email}</span>
                </a>
                <div className="flex items-center gap-2.5 text-gray-600">
                  <FaGlobe className="text-customBlue flex-shrink-0" />
                  <span>{amuwoContact.website}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Gallery — click any image to expand
            </p>
            <div className="grid grid-cols-2 gap-3">
              {amuwoGallery.slice(0, 8).map((img, i) => (
                <motion.button
                  key={img.src}
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setLightbox(i)}
                  className={`group rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white ${i === 0 ? "col-span-2" : ""}`}
                >
                  <div className="overflow-hidden relative">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${i === 0 ? "aspect-[16/7]" : "aspect-square"}`}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-semibold bg-black/50 px-3 py-1 rounded-full">
                        View Full
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
            <Link
              to="/partnerships/amuwo-mcc"
              className="block text-center text-sm text-customBlue font-semibold mt-4 hover:underline"
            >
              View all images, FAQs &amp; full details →
            </Link>
          </motion.div>
        </div>

        {/* FOR MOTHERS + FOR DOCTORS */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-pink-50 to-white border border-pink-100 rounded-2xl p-6"
          >
            <span className="text-2xl mb-3 block">🤱</span>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              For Expectant Mothers
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Every pregnancy deserves care you can trust. We monitor two hearts
              because we care about one promise — a healthy outcome. Our
              Cardiofetal Diagnostic Service provides convenient access to the
              investigations your doctor recommends.
            </p>
            <a
              href={amuwoContact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-pink-600 hover:underline"
            >
              <FaWhatsapp /> Book an appointment →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6"
          >
            <span className="text-2xl mb-3 block">👨‍⚕️</span>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              For Referring Doctors
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              We work closely with obstetricians, gynaecologists,
              paediatricians, and cardiologists. Services include BPP + CTG,
              NST, ECG, Echocardiography, Fetal ultrasound, Paediatric
              ultrasound, and Transfontanelle ultrasound. Timely reporting.
              Professional collaboration.
            </p>
            <a
              href={`mailto:${amuwoContact.email}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-customBlue hover:underline"
            >
              <FaEnvelope /> Refer a patient →
            </a>
          </motion.div>
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-white text-gray-800 shadow-xl hover:bg-gray-100 transition-all text-lg z-10"
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white transition-all"
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={lightbox}
                src={amuwoGallery[lightbox].src}
                alt={amuwoGallery[lightbox].alt}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white transition-all"
              aria-label="Next"
            >
              <FaChevronRight />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white/50 text-xs mb-2">
                {amuwoGallery[lightbox]?.alt}
              </p>
              <div className="flex gap-2 justify-center">
                {amuwoGallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightbox(i);
                    }}
                    className={`h-1.5 rounded-full transition-all ${i === lightbox ? "bg-white w-5" : "bg-white/30 w-1.5"}`}
                    aria-label={`Image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AmuwoPartnership;
