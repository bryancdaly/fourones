import React from 'react';
import logo from '../assets/logo.png';

const Logo = ({ size = 'default', showText = true, style = {} }) => {
    const sizes = {
        small: { box: 32, font: 16 },
        default: { box: 40, font: 20 },
        medium: { box: 48, font: 24 },
        large: { box: 60, font: 30 }
    };
    const { box, font } = sizes[size] || sizes.default;

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                ...style
            }}
        >
            <img
                src={logo}
                alt="Four Ones Logo"
                style={{
                    width: `${box}px`,
                    height: `${box}px`,
                    maxWidth: '100%',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    background: 'transparent'
                }}
            />
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