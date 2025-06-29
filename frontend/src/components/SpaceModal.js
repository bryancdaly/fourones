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
        setShowServices(true);
    };

    const handleServiceRequest = (serviceRequest) => {
        console.log('Service request submitted:', serviceRequest);
        setShowServices(false);
        onClose();
    };

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
        </div>
    );

    return (
        <div className="space-modal-overlay" style={{
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
            <div className="space-modal-content" style={{
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
                    
                    @media (max-width: 768px) {
                        .space-modal-overlay {
                            padding: 0;
                        }
                        .space-modal-content {
                            max-height: 100vh;
                            border-radius: 0;
                        }
                        .space-details-grid {
                            grid-template-columns: 1fr !important;
                            gap: 1rem !important;
                        }
                        .image-gallery {
                            height: 250px !important;
                        }
                        .gallery-grid {
                            grid-template-columns: 1fr !important;
                        }
                        .booking-section {
                            position: static !important;
                            margin-top: 1rem;
                        }
                        .details-section {
                            padding: 1rem !important;
                        }
                        .amenities-grid {
                            grid-template-columns: repeat(2, 1fr) !important;
                        }
                        .price-grid {
                            grid-template-columns: repeat(2, 1fr) !important;
                        }
                    }
                    `}
                </style>

                {/* Close & Favorite Buttons */}
                <button onClick={onClose} style={{
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
                    zIndex: 1001
                }}>×</button>

                <button onClick={(e) => toggleFavorite(space.id, e)} style={{
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
                    zIndex: 1001
                }}>
                    {favorites?.includes(space.id) ? '❤️' : '🤍'}
                </button>

                {/* Image Gallery */}
                <div className="image-gallery" style={{
                    height: '350px',
                    backgroundColor: '#f7fafc',
                    borderRadius: '16px 16px 0 0',
                    padding: '0.5rem'
                }}>
                    <div className="gallery-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: space.images?.length > 1 ? '2fr 1fr' : '1fr',
                        gap: '0.5rem',
                        height: '100%'
                    }}>
                        <div style={{
                            backgroundImage: `url(${space.images?.[0]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '12px'
                        }} />
                        {space.images?.length > 1 && (
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem'
                            }}>
                                {space.images.slice(1, 3).map((image, index) => (
                                    <div key={index} style={{
                                        backgroundImage: `url(${image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderRadius: '8px',
                                        flex: 1
                                    }} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="details-section" style={{ padding: '2rem' }}>
                    <div className="space-details-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr',
                        gap: '2rem'
                    }}>
                        {/* Left Column - Details */}
                        <div>
                            <h1 style={{
                                fontSize: 'clamp(1.5rem, 5vw, 2rem)',
                                fontWeight: '700',
                                marginBottom: '0.5rem',
                                color: '#1a202c'
                            }}>{space.title}</h1>

                            {/* Rest of the content... */}
                        </div>

                        {/* Right Column - Booking */}
                        <div className="booking-section" style={{
                            backgroundColor: '#f8fafc',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            position: 'sticky',
                            top: '1rem'
                        }}>
                            {/* Pricing Grid */}
                            <div className="price-grid" style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
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
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <div style={{ fontWeight: '600' }}>
                                            ${Math.round(space.price * duration.multiplier)}
                                        </div>
                                        <div style={{ fontSize: '0.75rem', color: '#718096' }}>
                                            per {duration.label.toLowerCase()}
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Booking Actions */}
                            <div style={{ marginTop: '1rem' }}>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        marginBottom: '1rem',
                                        borderRadius: '6px',
                                        border: '1px solid #e2e8f0'
                                    }}
                                />
                                <button
                                    onClick={handleBooking}
                                    style={{
                                        width: '100%',
                                        backgroundColor: '#667eea',
                                        color: 'white',
                                        padding: '1rem',
                                        borderRadius: '8px',
                                        border: 'none',
                                        fontWeight: '600',
                                        marginBottom: '0.5rem'
                                    }}
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpaceModal;