import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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

    const menuVariants = {
        hidden: { opacity: 0, x: '100%' },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
        exit: { opacity: 0, x: '100%', transition: { duration: 0.3 } }
    };

    return (
        <>
            <div className="navbar-wrapper">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`navbar-glass ${scrolled ? 'scrolled' : ''}`}
                >
                    <a href="#" style={{
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.5px',
                        marginRight: 'auto', // Pushes everything else to right
                        zIndex: 1003,
                        position: 'relative'
                    }}>
                        KR<span style={{ color: 'var(--primary)' }}>.</span>
                    </a>

                    <div className="desktop-menu">
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
                        className="nav-cta-desktop"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '8px 20px',
                            background: 'var(--primary)',
                            color: '#000',
                            borderRadius: '30px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            marginLeft: '2rem'
                        }}
                    >
                        Let's Talk
                    </motion.a>

                    <button 
                        className="mobile-toggle" 
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </motion.nav>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                style={{
                                    fontSize: '2rem',
                                    color: 'var(--text-primary)',
                                    fontWeight: '600'
                                }}
                                whileHover={{ scale: 1.1, color: 'var(--primary)' }}
                            >
                                {link.title}
                            </motion.a>
                        ))}
                        <motion.a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            style={{
                                marginTop: '2rem',
                                padding: '12px 30px',
                                background: 'var(--primary)',
                                color: '#000',
                                borderRadius: '30px',
                                fontSize: '1.2rem',
                                fontWeight: '700'
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            Let's Talk
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
