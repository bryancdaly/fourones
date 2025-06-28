import React from 'react';

const Hero = ({ setCurrentView }) => {
    return (
        <section style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            minHeight: '500px',
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            padding: '4rem 1rem'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    marginBottom: '1.5rem',
                    lineHeight: '1.2'
                }}>
                    Find Your Perfect
                    <br />
                    <span style={{ color: '#ffd700' }}>Pop-up Space</span>
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    marginBottom: '2rem',
                    opacity: '0.9',
                    maxWidth: '600px',
                    margin: '0 auto 2rem auto'
                }}>
                    Connect with amazing commercial spaces for your next class, shop, or event.
                    From galleries to workshops, find the ideal venue for your vision.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button
                        onClick={() => setCurrentView('browse')}
                        style={{
                            backgroundColor: 'white',
                            color: '#667eea',
                            padding: '1rem 2rem',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}
                    >
                        Browse Spaces
                    </button>
                    <button
                        onClick={() => setCurrentView('host')}
                        style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            padding: '1rem 2rem',
                            border: '2px solid white',
                            borderRadius: '8px',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}
                    >
                        List Your Space
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;