"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function MenuPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col justify-between px-8 py-10 font-sans"
    >
      {/* Top Right Buttons */}
      <div className="flex justify-end">
        <div className="flex items-center gap-4">
          <button className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition font-medium">
            Let’s Talk
          </button>
          <Link
            href="/"
            className="w-10 h-10 border border-white rounded-full flex justify-center items-center text-2xl hover:bg-white hover:text-black transition"
          >
            ×
          </Link>
        </div>
      </div>

      {/* Center Navigation Links */}
      <div className="flex flex-col gap-14 items-start mt-20">
        {[
          { label: "Home", number: "01", href: "/" },
          { label: "About Me", number: "02", href: "/about" },
        ].map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
            className="w-full"
          >
            <Link
              href={item.href}
              className="flex justify-between items-center w-full group hover:translate-x-2 transition-transform"
            >
              <div className="text-6xl font-extrabold tracking-tight">
                {item.label}{" "}
                <span className="text-gray-500 text-xl font-normal ml-2">
                  ({item.number})
                </span>
              </div>
              <div className="w-10 h-10 border border-white rounded-full flex justify-center items-center group-hover:bg-white group-hover:text-black transition">
                →
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-gray-700 pt-8 text-sm">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="text-gray-400 mb-2 uppercase tracking-wide">Follow me</p>
            <div className="flex gap-6 text-base">
              {"Instagram".split(" ").map((name) => (
                <a
                  key={name}
                  href="https://www.instagram.com/chrstnim?igsh=MXRvNmVlanN6bGF2cg%3D%3D&utm_source=qr"
                  className="hover:text-blue-400 hover:underline transition"
                >
                  {name} ↗
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-gray-400 mb-2 uppercase tracking-wide">Stay connected</p>
            <form className="flex border-b border-white max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-white placeholder-gray-500 outline-none flex-1 py-1"
              />
              <button
                type="submit"
                className="ml-2 hover:text-blue-400 transition"
              >
                ↗
              </button>
            </form>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
