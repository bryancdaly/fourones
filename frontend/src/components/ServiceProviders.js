import React, { useState } from 'react';

const ServiceProviders = ({ bookingDetails, onServiceRequest }) => {
    const [selectedServices, setSelectedServices] = useState([]);
    const [contactPreferences, setContactPreferences] = useState({
        phone: true,
        email: true,
        name: true
    });

    const serviceProviders = [
        {
            id: 1,
            name: 'Professional Cleaning Services',
            category: 'cleaning',
            icon: '🧽',
            description: 'Deep cleaning before and after your event',
            rating: 4.9,
            responseTime: '2 hours'
        },
        {
            id: 2,
            name: 'Premium Catering Solutions',
            category: 'catering',
            icon: '🍽️',
            description: 'Full-service catering for any occasion',
            rating: 4.8,
            responseTime: '4 hours'
        },
        {
            id: 3,
            name: 'AV Equipment Rental',
            category: 'av-equipment',
            icon: '🎤',
            description: 'Sound systems, projectors, and lighting',
            rating: 4.7,
            responseTime: '3 hours'
        },
        {
            id: 4,
            name: 'Security Services',
            category: 'security',
            icon: '🛡️',
            description: 'Professional security for your events',
            rating: 4.9,
            responseTime: '6 hours'
        },
        {
            id: 5,
            name: 'Furniture Rental',
            category: 'furniture',
            icon: '🪑',
            description: 'Tables, chairs, and decor for any style',
            rating: 4.6,
            responseTime: '24 hours'
        },
        {
            id: 6,
            name: 'Photography Services',
            category: 'photography',
            icon: '📸',
            description: 'Event photography and documentation',
            rating: 4.8,
            responseTime: '12 hours'
        },
        {
            id: 7,
            name: 'Floral & Decoration',
            category: 'decoration',
            icon: '🌸',
            description: 'Beautiful arrangements and styling',
            rating: 4.7,
            responseTime: '8 hours'
        },
        {
            id: 8,
            name: 'Transportation Services',
            category: 'transportation',
            icon: '🚐',
            description: 'Shuttle services and logistics',
            rating: 4.5,
            responseTime: '4 hours'
        }
    ];

    const toggleService = (serviceId) => {
        setSelectedServices(prev =>
            prev.includes(serviceId)
                ? prev.filter(id => id !== serviceId)
                : [...prev, serviceId]
        );
    };

    const handleSubmitRequest = () => {
        if (selectedServices.length === 0) {
            alert('Please select at least one service');
            return;
        }

        const selectedProviders = serviceProviders.filter(service =>
            selectedServices.includes(service.id)
        );

        // Generate unique code for security
        const uniqueCode = Math.random().toString(36).substring(2, 8).toUpperCase();

        const serviceRequest = {
            bookingDetails,
            selectedProviders,
            contactPreferences,
            uniqueCode,
            timestamp: new Date().toISOString()
        };

        onServiceRequest(serviceRequest);

        alert(`Service providers have been notified! Your unique code is: ${uniqueCode}\nKeep this code private - you'll need it when the providers contact you.`);
    };

    return (
        <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            marginTop: '2rem'
        }}>
            <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#1a202c',
                fontFamily: 'Inter, sans-serif'
            }}>
                🛎️ Add Services to Your Booking
            </h3>

            <p style={{
                color: '#718096',
                marginBottom: '2rem',
                fontFamily: 'Inter, sans-serif'
            }}>
                Select service providers you'd like to be contacted by. They'll receive your event details and a secure code to verify the request.
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
            }}>
                {serviceProviders.map(service => (
                    <div
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        style={{
                            border: selectedServices.includes(service.id)
                                ? '2px solid #667eea'
                                : '1px solid #e2e8f0',
                            borderRadius: '8px',
                            padding: '1rem',
                            cursor: 'pointer',
                            backgroundColor: selectedServices.includes(service.id)
                                ? '#f0f4ff'
                                : 'white',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>
                                {service.icon}
                            </span>
                            <h4 style={{
                                fontSize: '1rem',
                                fontWeight: '600',
                                color: '#1a202c',
                                fontFamily: 'Inter, sans-serif',
                                margin: 0
                            }}>
                                {service.name}
                            </h4>
                            {selectedServices.includes(service.id) && (
                                <span style={{ marginLeft: 'auto', color: '#667eea', fontSize: '1.2rem' }}>
                                    ✓
                                </span>
                            )}
                        </div>
                        <p style={{
                            fontSize: '0.875rem',
                            color: '#718096',
                            marginBottom: '0.5rem',
                            fontFamily: 'Inter, sans-serif'
                        }}>
                            {service.description}
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#a0aec0' }}>
                            <span>⭐ {service.rating}</span>
                            <span>🕐 Responds in {service.responseTime}</span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedServices.length > 0 && (
                <div style={{
                    backgroundColor: '#f8fafc',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    marginBottom: '2rem'
                }}>
                    <h4 style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        color: '#1a202c',
                        fontFamily: 'Inter, sans-serif'
                    }}>
                        Contact Preferences
                    </h4>
                    <p style={{
                        fontSize: '0.875rem',
                        color: '#718096',
                        marginBottom: '1rem',
                        fontFamily: 'Inter, sans-serif'
                    }}>
                        Choose what information to share with service providers:
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <input
                                type="checkbox"
                                checked={contactPreferences.name}
                                onChange={(e) => setContactPreferences(prev => ({
                                    ...prev,
                                    name: e.target.checked
                                }))}
                            />
                            <span style={{ fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}>
                                Share my name
                            </span>
                        </label>

                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <input
                                type="checkbox"
                                checked={contactPreferences.email}
                                onChange={(e) => setContactPreferences(prev => ({
                                    ...prev,
                                    email: e.target.checked
                                }))}
                            />
                            <span style={{ fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}>
                                Share my email
                            </span>
                        </label>

                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <input
                                type="checkbox"
                                checked={contactPreferences.phone}
                                onChange={(e) => setContactPreferences(prev => ({
                                    ...prev,
                                    phone: e.target.checked
                                }))}
                            />
                            <span style={{ fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}>
                                Share my phone
                            </span>
                        </label>
                    </div>
                </div>
            )}

            {selectedServices.length > 0 && (
                <div style={{ textAlign: 'center' }}>
                    <button
                        onClick={handleSubmitRequest}
                        style={{
                            backgroundColor: '#667eea',
                            color: 'white',
                            padding: '1rem 2rem',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontFamily: 'Inter, sans-serif'
                        }}
                    >
                        Request Services ({selectedServices.length} selected)
                    </button>
                </div>
            )}
        </div>
    );
};

export default ServiceProviders;