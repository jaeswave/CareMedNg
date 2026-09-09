import { motion } from "framer-motion";

const reasons = [
  {
    icon: "🎯",
    title: "Specialized Focus",
    description:
      "We focus specifically on cardiofetal diagnostics — fetal wellbeing, pregnancy monitoring, and cardiovascular health.",
  },
  {
    icon: "🏥",
    title: "Modern Equipment",
    description:
      "We utilize appropriate diagnostic technology to support quality examinations and reliable clinical decision-making.",
  },
  {
    icon: "👨‍⚕️",
    title: "Multidisciplinary Team",
    description:
      "Cardiologist, Clinical Physiologist, Paediatrician, and Pathologist — all working together to support your care.",
  },
  {
    icon: "📄",
    title: "Doctor-Focused Reporting",
    description:
      "Clear, timely diagnostic reports delivered to your referring clinician to support proper interpretation and management.",
  },
  {
    icon: "🤝",
    title: "Patient-Centred Care",
    description:
      "We understand that medical investigations can feel stressful. We aim to make every experience comfortable and respectful.",
  },
  {
    icon: "📍",
    title: "Accessible Location",
    description:
      "Based at Amuwo Odofin Maternal & Child Centre — bringing quality diagnostics closer to Lagos families.",
  },
];

const stats = [
  { value: "6", label: "Diagnostic Services" },
  { value: "5+", label: "Clinical Specialists" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24/7", label: "WhatsApp Support" },
];

const Why = () => (
  <section className="w-full py-24 bg-gray-50 font-outfit">
    <div className="w-[90%] max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block text-customRed text-sm font-bold uppercase tracking-widest mb-3">
          Why Choose Us
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Why <span className="text-customBlue">Caremed Connect?</span>
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          A specialized diagnostic centre focused on fetal wellbeing, maternal
          support and cardiovascular diagnostics.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group bg-white hover:bg-customBlue rounded-2xl p-6 border border-gray-100 hover:border-customBlue transition-all duration-300"
          >
            <span className="text-3xl mb-4 block">{r.icon}</span>
            <h3 className="font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
              {r.title}
            </h3>
            <p className="text-sm text-gray-500 group-hover:text-blue-100 leading-relaxed transition-colors duration-300">
              {r.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gradient-to-r from-customBlue to-blue-700 rounded-2xl p-8 shadow-xl shadow-customBlue/20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(({ value, label }) => (
            <div key={label} className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {value}
              </div>
              <div className="text-blue-200 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Why;
