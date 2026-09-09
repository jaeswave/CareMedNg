import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    icon: "📞",
    title: "Book",
    description:
      "Contact us via WhatsApp, phone, or our booking platform to schedule your diagnostic investigation.",
    color: "bg-blue-50 border-blue-100",
    accent: "text-customBlue",
  },
  {
    step: "02",
    icon: "📋",
    title: "Prepare",
    description:
      "Our team explains everything you need before your appointment — what to bring and what to expect.",
    color: "bg-pink-50 border-pink-100",
    accent: "text-pink-600",
  },
  {
    step: "03",
    icon: "🔬",
    title: "Get Tested",
    description:
      "Your investigation is performed by appropriately trained professionals using modern diagnostic equipment.",
    color: "bg-green-50 border-green-100",
    accent: "text-green-600",
  },
  {
    step: "04",
    icon: "📄",
    title: "Receive Results",
    description:
      "Your results are documented and made available promptly for your doctor to review and act on.",
    color: "bg-purple-50 border-purple-100",
    accent: "text-purple-600",
  },
  {
    step: "05",
    icon: "🩺",
    title: "Follow Up",
    description:
      "Take your results to your doctor for interpretation, clinical management, and next steps.",
    color: "bg-orange-50 border-orange-100",
    accent: "text-orange-600",
  },
];

const HowItWorks = () => (
  <section className="w-full py-24 bg-white font-outfit">
    <div className="w-[90%] max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-customRed text-sm font-bold uppercase tracking-widest mb-3">
          Simple Process
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          How It <span className="text-customBlue">Works</span>
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Getting your diagnostic investigation done is straightforward — from
          booking to results.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
        {steps.map(({ step, icon, title, description, color, accent }, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`rounded-2xl border p-6 ${color} flex flex-col`}
          >
            <span
              className={`text-xs font-bold uppercase tracking-widest ${accent} mb-3`}
            >
              {step}
            </span>
            <span className="text-3xl mb-3">{icon}</span>
            <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {description}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs text-gray-400 mb-8">
        ⚠️ Diagnostic tests do not replace consultation with your doctor.
        Results should always be interpreted in the context of your symptoms and
        medical history.
      </p>

      <div className="flex justify-center">
        <a
          href="https://wa.me/2348077779098?text=Hello%20Caremed%20Connect"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-customBlue text-white font-semibold rounded-xl hover:bg-blue-800 transition-all shadow-lg shadow-customBlue/25"
        >
          Book Your Investigation →
        </a>
      </div>
    </div>
  </section>
);

export default HowItWorks;
