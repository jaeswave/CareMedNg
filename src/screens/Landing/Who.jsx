import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const audiences = [
  {
    icon: "🤱",
    title: "Expectant Mothers",
    description:
      "BPP, CTG, NST and fetal ultrasound to monitor your pregnancy and your baby's wellbeing — every step of the way.",
    link: "/partnerships/amuwo-mcc",
    cta: "Learn about fetal diagnostics",
    hover: "hover:bg-pink-600 hover:border-pink-600",
  },
  {
    icon: "🫀",
    title: "Cardiac Patients",
    description:
      "ECG, Echocardiogram and cardiac screening for adults and children — know your heart before symptoms appear.",
    link: "/partnerships/amuwo-mcc",
    cta: "View cardiac services",
    hover: "hover:bg-customBlue hover:border-customBlue",
  },
  {
    icon: "👨‍⚕️",
    title: "Referring Doctors",
    description:
      "We work with obstetricians, cardiologists, paediatricians & GPs. Refer patients for BPP, CTG, ECG, Echo and more.",
    link: "/partnerships/amuwo-mcc",
    cta: "Refer a patient",
    hover: "hover:bg-green-600 hover:border-green-600",
  },
  {
    icon: "👶",
    title: "Children & Families",
    description:
      "Paediatric and transfontanelle ultrasound for infants and children. Gentle, accurate, family-centred care.",
    link: "/partnerships/amuwo-mcc",
    cta: "Learn more",
    hover: "hover:bg-purple-600 hover:border-purple-600",
  },
  {
    icon: "🏢",
    title: "Employers & HMOs",
    description:
      "Health screening packages for individuals, families and organisations. Proactive care for your workforce.",
    link: "/contact-us",
    cta: "Get a package",
    hover: "hover:bg-orange-500 hover:border-orange-500",
  },
  {
    icon: "🏥",
    title: "Healthcare Partners",
    description:
      "Clinics and facilities looking to expand diagnostic capacity. Partner with us to serve more lives.",
    link: "/contact-us",
    cta: "Become a partner",
    hover: "hover:bg-customBlue hover:border-customBlue",
  },
];

const Who = () => (
  <section className="w-full py-24 bg-white font-outfit">
    <div className="w-[90%] max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="inline-block text-customRed text-sm font-bold uppercase tracking-widest mb-3">
          Who We Serve
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Diagnostic Care for <span className="text-customBlue">Everyone</span>
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Whether you are an expectant mother, a cardiac patient, a referring
          doctor, or a healthcare partner — we are here for you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {audiences.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`group bg-gray-50 rounded-2xl p-7 border border-gray-100 transition-all duration-300 ${item.hover} flex flex-col`}
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 bg-gray-100 group-hover:bg-white/20 transition-all duration-300">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 group-hover:text-white/80 leading-relaxed mb-5 flex-1 transition-colors duration-300">
              {item.description}
            </p>
            <Link
              to={item.link}
              className="text-xs font-semibold text-customBlue group-hover:text-white/90 transition-colors duration-300"
            >
              {item.cta} →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Who;
