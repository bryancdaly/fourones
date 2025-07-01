import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import BrowseSpaces from './pages/BrowseSpaces';
import HowItWorks from './pages/HowItWorks';
import HostSpace from './pages/HostSpace';
import AuthForm from './pages/AuthForm';
import { featuredSpaces } from './data/mockData';
import { formatCurrency } from './utils/format';
import './App.css';

function App() {
    const [currentView, setCurrentView] = useState('home');

    const renderCurrentView = () => {
        switch (currentView) {
            case 'browse':
                return <BrowseSpaces setCurrentView={setCurrentView} />;
            case 'how-it-works':
                return <HowItWorks setCurrentView={setCurrentView} />;
            case 'host':
                return <HostSpace setCurrentView={setCurrentView} />;
            case 'login':
                return <AuthForm type="login" setCurrentView={setCurrentView} />;
            case 'signup':
                return <AuthForm type="signup" setCurrentView={setCurrentView} />;
            case 'service-signup':
                return (
                    <AuthForm
                        type="signup"
                        setCurrentView={setCurrentView}
                        defaultAccountType="service"
                    />
                );
            default:
                return (
                    <>
                        <Hero setCurrentView={setCurrentView} />
                        <main style={{ padding: '2rem', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
                            <h2 style={{
                                fontSize: '2.5rem',
                                marginBottom: '1rem',
                                color: '#1a202c',
                                fontWeight: '700',
                                fontFamily: 'Inter, sans-serif'
                            }}>
                                Featured Spaces
                            </h2>
                            <p style={{
                                fontSize: '1.2rem',
                                color: '#718096',
                                marginBottom: '3rem',
                                fontFamily: 'Inter, sans-serif'
                            }}>
                                Discover amazing spaces perfect for your next project
                            </p>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                                gap: '2rem',
                                marginBottom: '3rem'
                            }}>
                                {featuredSpaces.map((space, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            backgroundColor: 'white',
                                            borderRadius: '16px',
                                            textAlign: 'left',
                                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                            border: '1px solid #e2e8f0',
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-4px)';
                                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                                        }}
                                        onClick={() => setCurrentView('browse')}
                                    >
                                        <div style={{
                                            height: '220px',
                                            backgroundImage: `url(${space.images[0]})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            position: 'relative'
                                        }}>
                                            <div style={{
                                                position: 'absolute',
                                                top: '1rem',
                                                right: '1rem',
                                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                padding: '0.5rem 0.75rem',
                                                borderRadius: '20px',
                                                fontSize: '0.875rem',
                                                fontWeight: '600',
                                                color: '#667eea'
                                            }}>
                                                ⭐ {space.rating}
                                            </div>
                                        </div>

                                        <div style={{ padding: '1.5rem' }}>
                                            <h3 style={{
                                                fontSize: '1.375rem',
                                                fontWeight: '700',
                                                marginBottom: '0.5rem',
                                                color: '#1a202c',
                                                fontFamily: 'Inter, sans-serif'
                                            }}>
                                                {space.title}
                                            </h3>
                                            <p style={{
                                                color: '#667eea',
                                                fontSize: '0.95rem',
                                                marginBottom: '0.5rem',
                                                fontWeight: '500',
                                                fontFamily: 'Inter, sans-serif'
                                            }}>
                                                {space.category}
                                            </p>
                                            <p style={{
                                                color: '#718096',
                                                fontSize: '0.95rem',
                                                marginBottom: '1rem',
                                                fontFamily: 'Inter, sans-serif'
                                            }}>
                                                📍 {space.location}
                                            </p>

                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                marginBottom: '1rem'
                                            }}>
                                                <div>
                                                    <span style={{
                                                        fontSize: '1.5rem',
                                                        fontWeight: '700',
                                                        color: '#1a202c',
                                                        fontFamily: 'Inter, sans-serif'
                                                    }}>
                                                        {formatCurrency(space.price)}
                                                    </span>
                                                    <span style={{
                                                        color: '#718096',
                                                        fontSize: '0.9rem',
                                                        fontFamily: 'Inter, sans-serif'
                                                    }}>
                                                        /day
                                                    </span>
                                                </div>
                                                <span style={{
                                                    color: '#718096',
                                                    fontSize: '0.9rem',
                                                    fontFamily: 'Inter, sans-serif'
                                                }}>
                                                    Capacity: {space.capacity}
                                                </span>
                                            </div>

                                            <button style={{
                                                width: '100%',
                                                backgroundColor: '#667eea',
                                                color: 'white',
                                                border: 'none',
                                                padding: '0.875rem',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                fontSize: '0.95rem',
                                                fontWeight: '600',
                                                fontFamily: 'Inter, sans-serif'
                                            }}>
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ marginTop: '4rem' }}>
                                <button
                                    onClick={() => setCurrentView('browse')}
                                    style={{
                                        backgroundColor: '#667eea',
                                        color: 'white',
                                        padding: '1rem 2rem',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        marginRight: '1rem',
                                        fontFamily: 'Inter, sans-serif'
                                    }}
                                >
                                    View All Spaces
                                </button>
                                <button
                                    onClick={() => setCurrentView('host')}
                                    style={{
                                        backgroundColor: 'transparent',
                                        color: '#667eea',
                                        padding: '1rem 2rem',
                                        border: '2px solid #667eea',
                                        borderRadius: '8px',
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        fontFamily: 'Inter, sans-serif'
                                    }}
                                >
                                    List Your Space
                                </button>
                            </div>
                        </main>
                    </>
                );
        }
    };

    return (
        <div className="App">
            <Header currentView={currentView} setCurrentView={setCurrentView} />
            {renderCurrentView()}
            <Footer setCurrentView={setCurrentView} />
        </div>
    );
}

export default App;