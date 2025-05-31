"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 font-sans text-center"
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome!
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Link
          href="/menu"
          className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition font-medium text-sm sm:text-base"
        >
          Open Menu →
        </Link>
      </motion.div>
    </motion.div>
  );
}
