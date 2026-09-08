import { whyCaremed } from "../../data";
import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Patients Served", color: "text-customBlue" },
  { value: "500+", label: "Healthcare Providers", color: "text-customRed" },
  { value: "98%", label: "Satisfaction Rate", color: "text-customBlue" },
  { value: "24/7", label: "Support Available", color: "text-customRed" },
];

const WhyCaremed = () => {
  return (
    <section className="w-full py-24 bg-white font-outfit">
      <div className="w-[90%] max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-customRed text-sm font-bold uppercase tracking-widest mb-3">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Healthcare That Works <span className="text-customBlue">For You</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We built CareMed Connect to remove the friction from accessing quality healthcare in Nigeria.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {whyCaremed.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-50 hover:bg-customBlue rounded-2xl p-6 border border-gray-100 hover:border-customBlue transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 bg-customBlue/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-all duration-300">
                <item.Icon className="w-6 h-6 text-customBlue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">{item.title}</h3>
              <p className="text-sm text-gray-500 group-hover:text-blue-100 leading-relaxed transition-colors duration-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
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
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
                <div className="text-blue-200 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCaremed;
