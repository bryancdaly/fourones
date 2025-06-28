import React from 'react';
import Logo from './Logo';

const Header = ({ currentView, setCurrentView }) => {
    return (
        <header style={{
            backgroundColor: '#ffffff',
            padding: '1rem',
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
                alignItems: 'center'
            }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        cursor: 'pointer'
                    }}
                    onClick={() => setCurrentView('home')}
                >
                    <Logo size="default" />
                    <span style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#1a202c',
                        fontFamily: 'Inter, sans-serif',
                        letterSpacing: '-0.025em'
                    }}>
                        Four Ones
                    </span>
                </div>

                <nav style={{ display: 'flex', gap: '2rem' }}>
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
                </nav>

                <div style={{ display: 'flex', gap: '1rem' }}>
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
                            padding: '10px 20px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: '600',
                            fontFamily: 'Inter, sans-serif'
                        }}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;