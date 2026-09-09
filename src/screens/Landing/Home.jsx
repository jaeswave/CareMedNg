import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

const services = [
  { icon: "🫀", label: "Echocardiogram" },
  { icon: "⚡", label: "ECG" },
  { icon: "🤱", label: "BPP + CTG" },
  { icon: "🔬", label: "Fetal Ultrasound" },
  { icon: "💓", label: "NST" },
  { icon: "🛡️", label: "Cardiac Screening" },
];

const stats = [
  { value: "10K+", label: "Patients Served" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Support" },
  { value: "50+", label: "Partner Clinics" },
];

const Home = () => (
  <section className="relative min-h-screen bg-gradient-to-br from-[#f0f6ff] via-white to-[#fdf1f5] flex items-center mt-16 overflow-hidden font-outfit">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-customBlue/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-100/60 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

    <div className="relative z-10 w-[90%] max-w-7xl mx-auto py-16">
      <div className="grid lg:grid-cols-2 gap-14 items-center">

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-customBlue/10 border border-customBlue/20 text-customBlue px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-customBlue animate-pulse" />
            Specialized Cardiofetal Diagnostics · Lagos
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-tight mb-4">
            Two Hearts.{" "}
            <span className="text-customBlue">One</span>{" "}
            <span className="text-customRed">Promise.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed max-w-xl mb-4">
            Specialized fetal, pregnancy, and cardiac diagnostics — connecting mothers,
            babies, and adults to accurate, timely, and accessible care.
          </motion.p>

          <motion.p variants={itemVariants} className="text-sm text-gray-500 mb-8">
            From BPP + CTG to Echocardiogram, ECG, NST, and Fetal Ultrasound —
            all in one trusted centre.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
            
              href="https://caremedconnect.continuouscare.io/secure/registration/?lang=en_US"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-customBlue text-white font-semibold rounded-xl hover:bg-blue-800 transition-all shadow-lg shadow-customBlue/25"
            >
              Book a Service
            </a>
            <a
              href="https://wa.me/2348077779098?text=Hello%20Caremed%20Connect"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-green-50 border-2 border-green-500 text-green-700 font-semibold rounded-xl hover:bg-green-500 hover:text-white transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5 -.669 -.51 -.173 -.008 -.371 -.01 -.57 -.01 -.198 0 -.52 .074 -.792 .372 -.272 .297 -1.04 1.016 -1.04 2.479 0 1.462 1.065 2.875 １．２１３ ３．０７４ .１４９ .１９８ ２．０９６ ３．２ ５．０７７ ４．４８７ .７０９ .３０６ １．２６２ .４８９ １．６９４ .６２５ .７１２ .２２７ １．３６ .１９５ １．８７１ .１１８ .５７１ -.０８５ １．７５８ -.７１９ ２．００６ -１．４１３ .２４８ -.６９４ .２４８ -１．２８９ .１７３ -１．４１３ -.０７４ -.１２４ -.２７２ -.₁₉₈ -.５７₀ -."/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.991 .５２９ ３．８４６ １．４０７ ５．４９８L2 22l4.５０２ -１．４０７C８．１５４ ２１．４７１ １０．００９ ２２ １２ ２２c５．５２３ ０ １０ -４．４７７ １０ -１０S１７．５２３ ２ １２ ２zm０ １８c-1.６６９ ０ -３．２９８ -.５３ -４．６０８ -１．４０８l-.３３ -.１９６ -３．００１ .８３ .８３０ -３．００１ -.１９６ -.３３０C４．５３０ １５．２９８ ４ １３．６６９ ４ １２c0 -4.۴۴۱ ۳．۵۵۹ -۸ ۸ -۸s۸ ۳．۵۵۹ ۸ ۸-٣٫٥٥٩٨-٨-٨-٨z"/></svg>
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
            {services.map(({ icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full shadow-sm">
                {icon} {label}
              </span>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm text-center">
                <div className="text-2xl font-bold text-customBlue">{value}</div>
                <div className="text-xs text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="w-full">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl p-8 mb-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-customBlue flex items-center justify-center text-white text-lg">🫀</div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Cardiofetal Diagnostic Service</p>
                <p className="text-xs text-gray-400">Amuwo Odofin · Lagos</p>
              </div>
              <span className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Open
              </span>
            </div>

            <div className="space-y-3 mb-6">
              {[
                { icon: "🫀", title: "Echocardiogram", sub: "Heart structure & function" },
                { icon: "⚡", title: "ECG", sub: "Electrical heart activity" },
                { icon: "🤱", title: "BPP + CTG", sub: "Fetal wellbeing score" },
                { icon: "💓", title: "NST / Non-Stress Test", sub: "Baby's heart rate monitoring" },
              ].map(({ icon, title, sub }) => (
                <div key={title} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                  <span className="text-xl">{icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">{title}</p>
                    <p className="text-xs text-gray-500">{sub}</p>
                  </div>
                  <span className="text-customBlue text-xs font-semibold">Book →</span>
                </div>
              ))}
            </div>

            <Link to="/partnerships/amuwo-mcc" className="block w-full text-center py-3 bg-customBlue text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors text-sm">
              View All Services
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 overflow-hidden">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 text-center">Proudly Partnered With</p>
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-10 items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              >
                {[partner, partner2, partner3, partner, partner2, partner3].map((logo, idx) => (
                  <img key={idx} src={logo} alt="Partner" className={`max-h-12 w-auto object-contain flex-shrink-0 ${idx % 3 === 1 ? "bg-customBlue rounded-lg p-1" : ""}`} />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default Home;