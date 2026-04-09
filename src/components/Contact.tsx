"use client";

import { motion } from 'framer-motion';
import { Phone, Globe, Mail, MapPin, MessageCircle } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>LIÊN HỆ</h2>
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
          <motion.div 
            className={styles.contactInfo}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={styles.subheading}>Hãy cùng tạo ra điều tuyệt vời!</h3>
            <p className={styles.desc}>
              Tôi luôn sẵn sàng cho những cơ hội hợp tác mới, đặc biệt là các dự án liên quan đến AI và Content.
            </p>
            
            <motion.div 
              className={styles.infoItems}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {[
                { icon: <Phone className={styles.icon} />, text: "0869.122.646" },
                { icon: <MessageCircle className={styles.icon} />, text: "Zalo: 0869.122.646" },
                { icon: <Globe className={styles.icon} />, text: "fb.com/DCNgoan", link: "https://www.facebook.com/DCNgoan/" },
                { icon: <MapPin className={styles.icon} />, text: "Châu Thành, An Giang" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className={styles.item}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  {item.icon}
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.form 
            className={`${styles.form} glass`}
            variants={{
              hidden: { opacity: 0, x: 100, rotateY: -10 },
              visible: { opacity: 1, x: 0, rotateY: 0 }
            }}
            transition={{ duration: 1, type: "spring" }}
          >
            <div className={styles.formGroup}>
              <label>Tên của bạn</label>
              <input type="text" placeholder="Nguyễn Văn A" />
            </div>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input type="email" placeholder="email@example.com" />
            </div>
            <div className={styles.formGroup}>
              <label>Lời nhắn</label>
              <textarea placeholder="Tôi muốn hợp tác về dự án..." rows={4}></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>Gửi lời nhắn</button>
          </motion.form>
        </motion.div>
      </div>
      
      <footer className={styles.footer}>
        <p>© 2026 Dương Chí Ngoan. Build with AI & Next.js</p>
      </footer>
    </section>
  );
}
