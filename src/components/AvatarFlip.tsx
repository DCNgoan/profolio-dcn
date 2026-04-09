"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './AvatarFlip.module.css';

export default function AvatarFlip() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={styles.container}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className={styles.card}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front: Real Photo */}
        <div className={styles.front}>
          <Image
            src="/images/me-real.jpg"
            alt="Dương Chí Ngoan Real"
            fill
            className={styles.image}
            priority
          />
          <div className={styles.label}>Real Reflection</div>
        </div>

        {/* Back: AI Avatar */}
        <div className={styles.back}>
          <Image
            src="/images/me-ai.png"
            alt="Dương Chí Ngoan AI"
            fill
            className={styles.image}
          />
          <div className={styles.label}>AI Evolution</div>
        </div>
      </motion.div>
    </div>
  );
}
