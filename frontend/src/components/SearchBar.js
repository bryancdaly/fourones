import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchData, setSearchData] = useState({
        location: '',
        category: '',
        date: '',
        priceRange: ''
    });

    const categories = [
        'Retail Pop-Up', 'Workshop/Class Space', 'Gallery/Exhibition',
        'Event Hall', 'Co-working', 'Kitchen/Studio', 'Pop-up Restaurant',
        'Yoga/Wellness Studio', 'Outdoor/Event Space', 'Office'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSearch = () => {
        onSearch(searchData);
    };

    return (
        <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            margin: '-3rem auto 2rem auto',
            position: 'relative',
            zIndex: 10,
            maxWidth: '1000px'
        }}>
            <h3 style={{
                textAlign: 'center',
                marginBottom: '1.5rem',
                color: '#2d3748',
                fontSize: '1.5rem'
            }}>
                Find Your Perfect Space
            </h3>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '1.5rem'
            }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#4a5568' }}>
                        📍 Location
                    </label>
                    <input
                        type="text"
                        name="location"
                        value={searchData.location}
                        onChange={handleInputChange}
                        placeholder="Auckland, NZ"
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
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#4a5568' }}>
                        🏢 Category
                    </label>
                    <select
                        name="category"
                        value={searchData.category}
                        onChange={handleInputChange}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            fontSize: '1rem'
                        }}
                    >
                        <option value="">All Categories</option>
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#4a5568' }}>
                        📅 Date
                    </label>
                    <input
                        type="date"
                        name="date"
                        value={searchData.date}
                        onChange={handleInputChange}
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
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#4a5568' }}>
                        💰 Price Range
                    </label>
                    <select
                        name="priceRange"
                        value={searchData.priceRange}
                        onChange={handleInputChange}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            fontSize: '1rem'
                        }}
                    >
                        <option value="">Any Price</option>
                        <option value="0-100">$0 - $100</option>
                        <option value="100-200">$100 - $200</option>
                        <option value="200-300">$200 - $300</option>
                        <option value="300+">$300+</option>
                    </select>
                </div>
            </div>

            <div style={{ textAlign: 'center' }}>
                <button
                    onClick={handleSearch}
                    style={{
                        backgroundColor: '#667eea',
                        color: 'white',
                        padding: '1rem 3rem',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        minWidth: '200px'
                    }}
                >
                    🔍 Search Spaces
                </button>
            </div>
        </div>
    );
};

export default SearchBar;