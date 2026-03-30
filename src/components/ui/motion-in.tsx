"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type MotionInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function MotionIn({ children, className, delay = 0 }: MotionInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.36, delay, ease: [0.22, 0.61, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
