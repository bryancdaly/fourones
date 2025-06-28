import React, { useState } from 'react';

const HostSpace = ({ setCurrentView }) => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: '',
        address: '',
        capacity: '',
        price: '',
        amenities: []
    });

    const categories = [
        'Retail Pop-Up', 'Workshop/Class Space', 'Gallery/Exhibition',
        'Event Hall', 'Co-working', 'Kitchen/Studio', 'Pop-up Restaurant',
        'Yoga/Wellness Studio', 'Outdoor/Event Space', 'Office'
    ];

    const amenitiesList = [
        'WiFi', 'Parking', 'AV Equipment', 'Climate Control',
        'Security System', 'Kitchen', 'Storage', 'Loading Dock'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAmenityChange = (amenity) => {
        setFormData(prev => ({
            ...prev,
            amenities: prev.amenities.includes(amenity)
                ? prev.amenities.filter(a => a !== amenity)
                : [...prev.amenities, amenity]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Space listing submitted! (This is a demo)');
        console.log('Form data:', formData);
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
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

                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#2d3748' }}>List Your Space</h1>
                    <p style={{ fontSize: '1.2rem', color: '#666' }}>Turn your commercial space into a source of income</p>
                </div>

                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    padding: '2rem',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Space Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="Modern Gallery Space"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '6px',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Category</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '6px',
                                        fontSize: '1rem'
                                    }}
                                >
                                    <option value="">Select Category</option>
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                rows="4"
                                placeholder="Describe your space, its features, and what makes it special..."
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '6px',
                                    fontSize: '1rem',
                                    resize: 'vertical'
                                }}
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder="123 Queen Street, Auckland"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '6px',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Capacity</label>
                                <input
                                    type="number"
                                    name="capacity"
                                    value={formData.capacity}
                                    onChange={handleInputChange}
                                    placeholder="50"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '6px',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Daily Rate (NZD)</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    placeholder="150"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '6px',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '1rem', fontWeight: '500' }}>Amenities</label>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                                {amenitiesList.map(amenity => (
                                    <label key={amenity} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <input
                                            type="checkbox"
                                            checked={formData.amenities.includes(amenity)}
                                            onChange={() => handleAmenityChange(amenity)}
                                            style={{ marginRight: '0.5rem' }}
                                        />
                                        <span>{amenity}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '1rem', fontWeight: '500' }}>Photos</label>
                            <div style={{
                                border: '2px dashed #e2e8f0',
                                borderRadius: '8px',
                                padding: '3rem',
                                textAlign: 'center',
                                backgroundColor: '#f8f9fa'
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📸</div>
                                <p style={{ color: '#666', marginBottom: '0.5rem' }}>Upload photos of your space</p>
                                <p style={{ color: '#999', fontSize: '0.9rem' }}>PNG, JPG up to 10MB each</p>
                                <button type="button" style={{
                                    marginTop: '1rem',
                                    backgroundColor: '#667eea',
                                    color: 'white',
                                    padding: '0.75rem 1.5rem',
                                    border: 'none',
                                    borderRadius: '6px',
                                    cursor: 'pointer'
                                }}>
                                    Choose Files
                                </button>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                            <button type="button" style={{
                                padding: '0.75rem 1.5rem',
                                border: '1px solid #e2e8f0',
                                borderRadius: '6px',
                                backgroundColor: 'white',
                                cursor: 'pointer'
                            }}>
                                Save Draft
                            </button>
                            <button type="submit" style={{
                                padding: '0.75rem 1.5rem',
                                backgroundColor: '#667eea',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontWeight: '500'
                            }}>
                                Publish Listing
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HostSpace;