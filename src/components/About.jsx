import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{ color: 'var(--primary)', marginBottom: '2rem', fontSize: '2rem' }}
            >
                About Me
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}
            >
                I am a Bachelor of Technology student in Computer Science Engineering at Kalinga Institute of Industrial Technology, Bhubaneswar.
                With a CGPA of 8.3, I bridge the gap between academic theory and practical application.
                <br /><br />
                My passion lies in <strong>Full Stack Development</strong> and <strong>AI/ML</strong>. I love building intuitive, user-centric applications that solve real-world problems.
                I am proficient in Java, Python, and modern web technologies like React.js and Node.js.
                <br /><br />
                Beyond coding, I am an active leader, serving as a Senior Executive at the Federation of Entrepreneurship Development, where I hone my public speaking and team management skills.
            </motion.p>
        </section>
    );
};

export default About;
