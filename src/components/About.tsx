"use client";

import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ 
            duration: 1,
            type: "spring",
            bounce: 0.4
          }}
        >
          <div className={styles.info}>
            <h2 className={styles.heading}>VỀ TÔI</h2>
            <p className={styles.text}>
              Tốt nghiệp ngành **Công nghệ thông tin tại Đại học An Giang**, tôi mang trong mình sự kết hợp giữa tư duy logic của một kỹ sư và óc sáng tạo của một nhà làm nội dung số.
            </p>
            <p className={styles.text}>
              Với khả năng làm việc độc lập cao và sự hỗ trợ mạnh mẽ từ các công nghệ AI tiên tiến (Viber coding, AI Video/Voice), tôi tối ưu hóa mọi quy trình từ phát triển web đến xây dựng thương hiệu cá nhân trên các nền tảng mạng xã hội.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
