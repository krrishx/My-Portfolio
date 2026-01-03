import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <footer id="contact" style={{
            background: 'rgba(0, 0, 0, 0.8)',
            padding: '4rem 2rem 2rem',
            borderTop: '1px solid var(--glass-border)',
            marginTop: '4rem'
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--primary)' }}
                >
                    Get In Touch
                </motion.h2>

                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    Feel free to reach out for collaborations or just a friendly hello!
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
                    <a href="mailto:krrishakaraj@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-primary)', fontSize: '1.2rem' }}>
                        <FaEnvelope color="var(--primary)" /> krrishakaraj@gmail.com
                    </a>
                    <a href="tel:9304773391" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-primary)', fontSize: '1.2rem' }}>
                        <FaPhone color="var(--primary)" /> 9304773391
                    </a>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
                    <SocialLink href="https://www.linkedin.com/in/krrish-raj-b109b5324/" icon={<FaLinkedin size={30} />} />
                    <SocialLink href="https://github.com/krrishx" icon={<FaGithub size={30} />} />
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} Krrish Raj. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon }) => (
    <motion.a
        href={href}
        whileHover={{ y: -5, color: 'var(--primary)' }}
        style={{ color: 'var(--text-secondary)', transition: '0.3s' }}
    >
        {icon}
    </motion.a>
);

export default Contact;
