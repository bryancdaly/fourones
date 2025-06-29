import React from 'react';

const Logo = ({ size = 'default', showText = true }) => {
    // Define sizes for different use cases
    const sizes = {
        small: { box: 32, font: 16 },
        default: { box: 40, font: 20 },
        medium: { box: 48, font: 24 },
        large: { box: 60, font: 30 }
    };

    const { box, font } = sizes[size] || sizes.default;

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
                width: `${box}px`,
                height: `${box}px`,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: `${font}px`,
                fontWeight: 'bold',
                fontFamily: 'Inter, sans-serif'
            }}>
                4¹
            </div>
            {showText && (
                <span style={{
                    fontSize: `${font}px`,
                    fontWeight: '700',
                    color: '#1a202c',
                    fontFamily: 'Inter, sans-serif'
                }}>
                    Four Ones
                </span>
            )}
        </div>
    );
};

export default Logo;