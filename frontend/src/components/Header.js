import React from 'react';
import Logo from './Logo';

const Header = ({ currentView, setCurrentView }) => {
    return (
        <header style={{
            backgroundColor: '#ffffff',
            padding: '0.75rem 1rem',
            borderBottom: '1px solid #e2e8f0',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            fontFamily: 'Inter, sans-serif'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
            }}>
                {/* Brand: Logo + Text (only once) */}
                <button
                    onClick={() => setCurrentView('home')}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0
                    }}
                >
                    <Logo size="default" showText={true} />
                </button>

                {/* Navigation */}
                <nav style={{
                    display: 'flex',
                    gap: '1.5rem',
                    flexWrap: 'wrap',
                    alignItems: 'center'
                }}>
                    <button
                        onClick={() => setCurrentView('browse')}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '16px',
                            color: currentView === 'browse' ? '#667eea' : '#4a5568',
                            fontWeight: currentView === 'browse' ? '600' : '500',
                            fontFamily: 'Inter, sans-serif'
                        }}
                    >
                        Browse Spaces
                    </button>
                    <button
                        onClick={() => setCurrentView('how-it-works')}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '16px',
                            color: currentView === 'how-it-works' ? '#667eea' : '#4a5568',
                            fontWeight: currentView === 'how-it-works' ? '600' : '500',
                            fontFamily: 'Inter, sans-serif'
                        }}
                    >
                        How It Works
                    </button>
                    <button
                        onClick={() => setCurrentView('host')}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '16px',
                            color: currentView === 'host' ? '#667eea' : '#4a5568',
                            fontWeight: currentView === 'host' ? '600' : '500',
                            fontFamily: 'Inter, sans-serif'
                        }}
                    >
                        List Your Space
                    </button>
                    <button
                        onClick={() => setCurrentView('service-signup')}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '16px',
                            color: currentView === 'service-signup' ? '#667eea' : '#4a5568',
                            fontWeight: currentView === 'service-signup' ? '600' : '500',
                            fontFamily: 'Inter, sans-serif'
                        }}
                    >
                        Offer Services
                    </button>
                    <button
                        onClick={() => setCurrentView('login')}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '16px',
                            color: currentView === 'login' ? '#667eea' : '#4a5568',
                            fontWeight: currentView === 'login' ? '600' : '500',
                            fontFamily: 'Inter, sans-serif'
                        }}
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => setCurrentView('signup')}
                        style={{
                            backgroundColor: '#667eea',
                            color: 'white',
                            border: 'none',
                            padding: '8px 18px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: '600',
                            fontFamily: 'Inter, sans-serif'
                        }}
                    >
                        Sign Up
                    </button>
                </nav>
            </div>
            {/* Responsive styles */}
            <style>
                {`
                @media (max-width: 700px) {
                    header > div {
                        flex-direction: column;
                        align-items: stretch !important;
                        gap: 0.5rem !important;
                    }
                    nav {
                        justify-content: flex-start !important;
                        gap: 0.75rem !important;
                        flex-wrap: wrap;
                    }
                }
                `}
            </style>
        </header>
    );
};

export default Header;