'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa6';
import { siteContent } from '@/content/siteContent';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-inner">
                    <div className="company-name">
                        <div className='company-logo'>
                            <a
                                href={siteContent.contact.links.gitHub}
                                className="icon-bubble"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub"
                            >
                                <FaGithub className="contact-icon" />
                            </a>
                        </div>Hezron Jahmia.</div>
                    <div className="menu-toggle" onClick={() => setMenuOpen(true)}>
                        <FiMenu />
                    </div>

                </div>
            </nav>

            <div className={`side-panel ${menuOpen ? 'open' : ''}`}>
                <div className="panel-header">
                    <FiX className="close-icon" onClick={() => setMenuOpen(false)} />
                </div>
                <div className="panel-links">
                    <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link href="/tech-stack" onClick={() => setMenuOpen(false)}>Tech Stack</Link>
                    <Link href="/works" onClick={() => setMenuOpen(false)}>Works</Link>
                    <Link href="/clients" onClick={() => setMenuOpen(false)}>Clients</Link>
                    <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>
            </div>

            {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
        </>
    );
};

export default Navbar;
