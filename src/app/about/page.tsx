"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-8 py-20 font-sans"
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <div className="flex justify-center lg:justify-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <img
              src="/images/port1.jpg"
              alt="Profile"
              className="w-40 h-40 lg:w-48 lg:h-48 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">About Me</h1>

          <p className="text-lg text-gray-300 leading-relaxed">
            Halo! Saya adalah mahasiswa aktif yang sedang belajar dan memperdalam kemampuan di bidang pengembangan web,
            khususnya di front-end development menggunakan React dan Next.js. Saya tertarik dengan UI/UX design,
            dan saat ini sedang membangun portfolio sambil terus belajar teknologi baru.
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">Skill yang Sedang Dipelajari</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>HTML, CSS, dan JavaScript</li>
              <li>React.js dan Next.js</li>
              <li>Tailwind CSS</li>
              <li>Git &amp; GitHub</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">Tujuan Saat Ini</h2>
            <p className="text-gray-300">
              Fokus membangun beberapa project kecil untuk menambah pengalaman dan membangun portfolio yang bisa saya gunakan
              saat melamar magang atau pekerjaan pertama di bidang front-end development
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-20 border-t border-gray-700 pt-10 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6">English Version</h2>
        <p className="text-gray-300 mb-4">
          Hi! I am an active university student currently learning and exploring web development, especially front-end using React and Next.js.
          I&apos;m passionate about clean UI/UX design and currently focused on building my portfolio while improving my technical skills.
        </p>
        <p className="text-gray-300 mb-4">
          I&apos;m currently learning the following:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
          <li>HTML, CSS, and JavaScript</li>
          <li>React.js and Next.js</li>
          <li>Tailwind CSS</li>
          <li>Git &amp; GitHub</li>
        </ul>
        <p className="text-gray-300">
          My current goal is to build small real-world projects and gradually assemble a portfolio that will help me apply for internships or my first front-end development job.
        </p>
      </motion.div>
    </motion.div>
  );
}
