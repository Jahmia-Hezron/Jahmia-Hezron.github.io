import React from "react";

interface ImageBlockProps {
    className?: string;
}

const ImageBlock: React.FC<ImageBlockProps> = ({
    className = "img-fluid",
}) => {
    return (
        <div className={className}>
        </div>
    );
};

export default ImageBlock;
