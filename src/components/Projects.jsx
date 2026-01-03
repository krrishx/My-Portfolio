import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaAndroid, FaPython, FaReact } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'SmartBite',
            category: 'Mobile App',
            description: 'AI-driven food recommendation app focusing on ingredient-based meal planning.',
            tech: ['Kotlin', 'Firebase', 'Compose'],
            icon: <FaAndroid />,
            link: 'https://github.com/krrishx/SmartBite'
        },
        {
            title: 'ScanGuard',
            category: 'AI Security',
            description: 'Computer vision system for detecting unsafe QR codes and analyzing scanned data.',
            tech: ['Python', 'OpenCV', 'PyTorch'],
            icon: <FaPython />,
            link: 'https://github.com/krrishx/ScanGuard'
        },
        {
            title: 'ZeroTrace',
            category: 'Data Privacy',
            description: 'Secure data wiping solution with tamper-free certification designs.',
            tech: ['React', 'Figma'],
            icon: <FaReact />,
            link: '#'
        }
    ];

    return (
        <section id="projects" style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ marginBottom: '4rem', paddingLeft: '1rem', borderLeft: '2px solid var(--primary)' }}
            >
                <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem' }}>Selected Work</span>
                <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', color: 'var(--text-primary)' }}>Featured Projects</h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ y: -10 }}
                        style={{
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '2px', /* Sharper corners for pro feel */
                            padding: '2.5rem',
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'border-color 0.3s'
                        }}
                    >
                        <div style={{
                            position: 'absolute', top: 0, left: 0, width: '100%', height: '2px',
                            background: 'linear-gradient(90deg, var(--primary), transparent)', opacity: 0.5
                        }} />

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '2rem' }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px' }}>{project.category}</span>
                            <div style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>{project.icon}</div>
                        </div>

                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: '500' }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1rem', fontWeight: '300' }}>
                            {project.description}
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            {project.tech.map(t => (
                                <span key={t} style={{ fontSize: '0.8rem', color: 'var(--primary)', opacity: 0.8 }}>#{t}</span>
                            ))}
                        </div>

                        <a href={project.link} style={{
                            position: 'absolute', bottom: '2.5rem', right: '2.5rem',
                            color: 'var(--text-primary)', opacity: 0.5, transition: '0.3s'
                        }}>
                            <FaExternalLinkAlt />
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
