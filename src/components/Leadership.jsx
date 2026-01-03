import { motion } from 'framer-motion';

const Leadership = () => {
    return (
        <section id="leadership" style={{ padding: '8rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '2px',
                    padding: '4rem',
                    position: 'relative'
                }}
            >
                {/* Decorative Corner */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '40px', borderTop: '2px solid var(--primary)', borderLeft: '2px solid var(--primary)', opacity: 0.5 }}></div>

                <div style={{ marginBottom: '3rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--primary)', letterSpacing: '2px', textTransform: 'uppercase' }}>Leadership & Community</span>
                    <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginTop: '0.5rem' }}>Impact Beyond Code</h2>
                </div>

                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Federation of Entrepreneurship Development</h3>
                    <p style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1rem', fontStyle: 'italic' }}>Senior Executive | July 2025 - Present</p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        Driving innovation at one of Odisha's leading startup ecosystems. My role involves orchestrating UI/UX strategies for promotional assets and producing high-quality podcast content for the Technology Business Incubator (TBI).
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', borderTop: '1px solid var(--glass-border)', paddingTop: '3rem' }}>
                    <div>
                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Awards</h4>
                        <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                            <li style={{ marginBottom: '0.5rem' }}>• <strong>2nd Position</strong> University Hackathon</li>
                            <li>• <strong>Top 50</strong> Smart India Hackathon 2025</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Certifications</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {["Google Cloud AI", "Goldman Sachs Ops", "Deloitte Cyber", "Udemy Python"].map((c, i) => (
                                <span key={i} style={{ fontSize: '0.8rem', padding: '4px 10px', border: '1px solid var(--glass-border)', borderRadius: '20px', color: 'var(--text-secondary)' }}>{c}</span>
                            ))}
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default Leadership;
