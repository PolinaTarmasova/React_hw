import React from 'react';
import './Button.css'


interface ButtonProps {
    className: string;
    click: () => void;
    buttonText: string;
}


export default function Button({ className, click, buttonText }: ButtonProps) {
    return (
        <button className={className} onClick={click}>{buttonText}</button>
    );
}