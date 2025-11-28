import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import
{
    Mail,
    MapPin,
    Phone,
    Send,
    CheckCircle,
    Loader2,
    AlertCircle
} from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Contact = () =>
{
    const form = useRef();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        businessName: '',
        service: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) =>
    {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Basic Validation
        if (!formState.name || !formState.email || !formState.message)
        {
            setError('Please fill in all required fields.');
            setIsLoading(false);
            return;
        }

        // EmailJS Integration
        // NOTE: Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your actual EmailJS credentials.
        // You can get these from https://dashboard.emailjs.com/
        emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            form.current,
            'YOUR_PUBLIC_KEY'
        )
            .then((result) =>
            {
                console.log(result.text);
                setIsSubmitted(true);
                setIsLoading(false);
                setFormState({
                    name: '',
                    email: '',
                    businessName: '',
                    service: '',
                    message: ''
                });
            }, (error) =>
            {
                console.log(error.text);
                setError('Failed to send message. Please try again later or email us directly.');
                setIsLoading(false);
            });
    };

    return (
        <div className="contact-page">
            <section className="section" style={{ background: 'var(--bg-dark)', color: 'white', padding: '6rem 0' }}>
                <div className="container text-center">
                    <motion.div
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white' }}>
                            Get in Touch
                        </h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.9)' }}>
                            Ready to modernize your business? Fill out the form below or reach out directly.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ gap: '4rem', alignItems: 'start' }}>

                        {/* Contact Form */}
                        <motion.div
                            animate={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="card"
                            style={{ padding: '2.5rem' }}
                        >
                            {isSubmitted ? (
                                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                                    <div style={{ display: 'inline-flex', padding: '1rem', borderRadius: '50%', background: '#DCFCE7', color: '#10B981', marginBottom: '1.5rem' }}>
                                        <CheckCircle size={48} />
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Message Sent!</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>
                                        Thank you for reaching out. I will get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="btn btn-outline"
                                        style={{ marginTop: '2rem' }}
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form ref={form} onSubmit={handleSubmit}>
                                    <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Send a Message</h2>

                                    {error && (
                                        <div style={{ background: '#FEE2E2', color: '#DC2626', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <AlertCircle size={20} />
                                            {error}
                                        </div>
                                    )}

                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem' }}
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formState.email}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem' }}
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Business Name</label>
                                        <input
                                            type="text"
                                            name="businessName"
                                            value={formState.businessName}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem' }}
                                            placeholder="Your Company Ltd."
                                        />
                                    </div>

                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Service of Interest</label>
                                        <select
                                            name="service"
                                            value={formState.service}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem', background: 'white' }}
                                        >
                                            <option value="">Select a service...</option>
                                            <option value="IT Modernization">IT Modernization</option>
                                            <option value="AI & Automation">AI & Automation</option>
                                            <option value="Cloud Consulting">Cloud & Azure Consulting</option>
                                            <option value="Web Development">Website Upgrades</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div style={{ marginBottom: '2rem' }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message *</label>
                                        <textarea
                                            name="message"
                                            required
                                            value={formState.message}
                                            onChange={handleChange}
                                            rows="5"
                                            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem', fontFamily: 'inherit' }}
                                            placeholder="Tell me about your project or challenge..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={isLoading}
                                        style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', opacity: isLoading ? 0.7 : 1 }}
                                    >
                                        {isLoading ? (
                                            <>Sending... <Loader2 size={18} className="animate-spin" /></>
                                        ) : (
                                            <>Send Message <Send size={18} /></>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>

                        {/* Sidebar Info */}
                        <motion.div
                            animate={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Contact Information</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <div style={{ background: '#EFF6FF', padding: '0.75rem', borderRadius: '12px', color: 'var(--primary)' }}>
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Email</div>
                                            <a href="mailto:info@ModernizeWithFelix.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>info@ModernizeWithFelix.com</a>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <div style={{ background: '#EFF6FF', padding: '0.75rem', borderRadius: '12px', color: 'var(--primary)' }}>
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Location</div>
                                            <div style={{ color: 'var(--text-secondary)' }}>Toronto, Ontario<br />Serving the Greater Toronto Area</div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <div style={{ background: '#EFF6FF', padding: '0.75rem', borderRadius: '12px', color: 'var(--primary)' }}>
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Phone</div>
                                            <div style={{ color: 'var(--text-secondary)' }}>+1 (416) 555-0123</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map / Image Placeholder */}
                            <div style={{
                                width: '100%',
                                height: '300px',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-lg)',
                                position: 'relative'
                            }}>
                                <img
                                    src="https://images.unsplash.com/photo-1503206557829-c19be6574543?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Toronto Skyline"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                    padding: '2rem 1.5rem 1rem',
                                    color: 'white'
                                }}>
                                    <div style={{ fontWeight: 600 }}>Based in Toronto</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
