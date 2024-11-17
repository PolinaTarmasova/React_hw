import './Select.css'
import React from 'react';

export default function Select() {
    return (
        <select>
            <option>Вам понравился фильм?</option>
            <option value="true">Да</option>
            <option value="false">Нет</option>
        </select>
    );
}