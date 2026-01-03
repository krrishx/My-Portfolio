import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'About', href: '#about' },
        { title: 'Projects', href: '#projects' },
        { title: 'Leadership', href: '#leadership' },
        { title: 'Contact', href: '#contact' },
    ];

    return (
        <div style={{
            position: 'fixed',
            top: 20,
            left: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            zIndex: 1000,
            pointerEvents: 'none' /* Passthrough for area outside nav */
        }}>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    pointerEvents: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3rem',
                    padding: '1rem 3rem',
                    background: scrolled ? 'rgba(5, 5, 17, 0.8)' : 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(15px)',
                    borderRadius: '50px',
                    border: '1px solid var(--glass-border)',
                    boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none',
                    transition: 'all 0.3s ease'
                }}
            >
                <a href="#" style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.5px',
                    marginRight: '1rem'
                }}>
                    KR<span style={{ color: 'var(--primary)' }}>.</span>
                </a>

                <div className="desktop-menu" style={{ display: 'flex', gap: '2.5rem' }}>
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.9rem',
                                fontWeight: '400',
                                position: 'relative'
                            }}
                            whileHover={{ color: 'var(--text-primary)', y: -2 }}
                        >
                            {link.title}
                        </motion.a>
                    ))}
                </div>

                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        padding: '8px 20px',
                        background: 'var(--primary)',
                        color: '#000',
                        borderRadius: '30px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        opacity: 1,
                        transform: 'scale(1)',
                        transition: 'all 0.3s'
                    }}
                >
                    Let's Talk
                </motion.a>
            </motion.nav>
        </div>
    );
};

export default Navbar;
