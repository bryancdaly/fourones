import React from 'react';

const Stats = () => {
    const stats = [
        { icon: '🏢', number: '500+', label: 'Spaces Listed' },
        { icon: '👥', number: '1,200+', label: 'Happy Hirers' },
        { icon: '⭐', number: '4.8', label: 'Average Rating' },
        { icon: '⚡', number: '24h', label: 'Avg Response Time' },
        { icon: '💰', number: '$2M+', label: 'Total Bookings' },
        { icon: '🌍', number: '25+', label: 'Cities' }
    ];

    return (
        <section style={{
            backgroundColor: 'white',
            padding: '4rem 1rem',
            borderTop: '1px solid #e2e8f0'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2d3748' }}>
                        Four Ones by the Numbers
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                        Join thousands of space providers and hirers who trust Four Ones for their venue needs
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '2rem'
                }}>
                    {stats.map((stat, index) => (
                        <div key={index} style={{
                            textAlign: 'center',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            backgroundColor: '#f8f9fa',
                            transition: 'transform 0.3s ease'
                        }}>
                            <div style={{
                                fontSize: '3rem',
                                marginBottom: '0.5rem'
                            }}>
                                {stat.icon}
                            </div>
                            <div style={{
                                fontSize: '2.5rem',
                                fontWeight: 'bold',
                                color: '#667eea',
                                marginBottom: '0.5rem'
                            }}>
                                {stat.number}
                            </div>
                            <div style={{
                                fontSize: '1rem',
                                color: '#4a5568',
                                fontWeight: '500'
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;