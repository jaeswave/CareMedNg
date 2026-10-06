import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaTimes } from "react-icons/fa";
import Button from "../../components/Button";
import { QRCodeSVG } from "qrcode.react";

import {
  amuwoServices,
  amuwoWhyItMatters,
  amuwoGallery,
  amuwoContact,
  amuwoBppReasons,
  amuwoBppAssessment,
  amuwoBppScoring,
  amuwoUrgentSigns,
} from "../../data";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const SectionCard = ({ title, children, className = "" }) => (
  <motion.div
    variants={fadeInUp}
    className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 ${className}`}
  >
    <h3 className="text-xl font-bold text-customBlue mb-4">{title}</h3>
    {children}
  </motion.div>
);

const AmuwoMCC = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="w-full mt-16 font-outfit">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#fdf1f5] via-white to-[#eef4ff] py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="w-[90%] max-w-5xl mx-auto text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-pink-100 text-pink-700 mb-4"
          >
            Public-Private Partnership
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-5xl font-bold text-gray-800 mb-3"
          >
            Amuwo Odofin Maternal &amp; Child Centre
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-customBlue font-semibold mb-6"
          >
            Cardio-Fetal Diagnostic Service
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Advanced diagnostics for a healthier pregnancy and a stronger
            tomorrow. Two hearts, one promise: safe, reliable, compassionate
            care for mothers and children.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={amuwoContact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title="Book on WhatsApp"
                className="!bg-green-600 hover:!bg-green-700 flex items-center gap-2"
              />
            </a>
            <a href={`tel:${amuwoContact.phone}`}>
              <Button
                title={`Call ${amuwoContact.phoneDisplay}`}
                className="!bg-white !text-customBlue border-2 !border-customBlue"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Gallery */}
      <div className="w-full py-16 bg-gray-50">
        <div className="w-[90%] max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-customRed text-sm font-bold uppercase tracking-widest mb-2">
              Gallery
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Our Services in Pictures
            </h2>
            <p className="text-gray-500 text-sm">
              Click any image to view full screen
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center"
          >
            {amuwoGallery.map((img, i) => (
              <motion.button
                key={img.src}
                type="button"
                variants={fadeInUp}
                onClick={() => setLightbox(i)}
                whileHover={{ scale: 1.02 }}
                className="group rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white w-full"
              >
                {/* Fixed aspect ratio box — all images same size */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-semibold bg-black/50 px-3 py-1 rounded-full transition-opacity">
                      View Full
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs text-gray-500 leading-snug line-clamp-2 text-center">
                    {img.alt}
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="w-full py-16 bg-white">
        <div className="w-[90%] max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-customRed text-sm font-bold uppercase tracking-widest mb-3">
              Scan & Share
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Share This Page
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Scan the QR code below to open this page on your phone, or share
              it with a patient, family member, or colleague.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Main page QR */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
              <QRCodeSVG
                value="https://www.caremedng.com/partnerships/amuwo-mcc"
                size={150}
                bgColor="#ffffff"
                fgColor="#0a2463"
                level="H"
                includeMargin={true}
              />
              <h3 className="font-bold text-gray-900 mt-4 mb-1">
                Full Service Page
              </h3>
              <p className="text-xs text-gray-500">
                Scan to view all our cardiofetal diagnostic services
              </p>
              <a
                href="https://www.caremedng.com/partnerships/amuwo-mcc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-xs text-customBlue font-semibold hover:underline"
              >
                www.caremedng.com
              </a>
            </div>

            {/* WhatsApp booking QR */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
              <QRCodeSVG
                value="https://wa.me/2348077779098?text=Hello%2C%20I%27d%20like%20to%20book%20a%20BPP%20appointment%20at%20Amuwo%20MCC"
                size={150}
                bgColor="#ffffff"
                fgColor="#16a34a"
                level="H"
                includeMargin={true}
              />
              <h3 className="font-bold text-gray-900 mt-4 mb-1">
                Book via WhatsApp
              </h3>
              <p className="text-xs text-gray-500">
                Scan to open WhatsApp and book your BPP appointment directly
              </p>
              <span className="mt-3 text-xs text-green-700 font-semibold">
                08077779098
              </span>
            </div>

            {/* BPP Leaflet QR */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
              <QRCodeSVG
                value="https://www.caremedng.com/partnerships/amuwo-mcc#bpp-leaflet"
                size={150}
                bgColor="#ffffff"
                fgColor="#1a3a7c"
                level="H"
                includeMargin={true}
              />
              <h3 className="font-bold text-gray-900 mt-4 mb-1">BPP Leaflet</h3>
              <p className="text-xs text-gray-500">
                Scan to read our Biophysical Profile patient information leaflet
              </p>
              <span className="mt-3 text-xs text-customBlue font-semibold">
                Patient Information
              </span>
            </div>
          </div>

          {/* Print tip */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
            <p className="text-sm text-yellow-800">
              💡 <strong>Tip for the clinic:</strong> Print these QR codes and
              display them at reception, on leaflets, or on notice boards so
              patients can easily access booking and information from their
              phones.
            </p>
          </div>
        </div>
      </div>

      {/* Services + Why it matters */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="w-[90%] max-w-5xl mx-auto pb-14 grid md:grid-cols-2 gap-8"
      >
        <SectionCard title="Our Cardio-Fetal Diagnostic Services">
          <ul className="space-y-3">
            {amuwoServices.map((s) => (
              <li key={s.title}>
                <p className="font-semibold text-gray-800">{s.title}</p>
                <p className="text-sm text-gray-600">{s.description}</p>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Why It Matters">
          <ul className="space-y-3">
            {amuwoWhyItMatters.map((w) => (
              <li key={w.title}>
                <p className="font-semibold text-gray-800">{w.title}</p>
                <p className="text-sm text-gray-600">{w.description}</p>
              </li>
            ))}
          </ul>
        </SectionCard>
      </motion.div>

      {/* Biophysical Profile explainer */}
      <div className="bg-gray-50 py-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="w-[90%] max-w-5xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center"
          >
            Understanding the Biophysical Profile (BPP)
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-gray-600 max-w-2xl mx-auto mb-10"
          >
            A simple, painless test that checks your baby's health and
            well-being during pregnancy. It combines an ultrasound scan with a
            Non-Stress Test (NST)/Cardiotocography (CTG) to assess how well your
            baby is doing inside the womb.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            <SectionCard title="Why might my doctor request a BPP?">
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                {amuwoBppReasons.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </SectionCard>

            <SectionCard title="What does the test assess?">
              <p className="text-sm text-gray-600 mb-3">
                The Biophysical Profile evaluates five important signs of your
                baby's health, each scored out of 2, for a total score out of
                10:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                {amuwoBppAssessment.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </SectionCard>

            <SectionCard title="Understanding your results">
              <p className="text-sm text-gray-600 mb-3">
                Your doctor will explain your results. Generally:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                {amuwoBppScoring.map((s) => (
                  <li key={s.range}>
                    <span className="font-semibold text-customBlue">
                      {s.range}:
                    </span>{" "}
                    {s.meaning}
                  </li>
                ))}
              </ul>
            </SectionCard>

            <SectionCard
              title="Is the test safe? How should I prepare?"
              className="border-pink-100"
            >
              <p className="text-sm text-gray-600 mb-3">
                Yes. The Biophysical Profile uses ultrasound and external fetal
                heart monitoring — no radiation, no injections, and no pain, for
                either mother or baby. The test usually takes 30–60 minutes.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Eat normally unless your doctor advises otherwise</li>
                <li>Drink water before your appointment</li>
                <li>Wear comfortable two-piece clothing</li>
                <li>Arrive on time for your scheduled appointment</li>
                <li>Bring your antenatal card or referral form</li>
              </ul>
            </SectionCard>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold text-red-600 mb-3">
              When should I seek medical attention immediately?
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Do not wait for your next appointment if you notice:
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside text-sm text-gray-700">
              {amuwoUrgentSigns.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="mt-4 font-semibold text-red-600">
              Please visit the hospital immediately.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact / CTA */}
      <div className="py-16 bg-gradient-to-r from-customBlue to-blue-600">
        <div className="w-[90%] max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Book Your Cardio-Fetal Diagnostic Appointment Today
          </h2>
          <p className="text-blue-100 mb-8">{amuwoContact.address}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={amuwoContact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title="Chat on WhatsApp"
                className="!bg-white !text-customBlue"
              />
            </a>
            <a href={`tel:${amuwoContact.phone}`}>
              <Button
                title={`Call ${amuwoContact.phoneDisplay}`}
                className="!bg-transparent border-2 !border-white"
              />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
            <span className="flex items-center gap-2">
              <FaPhoneAlt /> {amuwoContact.phoneDisplay}
            </span>
            <span className="flex items-center gap-2">
              <FaWhatsapp /> WhatsApp
            </span>
            <a
              href={`mailto:${amuwoContact.email}`}
              className="flex items-center gap-2 hover:underline"
            >
              <FaEnvelope /> {amuwoContact.email}
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {/* Lightbox — centered popup, not fullscreen */}
      <AnimatePresence>
        {activeImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-lg mx-auto"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-all text-sm"
                aria-label="Close"
              >
                <FaTimes />
              </button>

              {/* Prev button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(
                    (i) => (i - 1 + amuwoGallery.length) % amuwoGallery.length,
                  );
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-all"
                aria-label="Previous"
              >
                <FaChevronLeft />
              </button>

              {/* Image — constrained height so it never takes over screen */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={lightbox}
                  src={amuwoGallery[lightbox].src}
                  alt={amuwoGallery[lightbox].alt}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="w-full max-h-[60vh] object-contain bg-gray-50"
                />
              </AnimatePresence>

              {/* Next button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((i) => (i + 1) % amuwoGallery.length);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-all"
                aria-label="Next"
              >
                <FaChevronRight />
              </button>

              {/* Caption + dots */}
              <div className="px-4 py-3 bg-white border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center mb-2 line-clamp-1">
                  {amuwoGallery[lightbox]?.alt}
                </p>
                <div className="flex justify-center gap-1.5">
                  {amuwoGallery.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setLightbox(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === lightbox
                          ? "bg-customBlue w-4"
                          : "bg-gray-300 w-1.5"
                      }`}
                      aria-label={`Image ${i + 1}`}
                    />
                  ))}
                </div>
                <p className="text-center text-xs text-gray-300 mt-1">
                  {activeImage + 1} / {amuwoGallery.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <AnimatePresence>
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
      </AnimatePresence> */}
    </section>
  );
};

export default AmuwoMCC;
