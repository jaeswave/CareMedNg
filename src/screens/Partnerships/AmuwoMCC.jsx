import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaTimes } from "react-icons/fa";
import Button from "../../components/Button";
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="w-[90%] max-w-5xl mx-auto py-14 grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {amuwoGallery.map((img) => (
          <motion.button
            key={img.src}
            type="button"
            variants={fadeInUp}
            onClick={() => setActiveImage(img)}
            whileHover={{ scale: 1.03 }}
            className="rounded-xl overflow-hidden shadow-md border border-gray-100"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover aspect-[3/4]"
            />
          </motion.button>
        ))}
      </motion.div>

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

export default AmuwoMCC;
