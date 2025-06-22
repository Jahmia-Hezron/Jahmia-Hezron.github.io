'use client';

import React from 'react';
import Navbar from './navbar';

interface BannerProps {
    children?: React.ReactNode;
    className?: string;
}

const Banner: React.FC<BannerProps> = ({ children, className }) => {
    return (
        <div className={`banner-container ${className || ''}`}>
            <div className="banner-overlay">
                <Navbar />
                <div className="banner-content">
                    {children}
                </div>
            </div>
            <div className="home-line"></div>
            <p className='copywrite'>© Copywrite Hezron Jahmia Presci 2025</p>
        </div>
    );
};

export default Banner;
