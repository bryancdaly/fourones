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
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23e2e8f0\" fill-opacity=\"0.4\"%3E%3Ccircle cx=\"3\" cy=\"3\" r=\"3\"/%3E%3Ccircle cx=\"13\" cy=\"13\" r=\"3\"/%3E%3C/g%3E%3C/svg%3E')",            marginBottom: '1rem'
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
                            height: 220px !important;
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
                            <p style={{
                                color: '#667eea',
                                fontSize: '1.1rem',
                                marginBottom: '1rem'
                            }}>
                                {space.category}
                            </p>
                            <p style={{
                                color: '#718096',
                                marginBottom: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                📍 {space.location}
                            </p>

                            {/* Google Map */}
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    color: '#1a202c'
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
                                    color: '#1a202c'
                                }}>
                                    About This Space
                                </h3>
                                <p style={{
                                    color: '#4a5568',
                                    lineHeight: '1.6'
                                }}>
                                    {space.description || 'This beautiful space offers everything you need for your next event or pop-up. With modern amenities and flexible layouts, it\'s perfect for creative professionals and businesses looking to make an impact.'}
                                </p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    color: '#1a202c'
                                }}>
                                    Amenities
                                </h3>
                                <div className="amenities-grid" style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: '0.5rem'
                                }}>
                                    {space.amenities?.map((amenity, index) => (
                                        <span key={index} style={{
                                            backgroundColor: '#f0f4ff',
                                            color: '#4338ca',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '6px',
                                            fontSize: '0.9rem',
                                            textAlign: 'center'
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
                                    color: '#1a202c'
                                }}>
                                    Space Details
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '1rem'
                                }}>
                                    <div style={{
                                        padding: '1rem',
                                        backgroundColor: '#f7fafc',
                                        borderRadius: '6px'
                                    }}>
                                        <div style={{
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold',
                                            color: '#1a202c'
                                        }}>
                                            {space.capacity}
                                        </div>
                                        <div style={{
                                            fontSize: '0.9rem',
                                            color: '#718096'
                                        }}>
                                            People Capacity
                                        </div>
                                    </div>
                                    <div style={{
                                        padding: '1rem',
                                        backgroundColor: '#f7fafc',
                                        borderRadius: '6px'
                                    }}>
                                        <div style={{
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold',
                                            color: '#1a202c'
                                        }}>
                                            {space.rating}★
                                        </div>
                                        <div style={{
                                            fontSize: '0.9rem',
                                            color: '#718096'
                                        }}>
                                            Average Rating
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Booking */}
                        <div className="booking-section" style={{
                            backgroundColor: '#f8fafc',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            position: 'sticky',
                            top: '1rem'
                        }}>
                            <h4 style={{
                                fontSize: '1.125rem',
                                fontWeight: '600',
                                marginBottom: '1rem',
                                color: '#1a202c'
                            }}>
                                Choose Duration
                            </h4>

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
                                        <div style={{
                                            fontSize: '0.75rem',
                                            color: '#718096'
                                        }}>
                                            per {duration.label.toLowerCase()}
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div style={{ marginTop: '1rem' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '0.5rem',
                                    fontWeight: '500'
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

                {showServices && (
                    <ServiceProviders
                        bookingDetails={{
                            space,
                            duration: bookingDuration,
                            startDate
                        }}
                        onServiceRequest={handleServiceRequest}
                    />
                )}
            </div>
        </div>
    );
};

export default SpaceModal;