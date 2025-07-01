import React, { useState, useCallback, useEffect, useRef } from 'react';
import ServiceProviders from './ServiceProviders';
import { formatCurrency } from '../utils/format';

const MAPS_API_KEY = 'AIzaSyD31NAQXFlL4rW-nZtJEx6ImfjBQAtXoJ0';

const useGoogleMaps = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        if (window.google && window.google.maps) {
            setLoaded(true);
            return;
        }
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}`;
        script.async = true;
        script.onload = () => setLoaded(true);
        document.body.appendChild(script);
    }, []);
    return loaded;
};

const selectStyle = {
    width: '100%',
    padding: '0.75rem 2.5rem 0.75rem 1rem',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    fontSize: '1.1rem',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    background: 'white',
    color: '#1a202c',
    marginBottom: '1rem'
};

const SpaceModal = ({ space, isOpen, onClose, setCurrentView, favorites, toggleFavorite }) => {
    const [bookingDuration, setBookingDuration] = useState('day');
    const [startDate, setStartDate] = useState('');
    const [showServices, setShowServices] = useState(false);
    const mapsLoaded = useGoogleMaps();
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapsLoaded || !space || !mapRef.current) return;
        const mapInstance = new window.google.maps.Map(mapRef.current, {
            center: { lat: space.latitude || -36.8485, lng: space.longitude || 174.7633 },
            zoom: 15,
            fullscreenControl: false,
            streetViewControl: false,
            mapTypeControl: false
        });
        new window.google.maps.Marker({
            position: { lat: space.latitude || -36.8485, lng: space.longitude || 174.7633 },
            map: mapInstance
        });
    }, [mapsLoaded, space]);

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

    const handleModalClose = (e) => {
        e.stopPropagation();
        onClose();
    };

    return (
        <div 
            className="space-modal-overlay" 
            style={{
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
            }}
            onClick={handleModalClose}
        >
            <div 
                className="space-modal-content" 
                style={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    maxWidth: '900px',
                    width: '100%',
                    maxHeight: '90vh',
                    overflow: 'auto',
                    position: 'relative',
                    animation: 'slideUp 0.4s ease'
                }}
                onClick={e => e.stopPropagation()}
            >
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
                            height: 100vh;
                            max-height: 100vh;
                            border-radius: 0;
                        }
                        .space-details-grid {
                            grid-template-columns: 1fr !important;
                            gap: 1rem !important;
                        }
                        .booking-section {
                            position: static !important;
                            margin-top: 1rem !important;
                            padding: 1rem !important;
                            box-shadow: none !important;
                        }
                    }
                    `}
                </style>

                {/* Close & Favorite Buttons */}
                <div style={{
                    position: 'sticky',
                    top: 0,
                    backgroundColor: 'white',
                    zIndex: 1001,
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '1rem'
                }}>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(space.id, e);
                        }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.9)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            cursor: 'pointer',
                            fontSize: '1.2rem'
                        }}
                    >
                        {favorites?.includes(space.id) ? '❤️' : '🤍'}
                    </button>

                    <button
                        onClick={handleModalClose}
                        style={{
                            background: 'rgba(0, 0, 0, 0.1)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            cursor: 'pointer',
                            fontSize: '1.5rem'
                        }}
                    >
                        ×
                    </button>
                </div>

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
                            }}>
                                {space.title}
                            </h1>
                            
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

                            {/* Image Gallery */}
                            <div className="image-gallery" style={{
                                display: 'flex',
                                overflowX: 'auto',
                                gap: '1rem',
                                marginBottom: '1.5rem',
                                paddingBottom: '1rem',
                                scrollbarWidth: 'thin',
                                WebkitOverflowScrolling: 'touch'
                            }}>
                                {space.images && space.images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Space photo ${idx + 1}`}
                                        style={{
                                            flex: '0 0 auto',
                                            width: '100%',
                                            maxWidth: '300px',
                                            height: '200px',
                                            objectFit: 'cover',
                                            borderRadius: '12px'
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Map Section */}
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    color: '#1a202c'
                                }}>
                                    Location
                                </h3>
                                <div style={{ height: '200px', width: '100%', position: 'relative' }}>
                                    <div
                                        ref={mapRef}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '8px',
                                            background: '#f0f0f0'
                                        }}
                                    >
                                        {!mapsLoaded && (
                                            <div style={{
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                Loading map...
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
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

                            {/* Amenities */}
                            {space.amenities?.length > 0 && (
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
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                        gap: '0.5rem'
                                    }}>
                                        {space.amenities.map((amenity, index) => (
                                            <span
                                                key={index}
                                                style={{
                                                    backgroundColor: '#f0f4ff',
                                                    color: '#4338ca',
                                                    padding: '0.5rem 1rem',
                                                    borderRadius: '6px',
                                                    fontSize: '0.9rem',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                {amenity}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column - Booking */}
                        <div className="booking-section" style={{
                            backgroundColor: '#f8fafc',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            marginTop: '1rem'
                        }}>
                            <h4 style={{
                                fontSize: '1.125rem',
                                fontWeight: '600',
                                marginBottom: '1rem',
                                color: '#1a202c'
                            }}>
                                Choose Duration
                            </h4>

                            <div style={{
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
                                            {formatCurrency(Math.round(space.price * duration.multiplier))}
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
                                <div style={{
                                    position: 'relative',
                                    marginBottom: '1rem'
                                }}>
                                    <input
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        min={new Date().toISOString().split('T')[0]}
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem 2.5rem 0.75rem 1rem',
                                            borderRadius: '6px',
                                            border: '1px solid #e2e8f0',
                                            fontSize: '1.1rem',
                                            appearance: 'none',
                                            WebkitAppearance: 'none',
                                            MozAppearance: 'none',
                                            background: 'white',
                                            color: '#1a202c'
                                        }}
                                    />
                                </div>
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