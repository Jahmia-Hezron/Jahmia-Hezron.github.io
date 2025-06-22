import React from "react";

interface ButtonProps {
    label?: string;
    className?: string;
    href?: string; // for links or file downloads
    download?: boolean | string; // enables download if true or provides filename
    onClick?: () => void; // for standard button behavior
    type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
    label,
    className,
    href,
    download,
    onClick,
    type = "button",
}) => {
    if (href) {
        return (
            <a
                href={href}
                download={download}
                className={className}
            // target={download ? "_self" : "_blank"}
            // rel="noopener noreferrer"
            >
                {label}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={className}>
            {label}
        </button>
    );
};

export default Button;
