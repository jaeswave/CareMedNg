import { motion } from "framer-motion";
import partner from "../../assets/partner.png";
import partner2 from "../../assets/partner2.svg";
import partner3 from "../../assets/partner3.svg";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stats = [
  { value: "10K+", label: "Patients Served" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Support Available" },
  { value: "50+", label: "Partner Clinics" },
];

const Home = () => {
  return (
    <section className="relative bg-hero-bg bg-center bg-cover bg-no-repeat mt-16 w-full min-h-screen flex items-center font-outfit overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-customBlue/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-customRed/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

      <div className="relative z-10 w-[90%] max-w-6xl mx-auto py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          {/* Left: Text */}
          <div className="flex-1 text-left">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-customBlue/10 border border-customBlue/20 text-customBlue px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-customBlue animate-pulse" />
              Now Available: Holter ECG Monitoring
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
              Quality Healthcare,{" "}
              <span className="text-customBlue">Connected</span>{" "}
              <span className="text-customRed">Fast.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
              CareMed Connect links you to trusted diagnostic centres, labs, and specialists — affordable, fast, and stress-free.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://caremedconnect.continuouscare.io/secure/registration/?lang=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-customBlue text-white font-semibold rounded-xl hover:bg-blue-800 transition-all duration-200 shadow-lg shadow-customBlue/25"
              >
                Book a Service
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-customBlue text-customBlue font-semibold rounded-xl hover:bg-customBlue hover:text-white transition-all duration-200"
              >
                View Services
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-white/80 border border-gray-100 rounded-xl p-4 shadow-sm text-center">
                  <div className="text-2xl font-bold text-customBlue">{value}</div>
                  <div className="text-xs text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Partners card */}
          <motion.div variants={itemVariants} className="flex-shrink-0 w-full lg:w-80">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5 text-center">Proudly Partnered With</p>
              <div className="overflow-hidden">
                <motion.div
                  className="flex gap-8 items-center"
                  animate={{ x: ["0%", "-250%"] }}
                  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                >
                  {[partner, partner2, partner3, partner, partner2, partner3].map((logo, idx) => (
                    <img
                      key={idx}
                      src={logo}
                      alt={`Partner ${idx}`}
                      className={`max-h-16 w-auto object-contain flex-shrink-0 ${idx % 3 === 1 ? "bg-customBlue rounded-lg p-1.5" : ""}`}
                    />
                  ))}
                </motion.div>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-700 mb-1">Need help?</p>
                <a
                  href="https://wa.me/2349153847999?text=Hello%20Caremed%20Connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-green-600 font-semibold hover:underline"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
