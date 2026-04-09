"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './NavBar.module.css';

const navLinks = [
  { name: "Trang chủ", href: "#" },
  { name: "Về tôi", href: "#about" },
  { name: "Kỹ năng", href: "#skills" },
  { name: "Thành tựu", href: "#blog" },
  { name: "Dự án", href: "#projects" },
  { name: "Liên hệ", href: "#contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>DCN<span>.</span></div>

          {/* Desktop Menu */}
          <ul className={styles.desktopLinks}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>

          {/* Toggle Button */}
          <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className={styles.mobileLinks}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
