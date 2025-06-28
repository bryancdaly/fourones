import React from 'react';

const Logo = ({ size = 'default', color = 'default' }) => {
    const sizes = {
        small: { container: 32, icon: 20 },
        default: { container: 40, icon: 24 },
        large: { container: 60, icon: 36 }
    };

    const colors = {
        default: {
            bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            text: 'white'
        },
        white: {
            bg: 'white',
            text: '#2d3748'
        },
        dark: {
            bg: '#2d3748',
            text: 'white'
        }
    };

    const currentSize = sizes[size];
    const currentColor = colors[color];

    return (
        <div style={{
            width: `${currentSize.container}px`,
            height: `${currentSize.container}px`,
            background: currentColor.bg,
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            {/* Location Pin Icon */}
            <svg
                width={currentSize.icon}
                height={currentSize.icon}
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    fill={currentColor.text}
                />
                {/* House icon inside the pin */}
                <rect
                    x="9"
                    y="7"
                    width="6"
                    height="4"
                    rx="0.5"
                    fill={currentColor.bg === 'white' ? '#667eea' : 'rgba(255,255,255,0.8)'}
                />
                <path
                    d="M9.5 9.5h1v1.5h-1v-1.5zm2 0h1v1.5h-1v-1.5z"
                    fill={currentColor.text}
                />
            </svg>
        </div>
    );
};

export default Logo;