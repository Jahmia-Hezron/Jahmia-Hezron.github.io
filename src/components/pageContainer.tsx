'use client';

import { useInView } from "@/hooks/useInView";

interface PageContainerProps {
    children: React.ReactNode;
    className?: string;
}

const PageContainer = ({ children, className = "" }: PageContainerProps) => {
    const { ref, isVisible } = useInView();

    return (
        <div className={`container ${className}`}>
            <div
                ref={ref}
                className={`container contents fade-up ${isVisible ? "visible" : ""}`}
            >
                {children}
            </div>
        </div>
    );
};

export default PageContainer;
