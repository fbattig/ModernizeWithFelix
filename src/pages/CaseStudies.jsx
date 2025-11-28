import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import
{
    ArrowRight,
    TrendingUp,
    Clock,
    CheckCircle,
    FileText,
    Calendar,
    Truck
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

const CaseStudyCard = ({ title, problem, solution, result, icon: Icon, color, category }) => (
    <motion.div
        variants={fadeInUp}
        className="card"
        style={{
            padding: 0,
            overflow: 'hidden',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}
    >
        <div style={{ height: '200px', background: `${color}15`, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '20px',
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)'
            }}>
                <Icon size={40} color={color} />
            </div>
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'white', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 600, color: color }}>
                {category}
            </div>
        </div>

        <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>{title}</h3>

            <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: '#94A3B8', fontWeight: 700, marginBottom: '0.5rem' }}>The Problem</h4>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>{problem}</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: '#94A3B8', fontWeight: 700, marginBottom: '0.5rem' }}>The Solution</h4>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>{solution}</p>
            </div>

            <div style={{ marginTop: 'auto', background: '#F8FAFC', padding: '1rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10B981', fontWeight: 700, marginBottom: '0.25rem' }}>
                    <TrendingUp size={18} /> Result
                </div>
                <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-main)' }}>{result}</p>
            </div>
        </div>
    </motion.div>
);

const CaseStudies = () =>
{
    return (
        <div className="case-studies-page">
            <section className="section" style={{ background: 'var(--bg-dark)', color: 'white', padding: '6rem 0' }}>
                <div className="container text-center">
                    <motion.div
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white' }}>
                            Real Results for Real Businesses
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.9)' }}>
                            See how we've helped companies in the GTA overcome their technology hurdles and achieve measurable growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <motion.div
                        className="grid-3"
                        variants={staggerContainer}
                        animate="visible"
                        viewport={{ once: true }}
                    >
                        <CaseStudyCard
                            title="Accounting Firm System Modernization"
                            category="Finance"
                            problem="Legacy Excel files were constantly crashing due to data volume, leading to data corruption and hours of manual reporting work every week."
                            solution="Developed a custom .NET Core application with a secure SQL Server database to centralize data and automate reporting workflows."
                            result="55% faster processing time for monthly reports and zero data corruption incidents since launch."
                            icon={FileText}
                            color="#2563EB"
                        />

                        <CaseStudyCard
                            title="Clinic Appointment Automation"
                            category="Healthcare"
                            problem="Front-desk staff were spending 3+ hours daily calling patients to confirm appointments, yet no-shows remained high."
                            solution="Implemented a web-based scheduling system integrated with automated SMS and email reminders for patients."
                            result="80% fewer missed appointments and staff reclaimed 15 hours per week for higher-value tasks."
                            icon={Calendar}
                            color="#EC4899"
                        />

                        <CaseStudyCard
                            title="Logistics Dashboard & Driver Tracking"
                            category="Logistics"
                            problem="Dispatchers relied on paper forms and WhatsApp messages to track deliveries, causing delays and lack of visibility for customers."
                            solution="Built a centralized dashboard with real-time driver tracking and a mobile-friendly interface for status updates."
                            result="Real-time reporting enabled 100% visibility and improved on-time delivery rates by 25%."
                            icon={Truck}
                            color="#F59E0B"
                        />
                    </motion.div>
                </div>
            </section>

            <section className="section" style={{ textAlign: 'center', padding: '6rem 0', background: '#F8FAFC' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Have a similar challenge?</h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                        Every business is unique, but the principles of modernization apply to everyone.
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                        Discuss Your Project
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CaseStudies;
