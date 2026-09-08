import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const CareMed = () => {
  return (
    <section className="w-full mt-16 py-20 bg-gradient-to-br from-[#fff5f5] to-[#e6f0ff]">
      <motion.div
        initial="hidden"
        animate="visible"
        className="w-[90%] md:w-[80%] mx-auto"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.h1
          className="text-4xl font-bold text-customBlue mb-6"
          variants={fadeInUp}
        >
          About Us
        </motion.h1>

        <motion.p className="mb-6" variants={fadeInUp}>
          <strong>Caremed Connect</strong> is a technology-driven healthcare
          platform dedicated to improving access to quality diagnostic and
          medical services across Nigeria. We partner with accredited hospitals,
          diagnostic centers, and specialist providers to unlock underutilized
          capacity—ensuring patients get the care they need, when they need it.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-customBlue mt-8 mb-2"
          variants={fadeInUp}
        >
          Our Mission
        </motion.h2>
        <motion.p className="mb-4" variants={fadeInUp}>
          To connect individuals and healthcare providers to fast, affordable,
          and high-quality diagnostic and specialty services.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-customBlue mt-8 mb-2"
          variants={fadeInUp}
        >
          Our Vision
        </motion.h2>
        <motion.p className="mb-4" variants={fadeInUp}>
          A healthcare ecosystem where access to timely diagnostics is no longer
          a barrier to quality care.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-customBlue mt-8 mb-2"
          variants={fadeInUp}
        >
          What We Do
        </motion.h2>
        <motion.p className="mb-4" variants={fadeInUp}>
          At Caremed Connect, we make it easier for patients to book essential
          diagnostic tests and medical services—whether it’s a cardiac check,
          imaging study, or lab investigation. Through our platform, we:
        </motion.p>

        <motion.ul className="list-disc list-inside space-y-2 mb-4">
          {[
            "Aggregate available time slots across partner facilities",
            "Offer convenient online or WhatsApp-based booking options",
            "Help reduce waiting times and improve patient satisfaction",
            "Drive revenue for healthcare providers by filling idle capacity",
          ].map((item, index) => (
            <motion.li key={index} custom={index} variants={fadeInUp}>
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.h2
          className="text-2xl font-semibold text-customBlue mt-8 mb-2"
          variants={fadeInUp}
        >
          Who We Serve
        </motion.h2>
        <motion.p className="mb-4" variants={fadeInUp}>
          We serve individuals seeking accessible diagnostics, doctors referring
          patients for investigations, and healthcare facilities looking to
          optimize their services.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-customBlue mt-8 mb-2"
          variants={fadeInUp}
        >
          Why Choose Caremed Connect?
        </motion.h2>
        <motion.ul className="list-disc list-inside space-y-2 mb-6">
          {[
            ["Speed:", "Book and confirm appointments in minutes"],
            ["Quality:", "Access only vetted, trusted providers"],
            ["Convenience:", "Book from anywhere—no queues, no stress"],
            [
              "Partnership:",
              "We work hand-in-hand with healthcare providers to improve efficiency",
            ],
          ].map(([title, text], i) => (
            <motion.li key={i} custom={i} variants={fadeInUp}>
              <strong>{title}</strong> {text}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          className="text-lg font-medium text-center mt-10"
          variants={fadeInUp}
        >
          Whether you're a patient, a clinician, or a facility manager—{" "}
          <span className="text-customBlue font-bold">Caremed Connect</span> is
          your bridge to faster, better healthcare.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default CareMed;
