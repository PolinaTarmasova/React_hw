import './Input.css';
import React, { ChangeEvent } from 'react';

interface InputProps {
    className?: string;
    placeholderText: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ className, placeholderText, value, onChange }: InputProps) {
    return (
        <input
            className={className}
            placeholder={placeholderText}
            value={value}
            onChange={onChange}
        />
    );
}