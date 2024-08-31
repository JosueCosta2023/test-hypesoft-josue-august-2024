import React from "react";

interface ButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
    className?:string;
    type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    className = '',
    type = 'button'
}) => {
    return(
        <button
        onClick={onClick}
        className={`px-4 py-2 rounded focus:outline-none focus:ring-2 hover:bg-brand-sec hover:text-brand-white ${className}`}
        type={type}>
            {children}
        </button>
    )
}

 
export default Button;