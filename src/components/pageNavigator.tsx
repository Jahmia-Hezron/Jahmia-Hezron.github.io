
"use client";

import { useAutoRouteScroll } from "@/hooks/useAutoRouteScroll";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const pages = ["/", "/about", "/tech-stack", "/works", "/clients", "/contact"];

export default function PageNavButton() {
    const { goToNext, goToPrev } = useAutoRouteScroll(pages);

    return (
        <div className="go-page-wrapper">
            <div className="go-page" onClick={goToPrev} title="Previous Page">
                <FaArrowUp />
            </div>
            <div className="go-page" onClick={goToNext} title="Next Page">
                <FaArrowDown />
            </div>
        </div>
    );
}
