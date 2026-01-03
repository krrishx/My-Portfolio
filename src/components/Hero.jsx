import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import BlurText from './BlurText';
import TextType from './TextType';
import LightRays from './LightRays';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 10% 0', // Added horizontal padding for split layout
            position: 'relative',
            overflow: 'hidden',
            background: 'var(--bg-dark)'
        }}>
            {/* LightRays Background */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#00d4ff"
                    raysSpeed={2.0}
                    lightSpread={1.0}
                    rayLength={1.5}
                    followMouse={true}
                    mouseInfluence={0.2}
                    noiseAmount={0.1}
                    distortion={0.1}
                />
            </div>

            {/* Vertical Social Sidebar */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                style={{
                    position: 'fixed',
                    left: '40px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem',
                    zIndex: 10,
                    // Hide on mobile (breakpoint handled via CSS usually, but here purely inline for simplicity)
                }}
                className="social-sidebar"
            >
                {/* Sidebar Removed - moved to bottom center */}
            </motion.div>

            {/* Social Icons - Bottom Center */}


            {/* Main Content Grid */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '1200px',
                zIndex: 1,
                gap: '4rem',
                flexWrap: 'wrap-reverse' // Wrap reverse for mobile (Text top, Image bottom? Or standard wrap)
            }} className="hero-content">

                {/* Left: Profile Image (Visual Anchor) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{
                        flex: '1 1 400px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <div style={{
                        width: 'clamp(280px, 30vw, 450px)',
                        height: 'clamp(280px, 30vw, 450px)',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at 30% 30%, rgba(203, 161, 53, 0.2), rgba(0, 0, 0, 0))',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 0 60px rgba(0, 212, 255, 0.15)',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden'
                    }}>
                        {/* Placeholder Content for Image */}
                        <div style={{
                            fontSize: 'clamp(3rem, 5vw, 6rem)',
                            fontWeight: '700',
                            color: 'rgba(255,255,255,0.05)',
                            letterSpacing: '-5px',
                            fontFamily: 'Inter',
                            userSelect: 'none'
                        }}>
                            <img
                                src="/profile.jpg"
                                alt="Profile"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    opacity: 0.9,
                                    mixBlendMode: 'luminosity' // Distinctive B&W look like Rudrika's
                                }}
                            />
                        </div>

                        {/* Floating Tech Orbits or decorations could go here */}
                    </div>
                </motion.div>

                {/* Right: Text Content */}
                <div style={{
                    flex: '1 1 500px',
                    // Align left!
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start' // Align left!
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 style={{
                            fontSize: '1.5rem',
                            color: 'var(--primary)',
                            marginBottom: '0.5rem',
                            fontWeight: '600'
                        }}>
                            Hi, I'm
                        </h3>
                    </motion.div>

                    <div style={{ marginBottom: '1rem', color: 'var(--text-primary)', marginLeft: '-5px' }}>
                        <BlurText
                            text="Krrish Raj"
                            delay={100}
                            animateBy="words"
                            direction="top"
                            className="hero-title-left"
                            threshold={0.1}
                            animationFrom={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
                            animationTo={[
                                { filter: 'blur(0px)', opacity: 1, y: 0 }
                            ]}
                        />
                    </div>

                    <div style={{
                        fontSize: '1.5rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem',
                        fontWeight: '300',
                        minHeight: '2rem',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <span style={{ marginRight: '10px', height: '2px', width: '30px', background: 'var(--text-secondary)' }}></span>
                        <TextType
                            text={["Frontend Developer", "UI/UX Designer", "Full Stack Engineer"]}
                            typingSpeed={70}
                            deletingSpeed={40}
                            pauseDuration={2000}
                            loop={true}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        style={{
                            color: 'var(--text-secondary)',
                            fontSize: '1.1rem',
                            maxWidth: '500px',
                            marginBottom: '3rem',
                            lineHeight: '1.6',
                            textAlign: 'left'
                        }}
                    >
                        I design and build beautiful, high-performance web applications with a focus on user experience and modern aesthetics.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <a href="#contact" style={{
                            padding: '16px 40px',
                            background: 'var(--primary)', // Solid Primary
                            color: '#000',
                            borderRadius: '50px',
                            fontWeight: '700',
                            fontSize: '1rem',
                            boxShadow: '0 0 20px rgba(203, 161, 53, 0.4)',
                            border: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            Connect <FaEnvelope />
                        </a>
                    </motion.div>

                    {/* Social Icons - In Flow */}
                    <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
                        <SocialIcon href="https://github.com/krrishx" icon={<FaGithub />} />
                        <SocialIcon href="https://www.linkedin.com/in/krrish-raj-b109b5324/" icon={<FaLinkedin />} />
                        <SocialIcon href="mailto:krrishakaraj@gmail.com" icon={<FaEnvelope />} />
                        <SocialIcon href="https://www.instagram.com/krr1sh.core/" icon={<FaInstagram />} />
                    </div>
                </div>

            </div>

            <style>{`
                .hero-title-left {
                    font-size: clamp(2.5rem, 6vw, 5.5rem);
                    font-weight: 800;
                    line-height: 1.1;
                    font-family: 'Inter', sans-serif;
                    letter-spacing: -2px;
                }
                .hero-content {
                    flex-direction: row;
                }
                @media (max-width: 968px) {
                    .hero-content {
                         /* Stack vertically on mobile, Image on Top? No, Text on Top usually. 
                            If flex-wrap: wrap-reverse is on:
                            - HTML Order: Image (Left), Text (Right).
                            - Wrap Reverse: Text (Right) goes to TOP line. Image (Left) goes to BOTTOM line.
                            - So Text Top, Image Bottom.
                            Let's enforce Text Top, Image Bottom.
                         */
                        flex-direction: column-reverse !important;
                        text-align: center !important;
                        gap: 3rem;
                    }
                    .hero-content > div {
                        text-align: center !important;
                        align-items: center !important;
                    }
                     /* Override paragraphs to be centered on mobile */
                    .hero-content p {
                        text-align: center !important;
                    }
                    .social-sidebar {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

const SocialIcon = ({ href, icon }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, color: 'var(--primary)', x: 5 }}
        style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: '0.3s' }}
    >
        {icon}
    </motion.a>
);

export default Hero;
