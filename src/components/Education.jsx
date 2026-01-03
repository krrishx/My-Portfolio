import { motion } from 'framer-motion';

const Education = () => {
    const educationData = [
        {
            institution: 'Kalinga Institute of Industrial Technology, Bhubaneswar',
            degree: 'B.Tech in Computer Science Engineering',
            duration: '2024 - 2028',
            score: 'CGPA: 8.3'
        },
        {
            institution: 'Delhi Public School, Bokaro Steel City',
            degree: 'CBSE - Science Stream',
            duration: 'Grad. 2024',
            score: '84.00%'
        }
    ];

    return (
        <section style={{ padding: '2rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <motion.h3
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ color: 'var(--text-primary)', marginBottom: '2rem', fontSize: '1.5rem' }}
            >
                Education
            </motion.h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', borderLeft: '2px solid var(--glass-border)', paddingLeft: '2rem' }}>
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        style={{ position: 'relative' }}
                    >
                        {/* Dot on timeline */}
                        <div style={{
                            position: 'absolute',
                            left: '-2.6rem',
                            top: '0.5rem',
                            width: '1rem',
                            height: '1rem',
                            background: 'var(--primary)',
                            borderRadius: '50%',
                            boxShadow: '0 0 10px var(--primary)'
                        }}></div>

                        <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{edu.institution}</h4>
                        <p style={{ color: 'var(--primary)', fontStyle: 'italic' }}>{edu.degree}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                            <span>{edu.duration}</span>
                            <span>{edu.score}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
