import { useState } from "react";
import ServiceCard from "../../components/ServiceCard";
import { currentService, upcomingServices } from "../../data";
import { motion } from "framer-motion";

const highlights = [
  { icon: "🔒", title: "Secure & Private", desc: "Your health data is protected with enterprise-grade security" },
  { icon: "⏰", title: "24/7 Access", desc: "Book anytime — appointments available 7 days a week" },
  { icon: "👨‍⚕️", title: "Expert Team", desc: "Board-certified professionals with years of experience" },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <section className="w-full py-24 bg-gray-50 font-outfit">
      <div className="w-[90%] max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-customRed text-sm font-bold uppercase tracking-widest mb-3">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-customBlue">Services</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Professional healthcare services designed for your convenience and well-being
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl bg-white border border-gray-200 p-1 shadow-sm">
            {["current", "upcoming"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-customBlue text-white shadow"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab === "current" ? "Available Now" : "Coming Soon"}
              </button>
            ))}
          </div>
        </div>

        {/* Service Card */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          {activeTab === "current"
            ? <ServiceCard {...currentService} isPrimary />
            : <ServiceCard {...upcomingServices} />
          }
        </motion.div>

        {/* Highlights */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {highlights.map(({ icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-4 items-start"
            >
              <span className="text-3xl">{icon}</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
