import React, { useState } from 'react';
import ServiceProviders from './ServiceProviders';

const SpaceModal = ({ space, isOpen, onClose, setCurrentView, favorites, toggleFavorite }) => {
    const [bookingDuration, setBookingDuration] = useState('day');
    const [startDate, setStartDate] = useState('');
    const [showServices, setShowServices] = useState(false);

    if (!isOpen || !space) return null;

    const durations = {
        hour: { multiplier: 1 / 8, label: 'Hour', suffix: '/hour' },
        day: { multiplier: 1, label: 'Day', suffix: '/day' },
        month: { multiplier: 25, label: 'Month', suffix: '/month' },
        year: { multiplier: 300, label: 'Year', suffix: '/year' }
    };

    const calculatePrice = () => {
        return Math.round(space.price * durations[bookingDuration].multiplier);
    };

    const handleBooking = () => {
        if (!startDate) {
            alert('Please select a start date');
            return;
        }

        const bookingDetails = {
            space,
            duration: bookingDuration,
            startDate,
            price: calculatePrice(),
            address: space.address || `${space.location}, Auckland, New Zealand`
        };

        setShowServices(true);
    };

    const handleServiceRequest = (serviceRequest) => {
        console.log('Service request submitted:', serviceRequest);
        // In a real app, this would send to your backend
        setShowServices(false);
        onClose();
    };

    // Mock Google Map component
    const GoogleMap = () => (
        <div style={{
            height: '200px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23e2e8f0" fill-opacity="0.4"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")',
            marginBottom: '1rem'
        }}>
            <div style={{
                position: 'absolute',
                backgroundColor: '#667eea',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.875rem',
                fontWeight: '600'
            }}>
                📍 {space.location}
            </div>
            <div style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                color: '#666'
            }}>
                🗺️ Google Maps
            </div>
        </div>
    );

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem',
            animation: 'fadeIn 0.3s ease'
        }}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                maxWidth: '900px',
                width: '100%',
                maxHeight: '90vh',
                overflow: 'auto',
                position: 'relative',
                animation: 'slideUp 0.4s ease'
            }}>
                <style>
                    {`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(30px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `}
                </style>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'rgba(0, 0, 0, 0.1)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        cursor: 'pointer',
                        fontSize: '1.5rem',
                        zIndex: 1001,
                        transition: 'background 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.background = 'rgba(0, 0, 0, 0.2)'}
                    onMouseLeave={(e) => e.target.style.background = 'rgba(0, 0, 0, 0.1)'}
                >
                    ×
                </button>

                {/* Favorite Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(space.id, e);
                    }}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '4rem',
                        background: 'rgba(255, 255, 255, 0.9)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                        zIndex: 1001,
                        transition: 'all 0.2s ease'
                    }}
                >
                    {favorites?.includes(space.id) ? '❤️' : '🤍'}
                </button>

                {/* Image Gallery */}
                <div style={{
                    height: '350px',
                    backgroundColor: '#f7fafc',
                    borderRadius: '16px 16px 0 0',
                    display: 'grid',
                    gridTemplateColumns: space.images?.length > 1 ? '2fr 1fr' : '1fr',
                    gap: '0.5rem',
                    padding: '0.5rem'
                }}>
                    <div style={{
                        backgroundImage: `url(${space.images?.[0] || 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop'})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '12px'
                    }} />

                    {space.images?.length > 1 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {space.images.slice(1, 3).map((image, index) => (
                                <div
                                    key={index}
                                    style={{
                                        backgroundImage: `url(${image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderRadius: '8px',
                                        flex: 1
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div style={{ padding: '2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                        {/* Left Column - Details */}
                        <div>
                            <h1 style={{
                                fontSize: '2rem',
                                fontWeight: '700',
                                marginBottom: '0.5rem',
                                color: '#1a202c',
                                fontFamily: 'Inter, sans-serif'
                            }}>
                                {space.title}
                            </h1>
                            <p style={{
                                color: '#667eea',
                                fontSize: '1.1rem',
                                marginBottom: '1rem',
                                fontFamily: 'Inter, sans-serif'
                            }}>
                                {space.category}
                            </p>
                            <p style={{
                                color: '#718096',
                                marginBottom: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontFamily: 'Inter, sans-serif'
                            }}>
                                📍 {space.location}
                            </p>

                            {/* Google Map */}
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    color: '#1a202c',
                                    fontFamily: 'Inter, sans-serif'
                                }}>
                                    Location
                                </h3>
                                <GoogleMap />
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    color: '#1a202c',
                                    fontFamily: 'Inter, sans-serif'
                                }}>
                                    About This Space
                                </h3>
                                <p style={{
                                    color: '#4a5568',
                                    lineHeight: '1.6',
                                    fontFamily: 'Inter, sans-serif'
                                }}>
                                    This beautiful space offers everything you need for your next event or pop-up.
                                    With modern amenities and flexible layouts, it's perfect for creative professionals
                                    and businesses looking to make an impact. The space features high ceilings,
                                    excellent natural light, and is located in a vibrant area with great foot traffic.
                                </p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    color: '#1a202c',
                                    fontFamily: 'Inter, sans-serif'
                                }}>
                                    Amenities
                                </h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {space.amenities?.map((amenity, index) => (
                                        <span key={index} style={{
                                            backgroundColor: '#f0f4ff',
                                            color: '#4338ca',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '6px',
                                            fontSize: '0.9rem',
                                            fontFamily: 'Inter, sans-serif'
                                        }}>
                                            {amenity}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    color: '#1a202c',
                                    fontFamily: 'Inter, sans-serif'
                                }}>
                                    Space Details
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div style={{ padding: '1rem', backgroundColor: '#f7fafc', borderRadius: '6px' }}>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c' }}>
                                            {space.capacity}
                                        </div>
                                        <div style={{ fontSize: '0.9rem', color: '#718096', fontFamily: 'Inter, sans-serif' }}>People Capacity</div>
                                    </div>
                                    <div style={{ padding: '1rem', backgroundColor: '#f7fafc', borderRadius: '6px' }}>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c' }}>
                                            {space.rating}★
                                        </div>
                                        <div style={{ fontSize: '0.9rem', color: '#718096', fontFamily: 'Inter, sans-serif' }}>Average Rating</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Booking */}
                        <div style={{
                            backgroundColor: '#f8fafc',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            height: 'fit-content',
                            position: 'sticky',
                            top: '1rem'
                        }}>
                            {/* Four Ones Pricing */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h4 style={{
                                    fontSize: '1.125rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    color: '#1a202c',
                                    fontFamily: 'Inter, sans-serif'
                                }}>
                                    Four Ones Pricing 🕐📅📆🗓️
                                </h4>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '0.5rem',
                                    marginBottom: '1rem'
                                }}>
                                    {Object.entries(durations).map(([key, duration]) => (
                                        <button
                                            key={key}
                                            onClick={() => setBookingDuration(key)}
                                            style={{
                                                padding: '0.75rem',
                                                border: bookingDuration === key ? '2px solid #667eea' : '1px solid #e2e8f0',
                                                borderRadius: '6px',
                                                backgroundColor: bookingDuration === key ? '#f0f4ff' : 'white',
                                                cursor: 'pointer',
                                                fontSize: '0.875rem',
                                                fontFamily: 'Inter, sans-serif',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <div style={{ fontWeight: '600', color: '#1a202c' }}>
                                                ${Math.round(space.price * duration.multiplier)}
                                            </div>
                                            <div style={{ fontSize: '0.75rem', color: '#718096' }}>
                                                per {duration.label.toLowerCase()}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '0.5rem',
                                    fontWeight: '500',
                                    fontFamily: 'Inter, sans-serif'
                                }}>
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '6px',
                                        fontFamily: 'Inter, sans-serif'
                                    }}
                                />
                            </div>

                            <div style={{
                                marginBottom: '1.5rem',
                                padding: '1rem',
                                backgroundColor: 'white',
                                borderRadius: '6px'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '0.5rem',
                                    fontFamily: 'Inter, sans-serif'
                                }}>
                                    <span>Rate ({durations[bookingDuration].suffix})</span>
                                    <span>${calculatePrice()}</span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '0.5rem',
                                    fontFamily: 'Inter, sans-serif'
                                }}>
                                    <span>Service fee</span>
                                    <span>${Math.round(calculatePrice() * 0.1)}</span>
                                </div>
                                <hr style={{ margin: '0.5rem 0', border: 'none', borderTop: '1px solid #e2e8f0' }} />
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    fontWeight: 'bold',
                                    fontFamily: 'Inter, sans-serif'
                                }}>
                                    <span>Total</span>
                                    <span>${calculatePrice() + Math.round(calculatePrice() * 0.1)}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleBooking}
                                style={{
                                    width: '100%',
                                    backgroundColor: '#667eea',
                                    color: 'white',
                                    padding: '1rem',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    marginBottom: '1rem',
                                    fontFamily: 'Inter, sans-serif'
                                }}
                            >
                                Book for 1 {durations[bookingDuration].label}
                            </button>

                            <button
                                onClick={() => {
                                    onClose();
                                    setCurrentView('signup');
                                }}
                                style={{
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                    color: '#667eea',
                                    padding: '0.75rem',
                                    border: '2px solid #667eea',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontFamily: 'Inter, sans-serif'
                                }}
                            >
                                Sign Up to Save
                            </button>
                        </div>
                    </div>

                    {/* Service Providers Section */}
                    {showServices && (
                        <ServiceProviders
                            bookingDetails={{
                                space,
                                duration: bookingDuration,
                                startDate,
                                price: calculatePrice()
                            }}
                            onServiceRequest={handleServiceRequest}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SpaceModal;