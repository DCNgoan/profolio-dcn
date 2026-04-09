"use client";

import { motion } from 'framer-motion';
import AvatarFlip from './AvatarFlip';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <motion.div 
            className={styles.textContainer}
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          >
            <h2 className={styles.subtitle}>Xin chào, tôi là</h2>
            <h1 className={styles.title}>DƯƠNG CHÍ NGOAN</h1>
            <p className={styles.description}>
              Sáng tạo nội dung bằng AI | Chuyên gia truyền thông số | Lập trình ứng dụng thông minh
            </p>
            <div className={styles.cta}>
              <a href="#contact" className={styles.primaryBtn}>Liên hệ ngay</a>
              <a href="#projects" className={styles.secondaryBtn}>Xem dự án</a>
            </div>
          </motion.div>

          <motion.div 
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.4, type: "spring" }}
          >
            <AvatarFlip />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
