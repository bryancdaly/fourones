import React from 'react';

const Footer = ({ setCurrentView }) => {
    return (
        <footer style={{
            backgroundColor: '#2d3748',
            color: 'white',
            padding: '3rem 1rem 2rem 1rem',
            marginTop: '4rem'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    marginBottom: '2rem'
                }}>
                    {/* Company Info */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                borderRadius: '6px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '14px'
                            }}>
                                4¹
                            </div>
                            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Four Ones</span>
                        </div>
                        <p style={{ color: '#a0aec0', marginBottom: '1rem', lineHeight: '1.6' }}>
                            Connecting amazing spaces with creative people worldwide. Turn your vision into reality with the perfect venue.
                        </p>
                    </div>

                    {/* For Hirers */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>For Hirers</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {[
                                { text: 'Browse Spaces', action: () => setCurrentView('browse') },
                                { text: 'How to Book', action: () => setCurrentView('how-it-works') },
                                { text: 'Safety & Trust', action: () => { } },
                                { text: 'Help Center', action: () => { } }
                            ].map((item, index) => (
                                <li key={index} style={{ marginBottom: '0.5rem' }}>
                                    <button
                                        onClick={item.action}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: '#a0aec0',
                                            cursor: 'pointer',
                                            fontSize: '0.9rem',
                                            padding: 0,
                                            textAlign: 'left'
                                        }}
                                    >
                                        {item.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* For Providers */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>For Providers</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {[
                                { text: 'List Your Space', action: () => setCurrentView('host') },
                                { text: 'Host Resources', action: () => { } },
                                { text: 'Community Guidelines', action: () => { } },
                                { text: 'Host Support', action: () => { } }
                            ].map((item, index) => (
                                <li key={index} style={{ marginBottom: '0.5rem' }}>
                                    <button
                                        onClick={item.action}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: '#a0aec0',
                                            cursor: 'pointer',
                                            fontSize: '0.9rem',
                                            padding: 0,
                                            textAlign: 'left'
                                        }}
                                    >
                                        {item.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>Company</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {[
                                'About Us',
                                'Careers',
                                'Press',
                                'Contact'
                            ].map((item, index) => (
                                <li key={index} style={{ marginBottom: '0.5rem' }}>
                                    <button
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: '#a0aec0',
                                            cursor: 'pointer',
                                            fontSize: '0.9rem',
                                            padding: 0,
                                            textAlign: 'left'
                                        }}
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    borderTop: '1px solid #4a5568',
                    paddingTop: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    <p style={{ color: '#a0aec0', fontSize: '0.9rem', margin: 0 }}>
                        © 2025 Four Ones. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                            <button key={index} style={{
                                background: 'none',
                                border: 'none',
                                color: '#a0aec0',
                                cursor: 'pointer',
                                fontSize: '0.9rem'
                            }}>
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;