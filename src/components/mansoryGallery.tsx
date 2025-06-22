
'use client';

import { useRef } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import lgZoom from "lightgallery/plugins/zoom";

import { FaLink, FaSearchPlus } from "react-icons/fa";
import Masonry from "react-masonry-css";


interface Project {
    title: string;
    category: string;
    thumb: string;
    full: string;
    link?: string;
    caption?: string;
}

interface MasonryGalleryProps {
    items: Project[];
}

export default function MasonryGallery({ items }: MasonryGalleryProps) {
    const lightbox = useRef<{ openGallery: (index: number) => void } | null>(null);


    return (
        <>
            <LightGallery
                onInit={(ref) => {
                    if (ref) lightbox.current = ref.instance;
                }}
                dynamic
                plugins={[lgZoom]}
                download={false}
                dynamicEl={items.map((item) => ({
                    src: item.full,
                    thumb: item.thumb,
                    subHtml: `<h2>${item.title}</h2><p>${item.caption ?? ""}</p>`,
                }))}
            />

            <Masonry
                breakpointCols={{ default: 3, 900: 2, 600: 1 }}
                className="masonry"
                columnClassName="masonry-column"
            >
                {items.map((item, index) => (
                    <div className="masonry-card" key={item.title}>
                        <div
                            className="card"
                            onClick={() => lightbox.current?.openGallery(index)}
                        >
                            <img
                                src={item.thumb}
                                alt={item.title}
                            />




                            <div className="overlay">
                                <div className="icons">
                                    <FaSearchPlus />
                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FaLink />
                                        </a>
                                    )}
                                </div>


                                <div className="text">
                                    <h2>{item.title}</h2>
                                    <p>{item.category}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Masonry>
        </>
    );
}
