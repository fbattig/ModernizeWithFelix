import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import
{
    Monitor,
    Cpu,
    Cloud,
    Layout,
    CheckCircle,
    ArrowRight,
    Code,
    Database,
    Server,
    Shield,
    Zap,
    MessageSquare
} from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ServiceDetail = ({ title, description, features, icon: Icon, color, index }) =>
{
    const isEven = index % 2 === 0;

    return (
        <motion.div
            animate="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="service-block"
            style={{
                padding: '5rem 0',
                background: isEven ? 'white' : '#F8FAFC',
                borderBottom: '1px solid #F1F5F9'
            }}
        >
            <div className="container">
                <div className="grid-2" style={{ alignItems: 'center', gap: '4rem', direction: isEven ? 'ltr' : 'rtl' }}>

                    {/* Text Content */}
                    <div style={{ direction: 'ltr' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            background: `${color}15`,
                            color: color,
                            borderRadius: '50px',
                            fontWeight: 600,
                            marginBottom: '1.5rem'
                        }}>
                            <Icon size={20} />
                            <span>Service {index + 1}</span>
                        </div>

                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{title}</h2>
                        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            {description}
                        </p>

                        <ul style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '2.5rem' }}>
                            {features.map((feature, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                    <CheckCircle size={20} color={color} style={{ marginTop: '4px', flexShrink: 0 }} />
                                    <span style={{ fontSize: '1.05rem' }}>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Link to="/contact" className="btn" style={{
                            backgroundColor: color,
                            color: 'white',
                            boxShadow: `0 4px 14px 0 ${color}50`
                        }}>
                            Request Proposal
                        </Link>
                    </div>

                    {/* Visual/Card */}
                    <div style={{ direction: 'ltr' }}>
                        <div style={{
                            background: 'white',
                            borderRadius: '24px',
                            padding: '2rem',
                            boxShadow: 'var(--shadow-xl)',
                            border: '1px solid rgba(0,0,0,0.05)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Decorative background element */}
                            <div style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '200px',
                                height: '200px',
                                background: `${color}10`,
                                borderRadius: '50%',
                                zIndex: 0
                            }}></div>

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }}></div>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }}></div>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }}></div>
                                </div>

                                {/* Mock UI based on service type */}
                                {index === 0 && (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div style={{ padding: '1rem', background: '#F1F5F9', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ fontWeight: 600 }}>Legacy System</span>
                                            <span style={{ color: '#EF4444' }}>Deprecated</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <ArrowRight color={color} />
                                        </div>
                                        <div style={{ padding: '1rem', background: `${color}10`, border: `1px solid ${color}`, borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ fontWeight: 600, color: color }}>Modern Web App</span>
                                            <span style={{ color: '#10B981' }}>Active</span>
                                        </div>
                                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                            <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: '#E2E8F0', borderRadius: '4px' }}>.NET Core</span>
                                            <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: '#E2E8F0', borderRadius: '4px' }}>Blazor</span>
                                            <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: '#E2E8F0', borderRadius: '4px' }}>SQL Server</span>
                                        </div>
                                    </div>
                                )}

                                {index === 1 && (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                                <Zap size={20} />
                                            </div>
                                            <div style={{ background: '#F1F5F9', padding: '1rem', borderRadius: '12px', borderRadiusTopLeft: '0', flex: 1 }}>
                                                <p style={{ fontSize: '0.875rem', margin: 0 }}>Analyzing your documents...</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                                <Zap size={20} />
                                            </div>
                                            <div style={{ background: '#F1F5F9', padding: '1rem', borderRadius: '12px', borderRadiusTopLeft: '0', flex: 1 }}>
                                                <p style={{ fontSize: '0.875rem', margin: 0 }}><strong>Insight Found:</strong> 25% cost reduction opportunity identified in logistics.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {index === 2 && (
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '12px', textAlign: 'center' }}>
                                            <Server size={32} color={color} style={{ marginBottom: '0.5rem' }} />
                                            <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Azure VM</div>
                                            <div style={{ fontSize: '0.75rem', color: '#10B981' }}>Running</div>
                                        </div>
                                        <div style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '12px', textAlign: 'center' }}>
                                            <Database size={32} color={color} style={{ marginBottom: '0.5rem' }} />
                                            <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>SQL DB</div>
                                            <div style={{ fontSize: '0.75rem', color: '#10B981' }}>Optimized</div>
                                        </div>
                                        <div style={{ padding: '1rem', background: `${color}10`, borderRadius: '12px', gridColumn: 'span 2', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Shield size={20} color={color} />
                                            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>MFA & Security Hardening Active</span>
                                        </div>
                                    </div>
                                )}

                                {index === 3 && (
                                    <div style={{ border: '1px solid #E2E8F0', borderRadius: '8px', overflow: 'hidden' }}>
                                        <div style={{ height: '100px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Layout size={40} color="#94A3B8" />
                                        </div>
                                        <div style={{ padding: '1rem' }}>
                                            <div style={{ height: '10px', width: '60%', background: color, borderRadius: '5px', marginBottom: '0.5rem' }}></div>
                                            <div style={{ height: '8px', width: '80%', background: '#E2E8F0', borderRadius: '4px', marginBottom: '0.25rem' }}></div>
                                            <div style={{ height: '8px', width: '70%', background: '#E2E8F0', borderRadius: '4px' }}></div>

                                            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600 }}>
                                                <span style={{ color: '#10B981' }}>SEO Score: 98</span>
                                                <span style={{ color: '#10B981' }}>Speed: 100</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

const ServicesPage = () =>
{
    return (
        <div className="services-page">
            <section className="section" style={{ background: 'var(--primary)', color: 'white', padding: '6rem 0 4rem 0' }}>
                <div className="container text-center">
                    <motion.h1
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white' }}
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.9)' }}
                    >
                        Tailored technology solutions designed to help your business grow, scale, and succeed in the digital age.
                    </motion.p>
                </div>
            </section>

            <ServiceDetail
                index={0}
                title="IT Modernization & Custom Development"
                description="We breathe new life into your business operations by replacing outdated legacy systems with modern, scalable, and secure custom software."
                features={[
                    "Expertise in .NET Core, Blazor, Angular, and SQL Server",
                    "Replace fragile Excel & Access systems with robust web apps",
                    "Build internal dashboards for real-time business visibility",
                    "Automate complex workflows to reduce manual errors"
                ]}
                icon={Monitor}
                color="#2563EB" // Primary Blue
            />

            <ServiceDetail
                index={1}
                title="AI & Automation"
                description="Leverage the power of Artificial Intelligence to automate repetitive tasks and gain deeper insights into your business data."
                features={[
                    "Custom AI assistants for customer support or internal knowledge",
                    "Intelligent document extraction workflows (OCR + AI)",
                    "Automated Email & SMS communication systems",
                    "Predictive analytics to optimize business operations"
                ]}
                icon={Cpu}
                color="#7C3AED" // Violet
            />

            <ServiceDetail
                index={2}
                title="Cloud & Azure Consulting"
                description="Move your business to the cloud with confidence. We handle the strategy, migration, and ongoing management of your Azure infrastructure."
                features={[
                    "Azure Web Apps and Azure SQL configuration",
                    "Seamless cloud migrations and reliable backup strategies",
                    "Virtual Machine (VM) setup and optimization",
                    "MFA implementation and security hardening"
                ]}
                icon={Cloud}
                color="#0EA5E9" // Sky Blue
            />

            <ServiceDetail
                index={3}
                title="Website Upgrades & Branding"
                description="Your website is your digital storefront. We create stunning, high-performance websites that convert visitors into customers."
                features={[
                    "Modern, responsive web design that works on all devices",
                    "Advanced SEO optimization to improve search rankings",
                    "Performance tuning for lightning-fast load times",
                    "Security enhancements to protect against threats"
                ]}
                icon={Layout}
                color="#EC4899" // Pink
            />

            <section className="section" style={{ textAlign: 'center', padding: '6rem 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Not sure what you need?</h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                        Let's have a conversation about your business goals and find the right solution for you.
                    </p>
                    <Link to="/contact" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
