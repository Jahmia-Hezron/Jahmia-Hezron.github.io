'use client';

import { useEffect, useRef } from 'react';
import styles from '@/styles/ClientsCruipTicker.module.scss';

interface ClientsCruipTickerProps {
    logos: string[];
    altTexts?: string[];
}

export default function ClientsCruipTicker({ logos, altTexts = [] }: ClientsCruipTickerProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const ul = wrapper.querySelector('ul');
        if (!ul) return;

    }, []);

    return (
        <div ref={wrapperRef} className="carousel">
            <ul className="track">
                {logos.map((logo, i) => (
                    <li key={i}>
                        <img src={logo} alt={altTexts[i] || `Logo ${i + 1}`} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
