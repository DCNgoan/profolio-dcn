"use client";

import { motion } from 'framer-motion';
import { Cpu, Video, Settings, TrendingUp, Camera, Code } from 'lucide-react';
import styles from './Skills.module.css';

const skillGroups = [
  {
    title: "Sáng tạo nội dung AI",
    icon: <Video size={32} />,
    skills: ["Tạo video Veo3 / Kling / Grok", "Biên tập CapCut chuyên nghiệp", "Tạo giọng nói AI (Voice AI)", "Thiết kế Canva & Sáng tạo ảnh AI"]
  },
  {
    title: "Kỹ thuật & Lập trình",
    icon: <Cpu size={32} />,
    skills: ["Lập trình ứng dụng thông minh", "Tối ưu hóa mã nguồn bằng AI", "Chuyên gia lập trình Viber coding", "Tối ưu hiệu suất trang Web"]
  },
  {
    title: "Tiếp thị & Truyền thông",
    icon: <TrendingUp size={32} />,
    skills: ["Chạy quảng cáo FB & TikTok", "Quản trị hệ thống Fanpage", "Nghiên cứu xu hướng (Trend)", "Chiến lược tăng trưởng nhanh"]
  },
  {
    title: "Sản xuất Media",
    icon: <Camera size={32} />,
    skills: ["Quay phim chuyên nghiệp", "Chụp ảnh nghệ thuật", "Xây dựng kịch bản sáng tạo", "Chiến lược mạng xã hội"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <motion.h2 
          className={styles.heading}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          KỸ NĂNG & CÔNG CỤ
        </motion.h2>
        
        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {skillGroups.map((group, index) => (
            <motion.div 
              key={index}
              className={`${styles.card} glass`}
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -15 },
                visible: { opacity: 1, y: 0, rotateX: 0 }
              }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            >
              <div className={styles.icon}>{group.icon}</div>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <ul className={styles.skillList}>
                {group.skills.map((skill, sIndex) => (
                  <li key={sIndex} className={styles.skillItem}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
