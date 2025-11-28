import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import
{
    CheckCircle,
    Award,
    Users,
    TrendingUp,
    Briefcase,
    Calendar,
    Code,
    Database,
    Globe,
    Cloud
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

const About = () =>
{
    return (
        <div className="about-page">
            {/* Header Section */}
            <section className="section" style={{ background: 'var(--bg-dark)', color: 'white', padding: '6rem 0' }}>
                <div className="container text-center">
                    <motion.div
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <div style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.5rem',
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: '50px',
                            marginBottom: '1.5rem',
                            fontWeight: 600,
                            color: 'var(--secondary)'
                        }}>
                            25+ Years of Experience
                        </div>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white' }}>
                            Meet Felix Battig
                        </h1>
                        <h2 style={{ fontSize: '1.5rem', color: '#94A3B8', fontWeight: 400 }}>
                            Senior IT Consultant & Digital Transformation Expert
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* Professional Summary & Photo */}
            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    width: '100%',
                                    height: '500px',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-xl)'
                                }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Felix Battig working"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                {/* Floating Badge */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '30px',
                                    right: '-20px',
                                    background: 'white',
                                    padding: '1.5rem',
                                    borderRadius: '16px',
                                    boxShadow: 'var(--shadow-lg)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem'
                                }}>
                                    <div style={{ background: '#EFF6FF', padding: '0.75rem', borderRadius: '50%', color: 'var(--primary)' }}>
                                        <Award size={24} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, fontSize: '1.25rem' }}>25+</div>
                                        <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Years Experience</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Bridging the Gap Between Business & Technology</h2>
                            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                I am a Senior IT Consultant dedicated to helping small and medium-sized businesses in the GTA navigate the complex world of technology.
                            </p>
                            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                                With a deep technical background in <strong>.NET, SQL Server, Angular, and Azure</strong>, I don't just advise—I build. My career has been spent designing and implementing enterprise-grade solutions that are robust, secure, and scalable. Now, I bring that same level of engineering rigor to SMBs, helping them modernize their legacy systems and embrace digital transformation.
                            </p>

                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                                <div style={{ background: '#F1F5F9', padding: '0.5rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
                                    <Code size={16} color="var(--primary)" /> .NET Core & C#
                                </div>
                                <div style={{ background: '#F1F5F9', padding: '0.5rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
                                    <Database size={16} color="var(--primary)" /> SQL Server
                                </div>
                                <div style={{ background: '#F1F5F9', padding: '0.5rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
                                    <Globe size={16} color="var(--primary)" /> Angular & React
                                </div>
                                <div style={{ background: '#F1F5F9', padding: '0.5rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
                                    <Cloud size={16} color="var(--primary)" /> Azure Cloud
                                </div>
                            </div>

                            <Link to="/contact" className="btn btn-primary">
                                Book Free Consultation
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Differentiators */}
            <section className="section" style={{ background: '#F8FAFC' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>What Makes My Work Different</h2>
                        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
                            I offer a unique blend of high-level strategy and hands-on technical execution.
                        </p>
                    </div>

                    <motion.div
                        className="grid-3"
                        variants={staggerContainer}
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="card" style={{ padding: '2rem' }}>
                            <div style={{ width: '50px', height: '50px', background: '#DBEAFE', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                                <Users size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Personal Attention</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                You work directly with me, not a junior account manager. I take the time to understand your specific business processes and pain points.
                            </p>
                        </div>

                        <div className="card" style={{ padding: '2rem' }}>
                            <div style={{ width: '50px', height: '50px', background: '#DCFCE7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#10B981' }}>
                                <TrendingUp size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Affordable for SMBs</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                I provide enterprise-level expertise at a price point that makes sense for small and medium businesses. No bloated agency fees.
                            </p>
                        </div>

                        <div className="card" style={{ padding: '2rem' }}>
                            <div style={{ width: '50px', height: '50px', background: '#F3E8FF', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#7C3AED' }}>
                                <Award size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Enterprise Quality</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                I apply the same rigorous standards for security, performance, and reliability that I've used for large corporate clients.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Experience Timeline</h2>

                    <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                        {/* Vertical Line */}
                        <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '2px', background: '#E2E8F0' }}></div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ marginBottom: '3rem', position: 'relative' }}
                        >
                            <div style={{ position: 'absolute', left: '-2.6rem', top: '0', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--primary)', border: '4px solid white', boxShadow: '0 0 0 2px var(--primary)' }}></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: 600 }}>
                                <Calendar size={16} /> 2018 - Present
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Independent Senior Consultant</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Helping SMBs in the GTA modernize their IT infrastructure, migrate to the cloud, and build custom software solutions.
                            </p>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ marginBottom: '3rem', position: 'relative' }}
                        >
                            <div style={{ position: 'absolute', left: '-2.6rem', top: '0', width: '20px', height: '20px', borderRadius: '50%', background: '#CBD5E1', border: '4px solid white', boxShadow: '0 0 0 2px #CBD5E1' }}></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#64748B', fontWeight: 600 }}>
                                <Calendar size={16} /> 2010 - 2018
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Senior Solution Architect</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Led the architecture and development of large-scale enterprise applications using .NET and SQL Server for major financial institutions.
                            </p>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ marginBottom: '3rem', position: 'relative' }}
                        >
                            <div style={{ position: 'absolute', left: '-2.6rem', top: '0', width: '20px', height: '20px', borderRadius: '50%', background: '#CBD5E1', border: '4px solid white', boxShadow: '0 0 0 2px #CBD5E1' }}></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#64748B', fontWeight: 600 }}>
                                <Calendar size={16} /> 2000 - 2010
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Software Developer & Team Lead</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Full-stack development of web and desktop applications. Mentored junior developers and established coding standards.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center', padding: '6rem 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Ready to Modernize Your Business?</h2>
                    <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                        Let's discuss how my experience can help you solve your technology challenges.
                    </p>
                    <Link to="/contact" className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '1rem 2.5rem', fontSize: '1.125rem', border: 'none' }}>
                        Book Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
