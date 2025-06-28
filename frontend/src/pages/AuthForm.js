import React, { useState } from 'react';

const AuthForm = ({ type, setCurrentView }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        accountType: 'hirer',
        rememberMe: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${type === 'login' ? 'Login' : 'Account creation'} successful! (This is a demo)`);
        console.log('Form data:', formData);
        setCurrentView('home');
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f8f9fa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
        }}>
            <div style={{ maxWidth: '400px', width: '100%' }}>
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    padding: '2rem',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1rem auto',
                            color: 'white',
                            fontSize: '1.5rem',
                            fontWeight: 'bold'
                        }}>
                            4¹
                        </div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#2d3748' }}>
                            {type === 'login' ? 'Welcome Back' : 'Create Account'}
                        </h2>
                        <p style={{ color: '#666' }}>
                            {type === 'login' ? 'Sign in to your account' : 'Join the Four Ones community'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {type === 'signup' && (
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="John Doe"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '6px',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>
                        )}

                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="john@example.com"
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '6px',
                                    fontSize: '1rem'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="••••••••"
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '6px',
                                    fontSize: '1rem'
                                }}
                            />
                        </div>

                        {type === 'signup' && (
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Account Type</label>
                                <select
                                    name="accountType"
                                    value={formData.accountType}
                                    onChange={handleInputChange}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '6px',
                                        fontSize: '1rem'
                                    }}
                                >
                                    <option value="hirer">Space Hirer</option>
                                    <option value="provider">Space Provider</option>
                                </select>
                            </div>
                        )}

                        {type === 'login' && (
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleInputChange}
                                    />
                                    <span style={{ fontSize: '0.9rem' }}>Remember me</span>
                                </label>
                                <button type="button" style={{
                                    background: 'none',
                                    border: 'none',
                                    color: '#667eea',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem'
                                }}>
                                    Forgot password?
                                </button>
                            </div>
                        )}

                        <button type="submit" style={{
                            width: '100%',
                            backgroundColor: '#667eea',
                            color: 'white',
                            padding: '0.75rem',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '1rem',
                            fontWeight: '500',
                            cursor: 'pointer',
                            marginBottom: '1rem'
                        }}>
                            {type === 'login' ? 'Sign In' : 'Create Account'}
                        </button>
                    </form>

                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>
                            {type === 'login' ? "Don't have an account?" : "Already have an account?"}
                            <button
                                onClick={() => setCurrentView(type === 'login' ? 'signup' : 'login')}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: '#667eea',
                                    cursor: 'pointer',
                                    marginLeft: '0.25rem',
                                    fontWeight: '500'
                                }}
                            >
                                {type === 'login' ? 'Sign up' : 'Sign in'}
                            </button>
                        </p>
                        <button
                            onClick={() => setCurrentView('home')}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: '#999',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                marginTop: '1rem'
                            }}
                        >
                            ← Back to Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;