"use client";

import { motion } from 'framer-motion';
import styles from './Blog.module.css';

const blogPosts = [
  {
    title: "Sáng tạo Video bằng AI Veo3",
    desc: "Cách tôi tận dụng Google Veo3 để tạo ra những thước phim điện ảnh từ văn bản.",
    tag: "AI Video",
    date: "10/04/2026"
  },
  {
    title: "Quy trình tạo Voice AI cảm xúc",
    desc: "Sử dụng các công cụ tạo giọng nói AI để lồng tiếng cho video mà không cần phòng thu.",
    tag: "AI Voice",
    date: "08/04/2026"
  },
  {
    title: "Thoát khỏi giới hạn với Kling AI",
    desc: "Trải nghiệm tạo video AI chất lượng cao với độ chuyển động thực tế kinh ngạc.",
    tag: "Kling AI",
    date: "05/04/2026"
  }
];

export default function Blog() {
  return (
    <section id="blog" className={styles.section}>
      <div className="container">
        <motion.h2 
          className={styles.heading}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          CHIA SẺ & THÀNH TỰU
        </motion.h2>
        
        {/* Achievements Section moved here */}
        <motion.div 
          className={styles.statsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 }
            }
          }}
        >
          <motion.div 
            className={`${styles.statCard} glass`}
            variants={{
              hidden: { opacity: 0, scale: 0.5, y: 50 },
              visible: { opacity: 1, scale: 1, y: 0 }
            }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <h3 className={styles.statNumber}>8k</h3>
            <p className={styles.statLabel}>Từng xây dựng trang page đạt 8k theo dõi trong 1 tháng</p>
          </motion.div>
          <motion.div 
            className={`${styles.statCard} glass`}
            variants={{
              hidden: { opacity: 0, scale: 0.5, y: 50 },
              visible: { opacity: 1, scale: 1, y: 0 }
            }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <h3 className={styles.statNumber}>DHAG</h3>
            <p className={styles.statLabel}>Tốt nghiệp CNTT ĐH An Giang</p>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {blogPosts.map((post, index) => (
            <motion.article 
              key={index}
              className={`${styles.post} glass`}
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className={styles.header}>
                <span className={styles.tag}>{post.tag}</span>
                <span className={styles.date}>{post.date}</span>
              </div>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postDesc}>{post.desc}</p>
              <button className={styles.readMore}>Xem video</button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
