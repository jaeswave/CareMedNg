import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Mrs. Adaeze Okonkwo",
    role: "Expectant Mother",
    location: "Amuwo Odofin, Lagos",
    quote:
      "I was worried about my baby not moving as much. My doctor referred me for a BPP and CTG at Amuwo MCC through Caremed Connect. The staff were calm, professional and explained everything. I left feeling reassured.",
    rating: 5,
    initial: "A",
  },
  {
    name: "Dr. Emmanuel Adebayo",
    role: "Consultant Obstetrician",
    location: "Lagos",
    quote:
      "Referring patients to Caremed Connect has been seamless. Their reporting is timely, the staff are professional, and my patients always give excellent feedback on their experience.",
    rating: 5,
    initial: "E",
  },
  {
    name: "Mr. Kunle Fashola",
    role: "Cardiac Patient",
    location: "Lagos",
    quote:
      "I needed an ECG and echocardiogram after experiencing occasional palpitations. Caremed Connect made it easy to access without long waits. Clear process, professional service.",
    rating: 5,
    initial: "K",
  },
  {
    name: "Mrs. Ngozi Eze",
    role: "Mother",
    location: "Amuwo Odofin",
    quote:
      "My baby needed a paediatric ultrasound and the team at the Amuwo MCC centre were so gentle and patient. I will recommend Caremed Connect to every mother I know.",
    rating: 5,
    initial: "N",
  },
];

const Testimonial = () => {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setIdx((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const go = (next) => {
    setDir(next > idx ? 1 : -1);
    setIdx(next);
  };

  const variants = {
    enter: (d) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d < 0 ? 200 : -200, opacity: 0 }),
  };

  const t = testimonials[idx];

  return (
    <section className="w-full py-24 bg-gradient-to-br from-customBlue to-blue-700 font-outfit overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/2" />

      <div className="relative z-10 w-[90%] max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-blue-200 text-sm font-bold uppercase tracking-widest mb-3">
            Patient Stories
          </span>
          <h2 className="text-4xl font-bold text-white mb-3">
            What Our Patients Say
          </h2>
          <p className="text-blue-200 max-w-xl mx-auto">
            Real experiences from mothers, patients, and doctors who trust
            Caremed Connect.
          </p>
        </motion.div>

        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence custom={dir} initial={false}>
            <motion.div
              key={idx}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute w-full"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 sm:p-10">
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-300 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-white text-lg leading-relaxed italic mb-7">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-blue-200 text-sm">
                      {t.role} · {t.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === idx ? "bg-white w-6" : "bg-white/30 w-2"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
