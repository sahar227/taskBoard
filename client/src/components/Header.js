import React from 'react';
import Auth from './Auth';
import '../styles/Header.css';

export default function Header() {
    return (
        <div className="header">
            <h1 className="logo">Logo</h1>
            <Auth/>
        </div>
    )
}
