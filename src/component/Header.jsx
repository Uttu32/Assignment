import React from 'react';
import logo from "../assets/ClaimZippy.png";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    return (
        <nav className='flex items-center px-8 shadow-lg'>
            <MenuIcon sx={{ color: 'blue', width: '2.5rem', height: '2.5rem' }} />
            <div className='w-full flex items-center justify-center'>
                <img src={logo} alt="" />
            </div>
        </nav>
    )
}
