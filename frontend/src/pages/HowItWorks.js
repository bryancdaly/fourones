import React from 'react';

const HowItWorks = ({ setCurrentView }) => {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
                <button
                    onClick={() => setCurrentView('home')}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: '#667eea',
                        cursor: 'pointer',
                        fontSize: '16px',
                        marginBottom: '2rem'
                    }}
                >
                    ← Back to Home
                </button>

                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#2d3748' }}>How Four Ones Works</h1>
                    <p style={{ fontSize: '1.2rem', color: '#666' }}>Simple steps to find or list your perfect space</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
                    {/* For Space Hirers */}
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#667eea' }}>For Space Hirers</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {[
                                {
                                    step: '1',
                                    title: 'Search & Discover',
                                    description: 'Browse our curated collection of unique commercial spaces. Filter by location, category, amenities, and availability.'
                                },
                                {
                                    step: '2',
                                    title: 'Request Booking',
                                    description: 'Found the perfect space? Send a booking request with your dates and requirements. Include details about your event or business.'
                                },
                                {
                                    step: '3',
                                    title: 'Get Approved & Pay',
                                    description: 'Space providers typically respond within 24 hours. Once approved, secure your booking with our safe payment system.'
                                },
                                {
                                    step: '4',
                                    title: 'Enjoy Your Space',
                                    description: 'Access your space on the agreed dates and bring your vision to life. Rate and review after your experience.'
                                }
                            ].map((item) => (
                                <div key={item.step} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{
                                        backgroundColor: '#667eea',
                                        color: 'white',
                                        borderRadius: '50%',
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'bold',
                                        flexShrink: 0
                                    }}>
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#2d3748' }}>
                                            {item.title}
                                        </h3>
                                        <p style={{ color: '#666', lineHeight: '1.6' }}>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* For Space Providers */}
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#764ba2' }}>For Space Providers</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {[
                                {
                                    step: '1',
                                    title: 'Create Your Listing',
                                    description: 'Upload photos, describe your space, set your categories and amenities. Our team helps optimize your listing for maximum visibility.'
                                },
                                {
                                    step: '2',
                                    title: 'Set Your Rates',
                                    description: 'Define your pricing for different seasons and booking durations. Offer hourly, daily, monthly, or yearly rates.'
                                },
                                {
                                    step: '3',
                                    title: 'Manage Bookings',
                                    description: 'Review booking requests and approve the ones that fit your space. Communicate directly with hirers through our platform.'
                                },
                                {
                                    step: '4',
                                    title: 'Get Paid',
                                    description: 'Receive payments securely through our platform. Track your earnings and manage your space calendar easily.'
                                }
                            ].map((item) => (
                                <div key={item.step} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{
                                        backgroundColor: '#764ba2',
                                        color: 'white',
                                        borderRadius: '50%',
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'bold',
                                        flexShrink: 0
                                    }}>
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#2d3748' }}>
                                            {item.title}
                                        </h3>
                                        <p style={{ color: '#666', lineHeight: '1.6' }}>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '16px',
                    padding: '3rem',
                    textAlign: 'center',
                    color: 'white'
                }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Get Started?</h3>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9' }}>
                        Join thousands of space providers and hirers already using Four Ones
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
            </div>
        </div>
    );
};

export default HowItWorks;