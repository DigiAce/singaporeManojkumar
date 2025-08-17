"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";

interface NavLink {
  id: string;
  label: string;
  href?: string;
  path?: string;
  section: boolean;
}

const navLinks: NavLink[] = [
  { id: "home", label: "Home", href: "/", section: true },
  { id: "courses", label: "Courses", path: "/courses", section: false },
  { id: "contact", label: "Contact", path: "/contact", section: false },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHome = location.pathname === "/";

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getNavbarClasses = () => {
    if (isScrolled || !isHome) {
      return "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100/50";
    } else {
      return "bg-transparent";
    }
  };

  const getTextColor = () => {
    return isScrolled || !isHome ? "text-gray-900" : "text-white";
  };

  const getIconColor = () => {
    if (isMobileMenuOpen) {
      return "text-gray-900"; // Always dark when menu is open
    }
    return isScrolled || !isHome ? "text-gray-900" : "text-white";
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 transition-all duration-300 ${getNavbarClasses()}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/" className="flex items-center gap-3">
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
                isScrolled || !isHome
                  ? "bg-orange-500"
                  : "bg-white/20 backdrop-blur-sm border border-white/30"
              }`}
            >
              <Zap className={`w-4 h-4 sm:w-6 sm:h-6 ${getIconColor()}`} />
            </div>
            <span
              className={`font-bold text-xl transition-colors duration-300 ${getTextColor()}`}
            >
              Manoj
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navLinks.map((link, index) => {
            const isActive =
              location.pathname === link.path ||
              location.pathname === link.href;

            const baseClass = `font-medium transition-all duration-300 relative text-base xl:text-lg hover:text-orange-400 ${getTextColor()}`;

            return link.section ? (
              <motion.a
                key={link.id}
                href={link.href}
                className={baseClass}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -2 }}
                onClick={() => window.scrollTo(0, 0)}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    className={`absolute -bottom-1 left-0 w-full h-0.5 ${
                      isScrolled || !isHome ? "bg-orange-500" : "bg-white"
                    }`}
                    layoutId="activeTab"
                  />
                )}
              </motion.a>
            ) : (
              <motion.div
                key={link.id}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Link
                  to={link.path!}
                  className={baseClass}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      className={`absolute -bottom-1 left-0 w-full h-0.5 ${
                        isScrolled || !isHome ? "bg-orange-500" : "bg-white"
                      }`}
                      layoutId="activeTab"
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Get Started Button */}

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeG0td7pb273qQiXgLBwzokURBMHjKGpY5wnRVsnqIfAnsC6Q/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            className="hidden md:block w-full px-6 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg text-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={closeMobileMenu}
          >
            Register Now
          </motion.button>
        </a>

        {/* Mobile Menu Toggle */}
        <motion.button
          className={`lg:hidden w-8 h-8 flex items-center justify-center ${
            isMobileMenuOpen ? "text-gray-900" : getTextColor()
          }`}
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 lg:hidden shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-gray-900 text-lg">
                      Manoj
                    </span>
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="flex-1 py-6 space-y-2">
                  {navLinks.map((link, index) => {
                    const isActive =
                      location.pathname === link.path ||
                      location.pathname === link.href;
                    return link.section ? (
                      <motion.a
                        key={link.id}
                        href={link.href}
                        className="block px-6 py-4 text-gray-900 hover:text-orange-500 hover:bg-orange-50 font-medium transition-colors text-lg"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                        onClick={() => {
                          closeMobileMenu();
                          window.scrollTo(0, 0);
                        }}
                      >
                        {link.label}
                      </motion.a>
                    ) : (
                      <motion.div
                        key={link.id}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                      >
                        <Link
                          to={link.path!}
                          className={`block px-6 py-4 font-medium transition-colors relative text-lg ${
                            isActive
                              ? "text-orange-500 bg-orange-50"
                              : "text-gray-900 hover:text-orange-500 hover:bg-orange-50"
                          }`}
                          onClick={() => {
                            closeMobileMenu();
                            window.scrollTo(0, 0);
                          }}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile Get Started */}
                <div className="p-6 border-t border-gray-100">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeG0td7pb273qQiXgLBwzokURBMHjKGpY5wnRVsnqIfAnsC6Q/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      className="w-full px-6 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg text-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={closeMobileMenu}
                    >
                      Register Now
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
