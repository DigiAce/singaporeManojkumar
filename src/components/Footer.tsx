import React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  Zap,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900">Manoj</span>
            </div>

            <div className="space-y-2 text-gray-600">
              <p className="font-semibold text-slate-900">
                Content Creator & Educator
              </p>
              <p>Creating inspiring content</p>
              <p>Worldwide</p>
              <p>Contactsingaporehobby@gmail.com</p>
            </div>
          </div>

          {/* Right Side - Navigation & Social */}
          <div className="flex flex-col lg:items-end">
            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <motion.a
                  href="/"
                  className="block text-2xl lg:text-3xl font-bold text-slate-900 hover:text-orange-600 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  HOME
                </motion.a>
                <motion.a
                  href="/courses"
                  className="block text-2xl lg:text-3xl font-bold text-slate-900 hover:text-orange-600 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  COURSE
                </motion.a>
                <motion.a
                  href="/contact"
                  className="block text-2xl lg:text-3xl font-bold text-slate-900 hover:text-orange-600 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  CONTACT
                </motion.a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/singaporehobbymanoj?igsh=MTk5eGFyY2xuMTU1OA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-6 h-6" />
              </motion.a>

              <motion.a
                href="https://www.facebook.com/share/1M6ZyRBomS/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-6 h-6" />
              </motion.a>

              <motion.a
                href="https://www.youtube.com/@Singaporehobbymanoj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Youtube className="w-6 h-6" />
              </motion.a>

              <motion.a
                href="https://www.tiktok.com/@singaporehobbymanoj?_t=ZS-8yedTkX1fML&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Initiated by section */}
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">Developed by</span>
              <span className="font-bold text-slate-900">DIGIACE</span>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-gray-600 text-sm">
              <motion.a
                href="#contact"
                className="hover:text-slate-900 transition-colors"
                whileHover={{ y: -2 }}
              >
                Contact
              </motion.a>
              <span>|</span>
              <motion.a
                href="#privacy"
                className="hover:text-slate-900 transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <span>|</span>
              <motion.a
                href="#terms"
                className="hover:text-slate-900 transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms
              </motion.a>
            </div>
          </div>
        </div>

        {/* Large Brand Text */}
        <div className="mt-12 text-center">
          <motion.h3
            className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 opacity-10 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
          >
            MANOJ
          </motion.h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
