import './P.css'
import React, { DOMElement } from 'react';

interface PProps {
    className?: string;
    data: React.ReactNode;
}

export default function P({ className, data }: PProps) {
    return (
        <p className={className}>{data}</p>
    );
}