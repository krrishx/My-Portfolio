import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiKotlin, SiOpencv, SiMongodb, SiFigma } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Kotlin", icon: <SiKotlin /> },
        { name: "OpenCV", icon: <SiOpencv /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "Git", icon: <FaGitAlt /> }
    ];

    return (
        <section id="skills" style={{ padding: '8rem 2rem', background: 'var(--glass-bg)' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Technical Arsenal</h2>
                    <div style={{ width: '60px', height: '2px', background: 'var(--primary)', margin: '0 auto' }}></div>
                </motion.div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5, background: 'rgba(255, 255, 255, 0.05)' }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '2rem',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '8px',
                                cursor: 'default',
                                transition: 'all 0.3s'
                            }}
                        >
                            <div style={{ fontSize: '2.5rem', color: 'var(--text-secondary)', marginBottom: '1rem', transition: '0.3s' }}>
                                {skill.icon}
                            </div>
                            <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: '500' }}>{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2rem;
                }
                @media (min-width: 768px) {
                    .skills-grid {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }
                @media (min-width: 1024px) {
                    .skills-grid {
                        grid-template-columns: repeat(5, 1fr);
                    }
                }
            `}</style>
        </section>
    );
};

export default Skills;
