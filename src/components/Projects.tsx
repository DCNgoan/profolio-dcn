"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import styles from './Projects.module.css';

const projects = [
  {
    title: "DCN Manager",
    desc: "Hệ thống quản lý bài đăng và nội dung đa kênh tích hợp AI. Tối ưu hóa quy trình làm việc cho các đội ngũ sáng tạo nội dung.",
    link: "https://dcn-manager.pages.dev/",
    tech: ["Next.js", "Firebase", "Edge Functions", "Telegram Bot API"],
    image: "/images/project-dcn.jpg"
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>DỰ ÁN TIÊU BIỂU</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`${styles.projectCard} glass`}
              initial={{ opacity: 0, scale: 0.8, rotateX: 20, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
            >
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.desc}</p>
                <div className={styles.techStack}>
                  {project.tech.map((t, i) => (
                    <span key={i} className={styles.techTag}>{t}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                    <ExternalLink size={20} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
