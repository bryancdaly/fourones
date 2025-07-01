import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SpaceModal from '../components/SpaceModal';
import { mockSpaces } from '../data/mockData';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const BrowseSpaces = ({ setCurrentView }) => {
    const [selectedSpace, setSelectedSpace] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [spaces, setSpaces] = useState(mockSpaces);
    const [favorites, setFavorites] = useState([]);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'map'

    const handleSearch = (searchData) => {
        let filtered = mockSpaces;

        if (searchData.location) {
            filtered = filtered.filter(space =>
                space.location.toLowerCase().includes(searchData.location.toLowerCase())
            );
        }

        if (searchData.category) {
            filtered = filtered.filter(space => space.category === searchData.category);
        }

        if (searchData.priceRange) {
            const [min, max] = searchData.priceRange.includes('+')
                ? [parseInt(searchData.priceRange), Infinity]
                : searchData.priceRange.split('-').map(Number);
            filtered = filtered.filter(space => space.price >= min && space.price <= max);
        }

        setSpaces(filtered);
    };

    const handleSpaceClick = (space) => {
        setSelectedSpace(space);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSpace(null);
    };

    const toggleFavorite = (spaceId, e) => {
        e.stopPropagation();
        setFavorites(prev =>
            prev.includes(spaceId)
                ? prev.filter(id => id !== spaceId)
                : [...prev, spaceId]
        );
    };

    const MapView = () => (
        <div style={{
            height: '600px',
            backgroundColor: '#f0f0f0',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23e2e8f0" fill-opacity="0.4"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")'
        }}>
            <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: 'white',
                padding: '0.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                fontSize: '0.875rem',
                color: '#666'
            }}>
                🗺️ Google Maps integration would go here
            </div>

            {/* Mock map pins for spaces */}
            {spaces.map((space, index) => (
                <div
                    key={space.id}
                    onClick={() => handleSpaceClick(space)}
                    style={{
                        position: 'absolute',
                        left: `${20 + (index * 15)}%`,
                        top: `${30 + (index * 10)}%`,
                        backgroundColor: '#667eea',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
                        transform: 'scale(1)',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        animation: `fadeIn 0.6s ease ${index * 0.1}s both`
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
                    }}
                >
                    📍 ${space.price}/day
                </div>
            ))}
        </div>
    );

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
            <style>
                {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes heartBeat {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
          .heart-beat {
            animation: heartBeat 0.3s ease;
          }
        `}
            </style>

            {/* Hero Section with Search */}
            <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '4rem 1rem',
                color: 'white',
                textAlign: 'center'
            }}>
                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    fontFamily: 'Inter, sans-serif',
                    animation: 'slideUp 0.8s ease both'
                }}>
                    Browse Amazing Spaces
                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    opacity: '0.9',
                    marginBottom: '2rem',
                    fontFamily: 'Inter, sans-serif',
                    animation: 'slideUp 0.8s ease 0.2s both'
                }}>
                    Discover the perfect venue for your next project
                </p>
            </div>

            <div style={{ padding: '0 1rem' }}>
                <SearchBar onSearch={handleSearch} />
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '2rem',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <div>
                        <h2 style={{
                            fontSize: '1.5rem',
                            color: '#1a202c',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: '600'
                        }}>
                            {spaces.length} spaces available
                        </h2>
                        {favorites.length > 0 && (
                            <p style={{
                                color: '#667eea',
                                fontSize: '0.9rem',
                                fontFamily: 'Inter, sans-serif'
                            }}>
                                ❤️ {favorites.length} favorites saved
                            </p>
                        )}
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div style={{ display: 'flex', backgroundColor: 'white', borderRadius: '8px', padding: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                            <button
                                onClick={() => setViewMode('grid')}
                                style={{
                                    padding: '0.5rem 1rem',
                                    border: 'none',
                                    borderRadius: '6px',
                                    backgroundColor: viewMode === 'grid' ? '#667eea' : 'transparent',
                                    color: viewMode === 'grid' ? 'white' : '#4a5568',
                                    cursor: 'pointer',
                                    fontSize: '0.875rem',
                                    fontWeight: '500',
                                    fontFamily: 'Inter, sans-serif'
                                }}
                            >
                                📋 Grid
                            </button>
                            <button
                                onClick={() => setViewMode('map')}
                                style={{
                                    padding: '0.5rem 1rem',
                                    border: 'none',
                                    borderRadius: '6px',
                                    backgroundColor: viewMode === 'map' ? '#667eea' : 'transparent',
                                    color: viewMode === 'map' ? 'white' : '#4a5568',
                                    cursor: 'pointer',
                                    fontSize: '0.875rem',
                                    fontWeight: '500',
                                    fontFamily: 'Inter, sans-serif'
                                }}
                            >
                                🗺️ Map
                            </button>
                        </div>

                        <select style={{
                            padding: '0.5rem',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            fontFamily: 'Inter, sans-serif'
                        }}>
                            <option>Sort by: Recommended</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Rating</option>
                        </select>
                    </div>
                </div>

                {viewMode === 'map' ? (
                    <MapView />
                ) : (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '2rem'
                    }}>
                        {spaces.map((space, index) => (
                            <div
                                key={space.id}
                                onClick={() => handleSpaceClick(space)}
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                                    border: '1px solid #e2e8f0',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    animation: `fadeIn 0.6s ease ${index * 0.1}s both`
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-6px)';
                                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                                }}
                            >
                                <div style={{
                                    height: '220px',
                                    backgroundImage: `url(${space.images[0]})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative'
                                }}>
                                    <button
                                        onClick={(e) => toggleFavorite(space.id, e)}
                                        style={{
                                            position: 'absolute',
                                            top: '1rem',
                                            right: '1rem',
                                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                            border: 'none',
                                            borderRadius: '50%',
                                            width: '40px',
                                            height: '40px',
                                            cursor: 'pointer',
                                            fontSize: '1.2rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.2s ease'
                                        }}
                                        className={favorites.includes(space.id) ? 'heart-beat' : ''}
                                    >
                                        {favorites.includes(space.id) ? '❤️' : '🤍'}
                                    </button>

                                    <div style={{
                                        position: 'absolute',
                                        bottom: '1rem',
                                        left: '1rem',
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
                                        fontSize: '1.25rem',
                                        fontWeight: '700',
                                        marginBottom: '0.5rem',
                                        color: '#1a202c',
                                        fontFamily: 'Inter, sans-serif'
                                    }}>
                                        {space.title}
                                    </h3>

                                    <p style={{
                                        color: '#667eea',
                                        fontSize: '0.9rem',
                                        marginBottom: '0.5rem',
                                        fontWeight: '500',
                                        fontFamily: 'Inter, sans-serif'
                                    }}>
                                        {space.category}
                                    </p>

                                    <p style={{
                                        color: '#718096',
                                        fontSize: '0.9rem',
                                        marginBottom: '1rem',
                                        fontFamily: 'Inter, sans-serif'
                                    }}>
                                        📍 {space.location}
                                    </p>

                                    <div style={{ marginBottom: '1rem' }}>
                                        {space.amenities.slice(0, 3).map((amenity, i) => (
                                            <span key={i} style={{
                                                backgroundColor: '#f0f4ff',
                                                color: '#4338ca',
                                                padding: '0.25rem 0.5rem',
                                                borderRadius: '4px',
                                                fontSize: '0.75rem',
                                                marginRight: '0.5rem',
                                                marginBottom: '0.5rem',
                                                display: 'inline-block',
                                                fontFamily: 'Inter, sans-serif'
                                            }}>
                                                {amenity}
                                            </span>
                                        ))}
                                    </div>

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
                                                ${space.price}
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

                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr 1fr 1fr',
                                        gap: '0.5rem',
                                        fontSize: '0.75rem',
                                        textAlign: 'center',
                                        marginBottom: '1rem'
                                    }}>
                                        <div style={{ padding: '0.5rem', backgroundColor: '#fef5e7', borderRadius: '6px', color: '#92400e' }}>
                                            <div style={{ fontWeight: '600' }}>${Math.round(space.price / 8)}</div>
                                            <div>per hour</div>
                                        </div>
                                        <div style={{ padding: '0.5rem', backgroundColor: '#eff6ff', borderRadius: '6px', color: '#1e40af' }}>
                                            <div style={{ fontWeight: '600' }}>${space.price}</div>
                                            <div>per day</div>
                                        </div>
                                        <div style={{ padding: '0.5rem', backgroundColor: '#f0fdf4', borderRadius: '6px', color: '#166534' }}>
                                            <div style={{ fontWeight: '600' }}>${space.price * 25}</div>
                                            <div>per month</div>
                                        </div>
                                        <div style={{ padding: '0.5rem', backgroundColor: '#fdf2f8', borderRadius: '6px', color: '#be185d' }}>
                                            <div style={{ fontWeight: '600' }}>${space.price * 300}</div>
                                            <div>per year</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {spaces.length === 0 && (
                    <div style={{
                        textAlign: 'center',
                        padding: '4rem 2rem',
                        color: '#666',
                        animation: 'slideUp 0.6s ease both'
                    }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'Inter, sans-serif' }}>No spaces found</h3>
                        <p style={{ fontFamily: 'Inter, sans-serif' }}>Try adjusting your search filters or browse all spaces</p>
                        <button
                            onClick={() => setSpaces(mockSpaces)}
                            style={{
                                marginTop: '1rem',
                                backgroundColor: '#667eea',
                                color: 'white',
                                padding: '0.75rem 1.5rem',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontFamily: 'Inter, sans-serif'
                            }}
                        >
                            Show All Spaces
                        </button>
                    </div>
                )}
            </div>

            <SpaceModal
                space={selectedSpace}
                isOpen={isModalOpen}
                onClose={closeModal}
                setCurrentView={setCurrentView}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
            />
        </div>
    );
};

export default BrowseSpaces;