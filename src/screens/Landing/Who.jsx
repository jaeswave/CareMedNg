import { whoWeServe } from "../../data";
import { motion } from "framer-motion";

const Who = () => {
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
          <span className="inline-block text-customRed text-sm font-bold uppercase tracking-widest mb-3">Who We Serve</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for <span className="text-customBlue">Everyone</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Delivering personalised healthcare solutions for every member of our community
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoWeServe.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-gray-50 hover:bg-customBlue rounded-2xl p-7 border border-gray-100 hover:border-customBlue transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 bg-customBlue/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                <item.icon className="w-7 h-7 text-customBlue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">{item.title}</h3>
              <p className="text-sm text-gray-500 group-hover:text-blue-100 leading-relaxed transition-colors duration-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 bg-gray-50 border border-gray-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="flex-shrink-0 w-16 h-16 bg-customBlue rounded-xl flex items-center justify-center text-white text-2xl font-bold">
            "
          </div>
          <div>
            <p className="text-gray-700 text-lg leading-relaxed italic mb-3">
              "CareMed Connect has transformed how we deliver care to our patients. The platform is intuitive, secure, and has significantly improved our efficiency."
            </p>
            <p className="text-sm text-gray-400 font-semibold">— Dr. Sarah Johnson, Medical Director</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Who;
