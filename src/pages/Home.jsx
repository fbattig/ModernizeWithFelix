import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import
{
    ArrowRight,
    Monitor,
    Cpu,
    Cloud,
    Layout,
    Linkedin,
    Mail
} from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const Hero = () =>
{
    return (
        <section id="hero" className="section" style={{
            paddingTop: '160px',
            paddingBottom: '140px',
            background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Abstract Background Shapes */}
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(96,165,250,0.1) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    animate="visible"
                    variants={fadeInUp}
                    style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
                >
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
                        Modernize Your Business with <span style={{ color: 'var(--primary)' }}>Technology, Automation, and AI</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: 'var(--text-secondary)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Helping GTA businesses eliminate manual work and upgrade their digital systems for the modern era.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Book Free Consultation
                        </Link>
                        <Link to="/services" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem', background: 'white' }}>
                            View Services
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ServiceCard = ({ icon: Icon, title, description }) => (
    <motion.div variants={fadeInUp} className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)' }}>
        <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            color: 'var(--primary)',
            boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.1)'
        }}>
            <Icon size={28} strokeWidth={1.5} />
        </div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600 }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', flex: 1, fontSize: '1rem', lineHeight: '1.6' }}>{description}</p>
    </motion.div>
);

const ServicesSummary = () =>
{
    return (
        <section id="services" className="section" style={{ background: 'white' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                    style={{ marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem' }}>Our Expertise</h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>Comprehensive solutions to drive your business forward.</p>
                </motion.div>

                <motion.div
                    className="grid-2"
                    style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}
                    variants={staggerContainer}
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <ServiceCard
                        icon={Monitor}
                        title="IT Modernization"
                        description="Upgrade legacy systems and infrastructure to improve performance, security, and reliability."
                    />
                    <ServiceCard
                        icon={Cpu}
                        title="AI & Automation"
                        description="Streamline repetitive tasks and unlock insights with cutting-edge artificial intelligence solutions."
                    />
                    <ServiceCard
                        icon={Cloud}
                        title="Cloud & Azure Solutions"
                        description="Secure migration and management of cloud infrastructure to enable remote work and scalability."
                    />
                    <ServiceCard
                        icon={Layout}
                        title="Website Upgrades"
                        description="Transform your online presence with modern, responsive, and high-converting web designs."
                    />
                </motion.div>
            </div>
        </section>
    );
};

const About = () =>
{
    return (
        <section id="about" className="section" style={{ background: '#F8FAFC' }}>
            <div className="container">
                <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                    <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <div style={{
                            width: '300px',
                            height: '300px',
                            borderRadius: '50%',
                            background: '#CBD5E1',
                            overflow: 'hidden',
                            border: '8px solid white',
                            boxShadow: 'var(--shadow-xl)',
                            position: 'relative'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Felix Battig"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About Felix</h2>
                        <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: 600 }}>
                            Senior IT Consultant with 25+ Years of Enterprise Experience
                        </h3>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                            I specialize in bridging the gap between complex technology and business goals. With over two decades of experience working with enterprise-level systems, I now bring that same level of expertise and discipline to small and medium businesses in the GTA.
                        </p>
                        <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                            My mission is simple: to help you eliminate technical debt, automate manual processes, and build a technology foundation that scales with your ambition.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}><Linkedin /></a>
                            <a href="mailto:felix@example.com" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}><Mail /></a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const CaseStudyCard = ({ title, category }) => (
    <motion.div variants={fadeInUp} className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ height: '200px', background: '#E2E8F0', position: 'relative' }}>
            {/* Placeholder for image */}
            <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#94A3B8',
                background: 'linear-gradient(45deg, #F1F5F9 25%, #E2E8F0 25%, #E2E8F0 50%, #F1F5F9 50%, #F1F5F9 75%, #E2E8F0 75%, #E2E8F0 100%)',
                backgroundSize: '20px 20px'
            }}>
            </div>
        </div>
        <div style={{ padding: '1.5rem' }}>
            <div style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                {category}
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{title}</h3>
            <Link to="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-main)' }}>
                Read Case Study <ArrowRight size={16} />
            </Link>
        </div>
    </motion.div>
);

const CaseStudies = () =>
{
    return (
        <section id="case-studies" className="section" style={{ background: 'white' }}>
            <div className="container">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                    style={{ marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem' }}>Recent Success Stories</h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>See how we've helped other businesses transform.</p>
                </motion.div>

                <motion.div
                    className="grid-3"
                    variants={staggerContainer}
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <CaseStudyCard
                        title="Accounting System Modernization"
                        category="Finance"
                    />
                    <CaseStudyCard
                        title="Logistics Dashboard Automation"
                        category="Operations"
                    />
                    <CaseStudyCard
                        title="Clinic Appointment Automation"
                        category="Healthcare"
                    />
                </motion.div>
            </div>
        </section>
    );
};

const CTA = () =>
{
    return (
        <section id="contact" className="section" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center', padding: '6rem 0' }}>
            <div className="container">
                <motion.div
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '1.5rem' }}>Let’s Modernize Your Business Today</h2>
                    <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                        Schedule a free 30-minute discovery call to discuss your current challenges and how we can solve them.
                    </p>
                    <Link to="/contact" className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '1rem 2.5rem', fontSize: '1.125rem', border: 'none' }}>
                        Schedule a Call
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

const Home = () =>
{
    return (
        <>
            <Hero />
            <ServicesSummary />
            <About />
            <CaseStudies />
            <CTA />
        </>
    );
};

export default Home;
