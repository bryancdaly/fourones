import React, { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import ServiceProviders from './ServiceProviders';

const MAPS_API_KEY = 'AIzaSyD31NAQXFlL4rW-nZtJEx6ImfjBQAtXoJ0'; // Your real API key

const SpaceModal = ({ space, isOpen, onClose, setCurrentView, favorites, toggleFavorite }) => {
    const [bookingDuration, setBookingDuration] = useState('day');
    const [startDate, setStartDate] = useState('');
    const [showServices, setShowServices] = useState(false);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: MAPS_API_KEY
    });

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

    // Google Map component
    const renderGoogleMap = () => {
        if (!isLoaded) {
            return <div style={{ height: 200, background: '#f0f0f0', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading map…</div>;
        }
        // Fallback to Auckland if no lat/lng
        const lat = space.latitude || -36.8485;
        const lng = space.longitude || 174.7633;
        return (
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '200px', borderRadius: '8px' }}
                center={{ lat, lng }}
                zoom={15}
            >
                <Marker position={{ lat, lng }} />
            </GoogleMap>
        );
    };

    // ...rest of your component remains unchanged, just replace the GoogleMap usage...

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
                {/* ...styles and other content... */}
                {/* ... */}
                <div className="details-section" style={{ padding: '2rem' }}>
                    <div className="space-details-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr',
                        gap: '2rem'
                    }}>
                        {/* Left Column - Details */}
                        <div>
                            {/* ...other details... */}
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    color: '#1a202c'
                                }}>
                                    Location
                                </h3>
                                {renderGoogleMap()}
                            </div>
                            {/* ...rest of the details... */}
                        </div>
                        {/* ...Right Column - Booking... */}
                    </div>
                </div>
                {/* ...rest of your modal... */}
            </div>
        </div>
    );
};

export default SpaceModal;