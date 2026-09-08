import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Partner = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-3"
    >
      <FaCheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
      <span className="text-muted-foreground">{text}</span>
    </motion.div>
  );
};

export default Partner;
