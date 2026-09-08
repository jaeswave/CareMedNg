import { motion } from "framer-motion";
import { categories } from "../../data";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <section className="w-full mt-16 py-10 bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-[85%] mx-auto"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.h2
          className="text-4xl font-bold text-customBlue mb-10 text-center"
          variants={fadeInUp}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="text-center text-lg mb-16 text-gray-700 max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          At Caremed Connect, we connect you to a wide range of diagnostic and
          specialty services through our network of partner facilities.
        </motion.p>

        <div className="grid gap-10 md:grid-cols-2">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              custom={i}
              variants={fadeInUp}
              className="bg-[#f9f9f9] p-6 rounded-2xl shadow-md border border-dashed border-customBlue"
            >
              <h3 className="text-xl font-semibold mb-4 text-customBlue flex items-center gap-2">
                <span className="text-2xl">{cat.icon}</span>
                {cat.title}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                {cat.services.map((srv, idx) => (
                  <li key={idx}>{srv}</li>
                ))}
              </ul>
              <Link
                to={
                  "https://caremedconnect.continuouscare.io/secure/login/auth/?lang=en_US"
                }
              >
                <Button title="Book Now" className="mt-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
