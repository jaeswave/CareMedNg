import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Bookings = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    location: "",
    date: new Date(),
  });

  const services = [
    "Laboratory test",
    "Interpret your laboratory test",
    "Discuss your test result with a Doctor",
    "Pathologist Consultation",
    "7-day Holter ECG",
    "24 hr Holter ECG",
    "Heart Check service",
    "CT Scan",
    "MRI",
    "X-ray",
    "Echocardiogram",
    "Ultrasound Scan",
    "Venous and Arterial Doppler",
  ];

  const locations = ["Clinic A", "Clinic B", "Clinic C"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Loading applied correctly
  const sendBooking = (e) => {
    e.preventDefault();
    setLoading(true); // start loading

    const templateParams = {
      name: formData.name,
      email: formData.email,
      service: formData.service,
      location: formData.location,
      date: formData.date.toLocaleString(),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("✅ Booking sent successfully!");
          setFormData({
            name: "",
            email: "",
            service: "",
            location: "",
            date: new Date(),
          });
          setLoading(false); // stop loading after success
        },
        (error) => {
          toast.error("❌ Failed to send booking. Please try again.");
          console.error("FAILED...", error.text);
          setLoading(false); // stop loading after error
        }
      );
  };

  return (
    <section className="w-full mt-16 py-12 bg-hero-bg bg-no-repeat bg-cover bg-center">
      <motion.div
        initial="hidden"
        animate="visible"
        className="w-[90%] md:w-[60%] mx-auto"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-customBlue mb-8 text-center"
          variants={fadeInUp}
        >
          Book a Service
        </motion.h1>

        <motion.form
          onSubmit={sendBooking}
          className="bg-white shadow-lg rounded-2xl p-6 space-y-6"
          variants={fadeInUp}
        >
          {/* Full Name */}
          <motion.div variants={fadeInUp}>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="Enter your name"
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={fadeInUp}>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="Enter your email"
            />
          </motion.div>

          {/* Service */}
          <motion.div variants={fadeInUp}>
            <label className="block mb-1 font-medium">Select Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            >
              <option value="">-- Choose a Service --</option>
              {services.map((s, i) => (
                <option key={i} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Location */}
          <motion.div variants={fadeInUp}>
            <label className="block mb-1 font-medium">Select Location</label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            >
              <option value="">-- Choose Location --</option>
              {locations.map((loc, i) => (
                <option key={i} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Date & Time */}
          <motion.div variants={fadeInUp}>
            <label className="block mb-1 font-medium">Date & Time</label>
            <DatePicker
              selected={formData.date}
              onChange={(d) => setFormData({ ...formData, date: d })}
              showTimeSelect
              dateFormat="Pp"
              className="w-full border rounded-lg p-2"
            />
          </motion.div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-xl transition text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-customBlue hover:bg-blue-700"
            }`}
            variants={fadeInUp}
          >
            {loading ? "Submitting..." : "Confirm Booking"}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Bookings;
