import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';


import './Chatbot.css';

const Chatbot = () =>
{
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi there! I'm Felix AI. How can I help you today?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = () =>
    {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() =>
    {
        scrollToBottom();
    }, [messages]);

    const toggleChat = () =>
    {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e) =>
    {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e) =>
    {
        if (e.key === 'Enter')
        {
            handleSend();
        }
    };

    const generateResponse = (text) =>
    {
        const lowerText = text.toLowerCase();

        // Knowledge Base Logic
        if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('rate') || lowerText.includes('pricing'))
        {
            return "Our pricing is tailored to the specific needs of each project, ensuring affordability for SMBs without compromising on enterprise quality. I recommend booking a free consultation to get a precise quote.";
        }

        if (lowerText.includes('service') || lowerText.includes('do you do') || lowerText.includes('offer'))
        {
            return "We offer a range of services including: 1. IT Modernization & Custom Development (.NET, Angular, SQL), 2. AI & Automation, 3. Cloud & Azure Consulting, and 4. Website Upgrades & Branding.";
        }

        if (lowerText.includes('modernization') || lowerText.includes('legacy') || lowerText.includes('excel') || lowerText.includes('access'))
        {
            return "We specialize in replacing outdated legacy systems (like fragile Excel & Access sheets) with robust, modern web applications using .NET Core and SQL Server.";
        }

        if (lowerText.includes('ai') || lowerText.includes('automation') || lowerText.includes('intelligence'))
        {
            return "We can help you leverage AI for customer support, document extraction (OCR), and automating repetitive tasks to gain deeper insights into your business.";
        }

        if (lowerText.includes('cloud') || lowerText.includes('azure') || lowerText.includes('migration'))
        {
            return "We handle Azure Web Apps, SQL configurations, cloud migrations, and security hardening (MFA) to ensure your business is secure and scalable in the cloud.";
        }

        if (lowerText.includes('web') || lowerText.includes('site') || lowerText.includes('design') || lowerText.includes('seo'))
        {
            return "We create stunning, high-performance websites with advanced SEO optimization and responsive designs that work on all devices.";
        }

        if (lowerText.includes('who is felix') || lowerText.includes('about felix') || lowerText.includes('experience'))
        {
            return "Felix Battig is a Senior IT Consultant with over 25 years of experience. He specializes in bridging the gap between business and technology for SMBs in the GTA.";
        }

        if (lowerText.includes('contact') || lowerText.includes('email') || lowerText.includes('phone') || lowerText.includes('reach'))
        {
            return "You can reach us at info@ModernizeWithFelix.com or call +1 (416) 418-7141. Alternatively, you can book a free consultation through our Contact page.";
        }

        if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey'))
        {
            return "Hello! How can I assist you with your digital transformation journey today?";
        }

        return "I'm an AI assistant here to help. Could you please clarify your question? You can ask about our services, pricing, or how to get started.";
    };

    const handleSend = () =>
    {
        if (inputValue.trim() === "") return;

        const userMessage = { text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInputValue("");

        // Simulate network delay
        setTimeout(() =>
        {
            const botResponseText = generateResponse(userMessage.text);
            const botMessage = { text: botResponseText, sender: 'bot' };
            setMessages(prev => [...prev, botMessage]);
        }, 600);
    };

    return (
        <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
            {!isOpen && (
                <button className="chatbot-toggle" onClick={toggleChat} aria-label="Open Chat">
                    <MessageSquare size={24} />
                    <span className="chatbot-label">Ask Felix AI</span>
                </button>
            )}

            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <div className="chatbot-header-title">
                            <div style={{
                                background: 'rgba(255,255,255,0.2)',
                                padding: '8px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Bot size={24} />
                            </div>
                            <div>
                                <div style={{ lineHeight: '1.2' }}>Ask Felix AI</div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.9, fontWeight: 400 }}>Online</div>
                            </div>
                        </div>
                        <button className="chatbot-close" onClick={toggleChat} aria-label="Close Chat">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                <div className="message-bubble">
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chatbot-input-area">
                        <input
                            type="text"
                            placeholder="Ask a question..."
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                        />
                        <button className="chatbot-send" onClick={handleSend} aria-label="Send Message">
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
