"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Star,
  Send,
  MapPin,
  Clock,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  // Tiktok,
} from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 right-1/4 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/3 left-20 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 right-1/2 w-16 h-16 border-2 border-orange-300/30 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Side - Enhanced Content */}
          <div className="space-y-16">
            {/* Hero Section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="space-y-4">
                <motion.div
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-4 py-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Send className="w-4 h-4 text-orange-600" />
                  <span className="text-orange-700 font-medium text-sm">
                    GET IN TOUCH
                  </span>
                </motion.div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight">
                  Let's
                  <br />
                  <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                    Talk!
                  </span>
                </h1>
              </div>

              <div className="space-y-6">
                <motion.p
                  className="text-2xl md:text-3xl text-gray-800"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Hi! I am{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent font-bold">
                    Manoj Kumar
                  </span>
                </motion.p>
                <motion.p
                  className="text-xl md:text-2xl text-gray-600"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Content Creator & Digital Strategist
                </motion.p>
                <motion.p
                  className="text-lg text-gray-600 max-w-lg leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Ready to transform your brand's digital presence? Let's create
                  something amazing together.
                </motion.p>
              </div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white/50 border-2 border-gray-200/50 rounded-xl focus:border-orange-400 focus:outline-none transition-all text-lg backdrop-blur-sm"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white/50 border-2 border-gray-200/50 rounded-xl focus:border-orange-400 focus:outline-none transition-all text-lg backdrop-blur-sm"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Collaboration"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/50 border-2 border-gray-200/50 rounded-xl focus:border-orange-400 focus:outline-none transition-all text-lg backdrop-blur-sm"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/50 border-2 border-gray-200/50 rounded-xl focus:border-orange-400 focus:outline-none transition-all text-lg resize-none backdrop-blur-sm"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-lg font-bold py-4 px-8 rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Enhanced Review Badge */}
            {/* <motion.div
              className="flex items-center justify-center lg:justify-start space-x-6 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                Reviewed on
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-black text-gray-900">
                  Clutch
                </span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  31 REVIEWS
                </span>
              </div>
            </motion.div> */}
          </div>

          {/* Right Side - Enhanced Contact Information */}
          <motion.div
            className="space-y-8 lg:pl-12"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Email Card */}
              <motion.div
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Email</h3>
                    <p className="text-sm text-gray-600">
                      Drop me a line anytime
                    </p>
                  </div>
                </div>
                <a
                  href="mailto:info@manojkumar.com"
                  className="text-orange-600 hover:text-orange-800 transition-colors text-lg font-medium"
                >
                  Contactsingaporehobby@gmail.com
                </a>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Phone</h3>
                    <p className="text-sm text-gray-600">Call me directly</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">
                      SINGAPORE :{" "}
                    </span>
                    <span className="text-gray-900 font-medium">
                      +91 99009 25080
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Location
                    </h3>
                    <p className="text-sm text-gray-600">Based in Singapore</p>
                  </div>
                </div>
                <p className="text-gray-900 font-medium">Singapore</p>
              </motion.div>

              {/* Availability Card */}
              <motion.div
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Availability
                    </h3>
                    <p className="text-sm text-gray-600">Response time</p>
                  </div>
                </div>
                <p className="text-gray-900 font-medium">
                  Usually within 24 hours
                </p>
              </motion.div>
            </div>

            {/* Enhanced Social Links */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="https://www.instagram.com/singaporehobbymanoj?igsh=MTk5eGFyY2xuMTU1OA%3D%3D&utm_source=qr"
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-medium">Instagram</span>
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/@Singaporehobbymanoj"
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Youtube className="w-5 h-5" />
                  <span className="font-medium">YouTube</span>
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/share/1M6ZyRBomS/?mibextid=wwXIfr"
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-5 h-5" />
                  <span className="font-medium">Facebook</span>
                </motion.a>
                <motion.a
                  href="https://www.tiktok.com/@singaporehobbymanoj?_t=ZS-8yedTkX1fML&_r=1"
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-sky-400 to-sky-500 text-white rounded-xl hover:from-sky-500 hover:to-sky-600 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="w-5 h-5" />
                  <span className="font-medium">Tiktok</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
